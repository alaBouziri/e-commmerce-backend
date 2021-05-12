const express = require ('express');
const app = express();
const products = require('./routes/products');

app.use('/api',products);
app.use(express.json());

app.listen(3001,() => console.log("server UP ♥"));