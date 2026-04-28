const express = require('express');
const {products, users} = require('./data');

const app = express();

app.get('/api/products', (req, res)=>{
    res.json(products);
})

app.get('/api/products/:productID', (req, res)=>{
    console.log(req.params);
    const {productID} = req.params;
    const singeProduct = products.find((product)=> product.id === Number(productID));

    if(!singeProduct) return res.status(404).send("Product doesn't exist");
    res.json(singeProduct);
})

app.get('/api/v1/q', (req, res)=>{
    console.log(req.query);
    res.send("hello worls!!");
})


app.listen(3000, ()=>{
    console.log("Server is listening...");
})