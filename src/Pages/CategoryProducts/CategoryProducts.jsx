import React, {useEffect} from 'react'
import {connect} from "react-redux";
import { fetchCategoryProducts, clearProducts } from '../../Redux/Products/ProductsAction';
import ProductCard from "../../Components/ProductCard/ProductCard"
import "./CategoryProducts.css"


const CategoryProducts = ({match:{params: {category}},fetchCategoryProducts,products,clearProducts}) => {

    useEffect(() => {
        // CDM
        fetchCategoryProducts(category) 
        return () => {
            clearProducts()
        }
    }, [])
    
    // console.log(products)
    
    return (
        <div className="categoryProducts">
            <div className="category_product_list">
            {/* <h1>{category} Products Page</h1> */}
            {products.map((product) => <ProductCard key={product.title} {...product}/>)}

            </div>
        </div>
    )
}

var actions = {
    fetchCategoryProducts,
    clearProducts

}

var mapState = (state) => ({
    products: state.products
})

export default connect(mapState,actions)(CategoryProducts)