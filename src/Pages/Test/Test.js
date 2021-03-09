import React, { useState } from 'react'
import {uploadProductToFirestore} from "../../Redux/Products/ProductsAction"
import {connect} from 'react-redux'
import Cart from '../../Components/Cart/Cart';
import Header from '../../Components/Header/Header';
import Paragraph from '../../Components/Paragraph/Paragraph';
import Button from '../../Components/Button/Button';
const Test = ({uploadProductToFirestore}) => {

    var [category , setCategory] = useState("");
    var [title , setTitle] = useState("");
    var [cost , setCost] = useState("");
    var [description , setDescription] = useState("");
    var [quantity , setQuantity] = useState("");
    var [coverPhoto , setCoverPhoto] = useState(null);

    var handleSubmit = (e) => {
        e.preventDefault();
        var productObj={
            category,
            title,
            cost,
            description,
            quantity,
            coverPhoto
        }
        uploadProductToFirestore(productObj)
    }

    return (
        <div>
          <h1>Test</h1>  
          {/* <form onSubmit={handleSubmit}>
              <input onChange={(e)=>setCategory(e.target.value)} value={category} type="text" placeholder="Enter Category"/><br/>
              <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Enter Title"/><br/>
              <input onChange={(e)=>setCost(e.target.value)} value={cost} type="text" placeholder="Enter Cost"/><br/>
              <input onChange={(e)=>setQuantity(e.target.value)} value={quantity} type="text" placeholder="Enter Quantity"/><br/>
              <textarea onChange={(e)=>setDescription(e.target.value)} value={description} col="30" rows="10" placeholder="Enter description"></textarea><br/>
              <input onChange={(e)=>setCoverPhoto(e.target.files[0])} type="file" placeholder="Cover photo"/><br/>
              <button type="submit">Submit</button>

          </form> */}
          <Cart/>
          <Header fontSize={32} fontweight="bold">This is a Header</Header>
          <Header fontSize={16} fontweight="light">This is a Header</Header>
          <Header fontSize={50} fontweight="semiBold">This is a Header</Header>
          
          <Paragraph fontSize={32} fontweight="bold">This is a Header</Paragraph>
          <Paragraph fontSize={16} fontweight="light">This is a Header</Paragraph>
          <Paragraph fontSize={50} fontweight="semiBold">This is a Header</Paragraph>
         
          <Button fontSize={32} fontweight="bold" background="orange">Click me</Button>
        
        </div>
    )
}

var actions = {
    uploadProductToFirestore
}

export default connect(null,actions)(Test)
