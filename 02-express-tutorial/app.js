//import module
const express = require('express');
const {products} = require('./data')


//invoke
const app = express()

//set up static and middleware
//for files that dont need to change
app.use(express.static('./public'))

app.get('/api/v1/test',(req,res)=>{
    res.status(200).json({ message: "It worked"});
})

//get request for products
app.get('/api/v1/products',(req,res)=> {
    res.status(200).json(products);
})

//get request for specific product with specific id
app.get('/api/v1/products/:productID', (req,res) => {
    //grabbing ID and product
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind);

    if (!product){
        res.status(404).json({ message: "Product not found."})
    }else{
        res.status(200).json(product)
    }
})

//get request for 
//search term that starts with specific letters 
//or 
//specific limit number
//or
//price less than or equal to a number
app.get('/api/v1/query', (req,res) => {

    const {search, limit, price} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter(
            (product) => {
                return product.name.startsWith(search)
            }
    )}

    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    if(price){
        sortedProducts = sortedProducts.filter(
            (product) => {
                return product.price <= Number(price)
            }
        )
    }

    //check if query return empty to return more common response
    if (sortedProducts.length < 1){
        return res.status(200).json({success:true, data:[]})
    }else{
        return res.status(200).json(sortedProducts)
    }
    
})



//req for page not exist (handles all http verbs)
app.all('*',(req,res)=> {
    res.status(404).send('<h1>Resource not found </h1>')
})
// start server
app.listen(3000, ()=> {
    console.log('server is listening on port 3000...')
})


