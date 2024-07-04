const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email:{type: String, required: true},
  Mob: {type: String , required: true},
});

module.exports = mongoose.model('User', userSchema);
