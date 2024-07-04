const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('./config');
const { submitComplaint, updateComplaintStatus } = require('./stellar');
const Complaint = require('./models/complaint');
const User = require('./models/user');

const app = express();
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(config.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Authentication Routes
app.use('/auth', require('./routes/auth'));

// Middleware for JWT Authentication
function auth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}

// Logging Complaint Function
const logComplaint = async (complaintDetails) => {
  const complaint = new Complaint({
    complaintId: complaintDetails.id,
    details: complaintDetails,
    timestamp: new Date(),
    status: 'Submitted'
  });

  await complaint.save();
};

// Routes
app.post('/submitComplaint', auth, async (req, res) => {
  const complaintDetails = req.body;
  try {
    await submitComplaint(complaintDetails);
    await logComplaint(complaintDetails);
    res.status(200).send('Complaint logged successfully on Stellar');
  } catch (error) {
    console.error('Error logging complaint on Stellar:', error);
    res.status(500).send('Error logging complaint on Stellar');
  }
});

app.get('/complaints', auth, async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).json(complaints);
  } catch (error) {
    console.error('Error retrieving complaints:', error);
    res.status(500).send('Error retrieving complaints');
  }
});

app.get('/complaint/:id', auth, async (req, res) => {
  const complaintId = req.params.id;
  try {
    const complaint = await Complaint.findOne({ complaintId });
    if (complaint) {
      res.status(200).json(complaint);
    } else {
      res.status(404).send('Complaint not found');
    }
  } catch (error) {
    console.error('Error retrieving complaint:', error);
    res.status(500).send('Error retrieving complaint');
  }
});

app.post('/updateComplaintStatus', auth, async (req, res) => {
  const { complaintId, newStatus } = req.body;
  try {
    await updateComplaintStatus(complaintId, newStatus);
    await Complaint.updateOne({ complaintId }, { status: newStatus });
    res.status(200).send('Complaint status updated successfully');
  } catch (error) {
    console.error('Error updating complaint status:', error);
    res.status(500).send('Error updating complaint status');
  }
});

// Server Start
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
