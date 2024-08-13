let {people} = require('../data');

function getAllPeople(req,res){
    res.status(200).json(people)
}

function addPerson(req,res){
    const {name} = req.body;

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

function getPersonByID(req,res){
    const id = parseInt(req.params.id);
    const person = people.find( people => people.id === id)
    
    if (!person){
        return res.status(400).json({
            success: false,
            message: "User not found"
        })
    }

    return res.status(200).json(person)
}

function updatePerson(req,res){
    const id = parseInt(req.params.id);

    const person = people.find( person => person.id === id)

    if (!person){
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }

    const {name} = req.body;
    person.name = name;

    

    return res.status(201).json(person)

}

function deletePerson(req,res){
    const id = parseInt(req.params.id);
    people = people.filter( people => people.id !== id );

    if (!people){
        return res.status(400).json({
            success: false,
            message: "User not found."
        })
    }

    return res.status(200).json({
        success: true,
        message: "User has been deleted"
    })
}


module.exports = {addPerson, getAllPeople, getPersonByID,updatePerson,deletePerson}