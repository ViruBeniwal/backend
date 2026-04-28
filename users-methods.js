const express = require('express');
const {usersRoutes} = require('./routes/users');

const app = express();


// get method
// post method -> so send data, ex : from form
// put method -> updates the data
// delete method -> delete the data

app.use(express.static('./public-methods'));

app.use(express.urlencoded({extended : false})); // to read the body



app.use('/api/users', usersRoutes)

module.exports = router;