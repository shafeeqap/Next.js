import React from 'react'
import AddToCart from './AddToCart';
import styles from './ProductCard.module.css'

const ProductCard = () => {
    return (
        <div className='py-2 px-2 bg-blue-400 hover:bg-blue-600 text-white text-2xl'>
            <AddToCart />
        </div>
    )
}

export default ProductCard