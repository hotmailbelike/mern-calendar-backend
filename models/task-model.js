import mongoose from 'mongoose';

const Task = mongoose.model('Task', {
	task: {
		type: String,
		required: true
	}
});

module.exports = Task;
