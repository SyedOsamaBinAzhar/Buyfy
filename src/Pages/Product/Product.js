import React, {useEffect,useState} from 'react'
import {connect} from "react-redux"
import ProductCard from '../../Components/ProductCard/ProductCard'
import {fetchSpecificProduct} from "../../Redux/Products/ProductsAction"


const Product = ({fetchSpecificProduct, match: {params: {productId}}}) => {
    var [product,setProduct] = useState({})
    
    useEffect(async()=> {
          //CDM
    var productData = await fetchSpecificProduct(productId)
    setProduct(productData)

    }  
    
    ,[])



    return (
        <div>
            <h1>Product</h1>
            { product.title && <ProductCard {...product} key={product.title} />}
        </div>
    )
}

var actions = {
    fetchSpecificProduct
}

export default connect(null,actions)(Product)
