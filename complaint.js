const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));
  


const complaintSchema=new mongoose.Schema(
    {
        complaintNo: {type: String,required: true},
        details: {type: String,required: true},
        timestamp: {type: Date},
        status: {type: String},
    }
);

module.exports = mongoose.model('Complaint', complaintSchema);

