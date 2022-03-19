import React from 'react';
import './Menu.css'
const Menu = ({cartCount}) => {

    return (
        <div className='row container my-3'>
            <div className="col-4">logo</div>
            <div className="col-8 d-flex justify-content-end">
                <ul className='d-flex menu'>
                    <li className='items p-3 mx-3 bg-dark text-white'>home</li>
                    <li className='items p-3 mx-3 bg-dark text-white'>about</li>
                    <li className='items p-3 mx-3 bg-dark text-white'>cart <sup>{cartCount}</sup></li>
                    <li className='items p-3 mx-3 bg-dark text-white'> login</li>
                </ul>
            </div>
            
        </div>
    );
};

export default Menu;