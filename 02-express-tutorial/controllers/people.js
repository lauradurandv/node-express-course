const {people} = require('../data');

function getPeople(req,res){
    res.status(200).json(people)
}

function addPerson(req,res){
    const name = req.body.name;

    if (!name){
        //400 indicates error on client side
        return res.status(400).json({
            success: false, 
            message: "Please provide a name."
        })
    }

    people.push({
        id:people.length + 1,
        name: name
    });

    return res.status(201).json({
        success:true,
        name: name
    });
}

module.exports = {addPerson, getPeople}