const express = require('express');
const {users} = require('../data');

const router = express.Router();


// get method
// post method -> so send data, ex : from form
// put method -> updates the data
// delete method -> delete the data

app.use(express.static('./public-methods'));

app.use(express.urlencoded({extended : false})); // to read the body



// updating the name where userId = id;
router.put('/:id', (req, res)=>{
    const id = req.params;
    const {name} = req.body;

    const person = users.find(
        (person)=> person.userId === Number(id)
    );

    if(!person) return res.status(404).send("person doesn't exists");

    const newusers = users.map((person)=>{
        if(person.  userId === Number(id)){
            person.username = name;
        }
        return person;
    })
    res.status(200).json(newusers)


})


router.delete('/:id', (req, res)=>{
    const id = req.params;
    const {name} = req.body;

    const person = users.find(
        (person)=> person.userId === Number(id)
    );

    if(!person) return res.status(404).send("person doesn't exists");

    const newusers = users.filter((person)=> person.userId != Number(id));
    res.status(200).json(newusers)
})


module.exports = router;