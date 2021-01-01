const express = require('express');
const router = express.Router();

let user = {
    name: 'Mario',
    email: 'Mario@gmail.com',
    password: '123',
    levle: 1,
    highScore: 90
}
router.get('/api', 
    (req,res)=>{
        res.json({msg: "HELLO WORLD"})
    }
);

router.get('/api/arkanoid/login', 
    (req, res)=>{
        res.json(user)
    }
);

module.exports = router;