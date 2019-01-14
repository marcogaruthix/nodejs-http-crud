const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//require('./routes.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(req.url);
    next();
});
app.use(require('./App/Controllers/UserController.js'));

app.listen(3000, function(){
    console.log('Server listening...');
});