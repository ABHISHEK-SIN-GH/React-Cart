import React, { Component } from "react";
class AddItem extends Component {
  constructor(props){
      super(props);
      this.state = {
          productName : "",
          productDesc : "",
          productPrice : 0,
          ProductStock : 0
      }
  }
  render() {
    return (
      <>
        <form
          className="card mx-auto my-3 p-2 bg-dark text-light"
          style={{ width: "auto", maxWidth: "50rem" }}
          onSubmit={(e)=>{
              e.preventDefault();
              this.props.addItem(this.state.productName,this.state.productDesc,this.state.productPrice,this.state.ProductStock);
          }}
        >
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Product Name..."
              onChange={(e)=>{this.setState({productName:e.currentTarget.value})}}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="desc"
              placeholder="Product Description..."
              onChange={(e)=>{this.setState({productDesc:e.currentTarget.value})}}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Product Price..."
              onChange={(e)=>{this.setState({productPrice:e.currentTarget.value})}}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              id="stock"
              placeholder="Product Stock..."
              onChange={(e)=>{this.setState({ProductStock:e.currentTarget.value})}}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default AddItem;
