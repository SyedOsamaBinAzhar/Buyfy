import React , {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../../Redux/Products/ProductsAction'

const Category = ({fetchProducts}) => {

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

export default connect(null,actions)(Category)