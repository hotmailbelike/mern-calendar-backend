const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
	task: {
		type: String
	}
});

module.exports = Task;
