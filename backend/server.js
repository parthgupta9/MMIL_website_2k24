require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
const mongoURI = process.env.MONGODB_URL; 
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

//schema
const formSchema = new mongoose.Schema({
  email: String,
  phone: String,
  message: String,
});

const Form = mongoose.model('Form', formSchema);

// form submission
app.post('/api/submit-form', async (req, res) => {
  const { email, phone, message } = req.body;
  const newForm = new Form({ email, phone, message });
  try {
    await newForm.save();
    res.status(201).send('Form data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving form data');
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});