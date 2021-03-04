import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'

const CategoryListItem = ({category,products}) => {
    return (
        <div>
            <h1>{category}</h1>
            {products.map((product) =>  <ProductCard {...product} key={product.title}/>)}
            <Link to={`/category-products/${category}`}><button>View More</button></Link> <br/>
            ---------------------------------------------------------------
        </div>
    )
}

export default CategoryListItem 