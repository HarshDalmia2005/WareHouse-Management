const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors())


mongoose.connect('mongodb://localhost/godown');

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
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name:{
        type:String
    }
});


UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', UserSchema);
const Location = mongoose.model('Location', LocationSchema);
const Item = mongoose.model('Item', ItemSchema);

// const createUser = async () => {
//     const newUser = new User({
//         email: 'harsh@gmail.com',
//         password: 'Harsh@2005' 
//     });
//     await newUser.save();
//     console.log('User created:', newUser);
// };
// createUser();





app.get('/locations', async (req, res) => {
    const locations = await Location.find();
    res.json(locations);
});


app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
        res.json({ message: 'Login successful', token ,name:user.name});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})


app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
      
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }

        user = new User({
            email,
            password, 
        });

        await user.save();

        const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });

        res.status(201).json({
            message: 'User registered successfully',
            token,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
});


app.listen(3000, () => console.log('Server running on port 3000'));
