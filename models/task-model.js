const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
	task: {
		type: String
	},
	taskId: {
		type: String,
		default: 'N/A',
		required: true
	}
});

module.exports = Task;
