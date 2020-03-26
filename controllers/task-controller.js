const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Task = mongoose.model('Task');

//create task
router.post('/calendarApp', async (req, res) => {
	const task = new Task(req.body);
	try {
		await task.save();
		return res.status(200).json(task);
	} catch (error) {
		// console.log(error);
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err)
		});
	}
});

//edit task
router.put('/calendarApp/:taskId', async (req, res) => {
	try {
		let task = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true, runValidators: true, useFindAndModify: false });

		await task.save();
		res.json(task);
	} catch (error) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err)
		});
	}
});

// delete task
router.delete('/calendarApp/:taskId', async (req, res) => {
	try {
		let task = await Task.findByIdAndRemove(req.params.taskId, { useFindAndModify: false });
		res.json(task);
	} catch (error) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err)
		});
	}
});

module.exports = router;
