const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Learner = require('../models/Learner');

//Get all learners
router.get('/', (req, res)=>{
    Learner.findAll()
    .then(learners=>{
        console.log(learners)
        res.sendStatus(200)
    })
    .catch(err=>console.log(err));
})

module.exports = router;