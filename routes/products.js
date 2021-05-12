const router = require('express').Router();

router.get('/products' , (req,res)=>{
    return res.status(200).json(
        [
        { id: 1, name: 'Shoes', description: 'Running shoes!', price: '50', image: 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|540:540' },
        { id: 2, name: 't-shirt', description: 'PINK T-Shirt!', price: '18', image: 'https://rukminim1.flixcart.com/image/714/857/jmwch3k0/shoe/j/y/n/dg-292-white-blue-patti-10-digitrendzz-white-original-imaf9p36fkykfjqt.jpeg?q=50' },
       ]
    
    )

});

module.exports = router;