const express = require('express');
const router = express.Router();
const {getAllTasks,addTask,getTask,deleteTask,updateTask} = require('../controllers/task');

router.route('/').get(getAllTasks).post(addTask)

router.route('/:id').delete(deleteTask).patch(updateTask).get(getTask)





module.exports = router