const express = require('express')
const router = express.Router()
const User = require('../models/Users')


router.get('/users', (req, res) => {
    return console.log('GET HTTP method on user resource');
});

router.post('/users', async (req, res) => {
    try {
        const createdUser = await User.create(req.body)
        res.json(createdUser)
    } catch(error) {
        console.log(error)
    }
});

router.put('/users/:userId', async (req, res) => {
   console.log(req.body)
   const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
   res.json(updatedUser)
});

router.delete('/users/:userId', (req, res) => {
    return console.log(
        `DELETE HTTP method on user/${req.params.userId} resource`,
    );
});

module.exports = router