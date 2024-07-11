const express = require('express');
const app = express();
const connectDB = require('./db/db')
connectDB();
const User = require('./db/users');
const cors = require('cors')

//Middleware
app.use(express.json());

//Cors
app.use(cors())

//Register
app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body)
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({message : "User Registered Successfully"});
    } catch (e) {
        res.status(404).json(e.message);
    }
})

//Login

app.post('/login', async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await User.findOne({ name });
        if (!user) {
            return res.status(404).json("User not found");
        }
        if (password !== user.password) {
            return res.status(404).json('Invalid Password');
        }
        res.status(200).json({messgae : "Login Successfull"});
    } catch (e) {
        res.status(404).json(e.message);
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})