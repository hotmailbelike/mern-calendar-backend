const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

//Connect to dbms
mongoose.connect('mongodb+srv://user_0:papponi312@cluster0-vq45a.mongodb.net/calendarDB', { useUnifiedTopology: true, useNewUrlParser: true });

//Get Models
require('./models/professor-model');

//Get Controllers
const taskController = require('./controllers/task-controller');

app.use(
	express.urlencoded({
		extended: true
	})
);

app.use(express.json());
app.use(cors());

//fire controller
// app.use(profController);

//general routes

/*==============================================================================================================*/

const port = process.env.PORT || 2000;

app.listen(port, () => {
	console.log('Server up at port', port);
});
