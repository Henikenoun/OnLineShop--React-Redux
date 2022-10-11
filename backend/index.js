const express = require('express');
const cors = require('cors');
const products = require('./product');

const app = express();
app.use(express.json());
app.use(cors())

app.get("/products", (req, res) => {
    res.send(products);
});


const Port = process.env.PORT || 5000 ;

app.listen(Port,console.log(`Server running on your port ${Port}` ));