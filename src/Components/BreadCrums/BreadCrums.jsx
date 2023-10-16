import React from 'react';
import './BreadCrums.css'
import arrow_icon from "../Assets/breadcrum_arrow.png"

const BreadCrums = (props) => {
    
    const {product} = props

    return (
        <div className='breadcrums'>
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    );
}

export default BreadCrums;
