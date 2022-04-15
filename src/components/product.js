import React, { Component } from "react";

export default function product(props) {
  //   console.log(props);
  return (
    <>
      <div
        className="card mx-auto my-3 p-2 bg-dark text-light"
        style={{ width: "auto", maxWidth: "50rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">
            {props.product.name}
            <span className="float-end">Qty. {props.product.quantity}</span>
          </h5>
          <p className="card-text">{props.product.desc}</p>
          <div>
            <a className="btn btn-primary float-end">
              Rs. {props.product.price * props.product.quantity}
            </a>
            <div className="btn-group me-2 float-start" role="group">
              <a className="btn btn-primary" onClick={()=>{props.decQty(props.index)}}>
                -
              </a>
              <span className="btn btn-light">
              {props.product.quantity}
              </span>
              <a className="btn btn-primary" onClick={()=>{props.incQty(props.index)}}>
                +
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
