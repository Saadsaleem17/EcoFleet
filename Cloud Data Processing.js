const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/smartWaste', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dataSchema = new mongoose.Schema({
  type: String,
  data: Object,
  timestamp: { type: Date, default: Date.now },
});

const Data = mongoose.model('Data', dataSchema);

const app = express();
app.use(express.json());

app.post('/api/data', async (req, res) => {
  const newData = new Data({
    type: req.body.type,
    data: req.body.data,
  });
  await newData.save();
  res.send("Data received and stored");
});

app.listen(3000, () => console.log('Server running on port 3000'));
