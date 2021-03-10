import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import "./CategoryListItem.css"


const CategoryListItem = ({category,products}) => {
    return (
        <div className="categoryListItem">
            <h1 className="categoryText"><Link to={`/category-products/${category}`}>{category}</Link></h1>
            {products.map((product) =>  <ProductCard {...product} key={product.title}/>)}
            {/* <Link to={`/category-products/${category}`}><button>View More</button></Link> <br/>
            --------------------------------------------------------------- */}
        </div>
    )
}

export default CategoryListItem 