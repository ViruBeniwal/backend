const express = require('express');

const app = express();

app.use(express.static('./public'));
app.listen(3000, ()=>{
    console.log("Server is listening...");
})

// app.get('/', (req, res)=>{
//     res.status(200).send("Home Page");
// })

// app.get('/about', (req, res)=>{
//     res.status(200).send("Thats all about me.");
// })

// // for all other requests
// app.use((req, res)=>{   
//     res.status(404).send("<h1>Page not found</h1>");
// })
