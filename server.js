const express = require('express');
const mongoose = require('mongoose');

const todos = require('./routes/api/todos');

const app = express();

app.use(express.json());

//DB config
const db = require('./config/keys').mongoURI;
//Connect to db
mongoose.connect(db).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

app.use('/api/todos', todos);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`))