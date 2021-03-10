import React , {useEffect} from 'react'
import {connect} from 'react-redux'
import CategoryListItem from '../CategoryListItem/CategoryListItem'
import {fetchProducts} from "../../Redux/Products/ProductsAction"
import {categorizedProducts} from "../../Utility/ProductstUtil"
import "./CategoryList.css"
const CategoryList = ({fetchProducts, categories}) => {
    // console.log(categories)
    useEffect(() => {
        //CDM
        fetchProducts()

        return () => {
           
        }
    }, [])

    return (
        <div className="categoryList">
            {/* <h1>Category List</h1> */}
            {categories.map((category) => <CategoryListItem key={category.category} {...category}/>)}
        -------------------------------------------------------
        </div>
    )
}


var actions = {
    fetchProducts
}
var mapState = (state) => ({
    categories : categorizedProducts(state.products) //fn called from ProductsUtil
})
export default connect(mapState,actions)(CategoryList)
