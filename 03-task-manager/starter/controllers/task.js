const Task = require('../models/task');

const getAllTasks = (req,res) => {
    res.send('all items from the file')
}

const addTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    }catch(error){
        res.status(400).json({
            success: false,
            message: "Invalid input"
        })
    }
}

const getTask = (req,res) => {
    res.json({id:req.params.id})
}

const deleteTask = (req,res) => {
    res.json({id:req.params.id})
}

const updateTask = (req,res) => {
    res.json({name:req.body.name})
}
module.exports = {
    getAllTasks,
    addTask,
    getTask,
    deleteTask,
    updateTask
}