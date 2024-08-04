const express = require("express");
const router = express.Router();
let {people} = require('../data');
const {addPerson, getPeople} = require('../controllers/people');


//get request for people
router.get('/', getPeople)

//post request to add people
router.post('/', addPerson)

//export everything
module.exports = router