const express = require('express');
      app = express();
      port = 3000;

app.get('/task', function(req, res){
    res.json({
        'name': 'This is the firt task',
        'status': 'pending'
    });
});

app.get('/tasks', function(req, res){
    res.json([
        {
        'name': 'This is the firt task',
        'status': 'pending'
        },
        {
            'name': 'This is the second task',
            'status': 'pending'
        }
    ]);
});

app.listen(port);
console.log('Runinng app on port 3000.');