import React from 'react';
import Modals from '../Modals/Modals';

const SignleProduct = (props) => {
    const { title, price, image}=props.product;
    return (
        
    <div className='col-4 '>
        <div className='card p-4 h-100 d-flex flex-column justify-content-between'>
            <div>
                <img className='w-50 m-4 ' src={image} alt="" />
                <div className="card-body">
                <h3>{title.slice(0,15)}</h3>
                <p>price: {price}</p>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                <button onClick={props.addCart} className="btn btn-primary">add Cart</button>
                <Modals allProduct={props.product}></Modals>
                <button className="btn btn-success">remove</button>
            </div>
        </div>

            
    </div>
    
    );
};

export default SignleProduct;