import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
const Task = mongoose.model('Task');

router.post('/calendarApp', async (req, res) => {
	const task = new Task(req.body);
	try {
		await task.save();
		return res.status(200).json(task);
	} catch (error) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err)
		});
	}
});
