import React , {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../../Redux/Products/ProductsAction'
import { categorizedProducts } from '../../Utility/ProductstUtil'

const Category = ({fetchProducts, categories}) => {
    useEffect(() => {
        //CDM
        fetchProducts()

        return () => {
           
        }
    }, [])


    return (
        <div>
            <h1>Category Page</h1>
        </div>
    )
}

var actions = {
    fetchProducts
}
var mapState = (state) => ({
    categories : categorizedProducts(state.products) //fn called from ProductsUtil
})
export default connect(mapState,actions)(Category)