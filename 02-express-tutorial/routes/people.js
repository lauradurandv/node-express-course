const express = require("express");
const router = express.Router();
const {addPerson, getAllPeople, getPerson, getPersonByID, updatePerson, deletePerson} = require('../controllers/people');


//get request for people
router.get('/', getAllPeople)

//post request to add people
router.post('/', addPerson)

//post request to get a particular entry from people array
router.get('/:id', getPersonByID)

//post to update a user name
router.put('/:id', updatePerson)

//post to delete a user
router.delete('/:id',deletePerson)

//export everything
module.exports = router