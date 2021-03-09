import React , {useEffect} from 'react'
import {connect} from 'react-redux'
import CategoryList from '../../Components/CategoryList/CategoryList'
import {fetchProducts, clearProducts} from '../../Redux/Products/ProductsAction'
import { categorizedProducts } from '../../Utility/ProductstUtil'
import "./Category.css"

const Category = ({clearProducts}) => {
    useEffect(() => {
        //CDM
        return () => {
        //CWU
        clearProducts()

        }
    }, [])
    return (
        <div className="category">
            {/* <h1>Category List</h1> */}
            <CategoryList/>
        </div>
    )
}

var actions = {
    clearProducts
}

export default connect(null,actions)(Category)