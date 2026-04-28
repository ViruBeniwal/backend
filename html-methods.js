const express = require('express');
const {users} = require('./data');

const app = express();


// get method
// post method -> so send data, ex : from form
// put method -> updates the data
// delete method -> delete the data

app.use(express.static('./public-methods'));

app.use(express.urlencoded({extended : false})); // to read the body

app.post('/login', (req, res)=>{
    console.log(req.body);
    const {username} = req.body;

    if(username) return res.status(200).send(`Hii, ${username}`);
    return res.status(401).send("Please provide a name.");
})


// updating the name where userId = id;
app.put('/api/users/:id', (req, res)=>{
    const id = req.params;
    const {name} = req.body;

    const person = users.find((person)=>{
        person.userId === Number(id);
    })

    if(!person) return res.status(404).send("person doesn't exists");

    const newusers = users.map((person)=>{
        if(person.  userId === Number(id)){
            person.username = name;
        }
        return person;
    })
    res.status(200).json(newusers)


})

app.listen(3000, ()=>{
    console.log("Server is Listening...");
})