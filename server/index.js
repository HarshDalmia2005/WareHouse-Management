const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/godown');

// Location Schema
const LocationSchema = new mongoose.Schema({
    id: String,
    name: String,
    parent_godown: { type: String, default: null }
});

const ItemSchema = new mongoose.Schema({
    item_id: String,
    name: String,
    quantity: Number,
    category: String,
    status: String,
    godown_id: String,
    price: Number,
    brand: String,
    attributes: Object,
    image_url: String
});

const Location = mongoose.model('Location', LocationSchema);
const Item = mongoose.model('Item', ItemSchema);

// Routes
app.get('/locations', async (req, res) => {
    const locations = await Location.find();
    res.json(locations);
});


app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// Server
app.listen(3000, () => console.log('Server running on port 3000'));
