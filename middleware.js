const express = require('express');

const app = express();

const logger = (req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getUTCDate();
    console.log(method, url, time);

    next();
}

const authorize = (req, res, next)=>{
    const {user} = req.query;
    if(user === 'viru'){
        req.user = {name:'viru', id:"AE22B015"};
        next();
    }
    else{
        res.status(401).send("Unauthorized");
    }
}

app.use([logger, authorize]) // this makes all get(..., logger, .....);
app.get('/', (req, res)=>{
    res.send("Home Page");
})

app.get('/about', (req, res)=>{
    res.send("This is all about me ...");
    console.log(req.user);
})



app.listen(3000, ()=>{
    console.log("Server is Listening...");
})