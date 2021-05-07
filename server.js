const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

//DB config
const db = require('./config/keys').mongoURI;
//Connect to db
mongoose.connect(db).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));



app.get('/api/todos', (req, res) => {
    const todos =         
    [
    {
        id: 1,
        text: 'Test 1',
        day: 'today',
        reminder: true,
    },
    {
        id: 2,
        text: 'Test 2',
        day: 'tomorrow',
        reminder: true,
    },
    {
        id: 3,
        text: 'Test 3',
        day: 'today',
        reminder: false,
    },
];
res.json(todos);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`))