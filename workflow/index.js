const express = require('express');
      app = express();
      port = 3000;

app.get('/tasks',function(req,res){
    res.json({
        'propertiy': 'value'
    });
});

app.listen(port);
console.log('app is running on port 3000');