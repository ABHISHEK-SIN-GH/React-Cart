import React, { Component } from "react";
import Product from "./product.js";

class ProductList extends Component {
  render() {
    // console.log(this.props.products[0].name);
    return this.props.products.length > 0 ? this.props.products.map((productDetails,i) => {
      return <Product product={productDetails} key={i} incQty={this.props.incQty} decQty={this.props.decQty} index={i}/>;
    }) : <h1 className="container mt-3 text-center">Please add products in the cart...</h1> ;
  }
}

export default ProductList;
