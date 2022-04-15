import React, { Component } from "react";
class Footer extends Component {
  render() {
    // console.log(this.props.products);
    // let payments = this.props.payments();
    // let reset = this.props.resetCart();
    return (
      <>
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title text-center mb-3 fs-3">Order Summary</h5>
            <div className="bg-danger">
              <img
                src="https://cdn-icons-png.flaticon.com/512/126/126083.png?w=360"
                height={200}
                width={200}
                className="d-block mx-auto p-3"
                alt="..."
              />
            </div>
            <p className="card-text mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            {this.props.products.map((product, i) => {
              return (
                <li className="list-group-item" key={i} onClick={()=>{this.props.removeItem(i)}}>
                  {i + 1}.) {product.name} | Rs. {product.price} Per item/-{" "}
                  <span className="float-end badge bg-secondary">
                    Qty {product.quantity}
                  </span>
                </li>
              );
            })}
            <li className="list-group-item bg-primary mt-2 mb-1 fw-bold">
              <span className="mb-1 d-block">
                Total Amount: <span className="float-end">Rs. {this.props.payments().totalAmt} /-</span>
              </span>
              <span className="mb-1 d-block">
                Taxable Amount (Tax): <span className="float-end">Rs. {this.props.payments().tax} /-</span>
              </span>
              <hr/>
              <span className="mb-1 d-block">
                Grand Total Amount: <span className="float-end">Rs. {this.props.payments().grandTotal} /-</span>
              </span>
            </li>
          </ul>
          <div className="card-body">
            <a className="btn btn-success d-block mb-2">
              Procced To Buy
            </a>
            <a className="btn btn-danger d-block" onClick={()=>{this.props.resetCart()}}>
              Reset All Items
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
