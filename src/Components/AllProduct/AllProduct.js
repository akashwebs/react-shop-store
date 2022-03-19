import React, { useEffect, useState } from 'react';
import SignleProduct from '../SignleProduct/SignleProduct';

const AllProduct = ({addCart}) => {
    const [allProduct, setAllProduct]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setAllProduct(data))
    },[])
    return (
        <div className='row container mx-auto g-4'>
            {
                allProduct.map(product => <SignleProduct product={product} addCart={addCart} key={product.id}></SignleProduct>)
            }
        </div>
    );
};

export default AllProduct;