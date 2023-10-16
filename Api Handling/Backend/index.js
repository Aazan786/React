import express from 'express'

const app = express();


app.get('/api/products', (req, res)=>{
    const products = [
        {
            id: 1,
            name:'table wooden',
            price: 200,
            image: 'https://images.pexels.com/photos/347140/pexels-photo-347140.jpeg?auto=compress&cs=tinysrgb&w=600'
        },  {
            id: 2,
            name:'table glass',
            price: 300,
            image: 'https://images.pexels.com/photos/347140/pexels-photo-347140.jpeg?auto=compress&cs=tinysrgb&w=600'
        },  {
            id: 3,
            name:'table stone',
            price: 500,
            image: 'https://images.pexels.com/photos/347140/pexels-photo-347140.jpeg?auto=compress&cs=tinysrgb&w=600'
        },  {
            id: 4,
            name:'table chair',
            price: 400,
            image: 'https://images.pexels.com/photos/347140/pexels-photo-347140.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ]

    if(req.query.search){
        const filterProducts=products.filter(product =>product.name.includes(req.query.search))
        res.send(filterProducts)
        return;
    }

    setTimeout(()=>{
        res.send(products);
    }, 3000)
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server running on ${port}`);
})