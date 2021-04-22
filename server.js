const express = require('express');

const app = express();

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

const port = 5000;

app.listen(port, () => console.log(`Server started at port ${port}`))