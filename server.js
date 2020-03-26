const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Connect to dbms
mongoose.connect('mongodb+srv://user_0:papponi312@cluster0-vq45a.mongodb.net/calendarDB', { useUnifiedTopology: true, useNewUrlParser: true });

//Get Models
require('./models/task-model');

//Get Controllers
const taskController = require('./controllers/task-controller');

app.use(
	express.urlencoded({
		extended: true
	})
);
// app.use(cors());
app.use(express.json());

//fire controller
app.use(taskController);

//general routes

/*==============================================================================================================*/

const port = process.env.PORT || 2000;

app.listen(port, () => {
	console.log('Server up at port', port);
});
