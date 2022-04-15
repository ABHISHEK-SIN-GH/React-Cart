import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/productList";
import Footer from "./components/footer";
import React, { useState } from "react";
import AddItem from "./components/addItem";

function App({ name }) {
  // console.log(name);

  let products = [
    {
      price: 99999,
      name: "i-phone",
      desc: "This is a smartest phone...",
      quantity: 1,
      stock: 20,
    },
    {
      price: 10000,
      name: "shoes",
      desc: "This is a sport shoe...",
      quantity: 1,
      stock: 6,
    },
    {
      price: 3000,
      name: "watch",
      desc: "This is a smartest watch...",
      quantity: 1,
      stock: 5,
    },
    {
      price: 10000,
      name: "wear",
      desc: "This is a smartest wear watch...",
      quantity: 1,
      stock: 8,
    },
    {
      price: 300,
      name: "sunglasses",
      desc: "This is a smartest glasses...",
      quantity: 1,
      stock: 15,
    },
  ];

  let [productList, setProduct] = useState(products);

  let incQuantity = (index) => {
    let newPro = [...productList];
    newPro[index].quantity < newPro[index].stock
      ? newPro[index].quantity++
      : (newPro[index].quantity = newPro[index].stock);
    setProduct(newPro);
  };

  let decQuantity = (index) => {
    let newPro = [...productList];
    newPro[index].quantity > 0
      ? newPro[index].quantity--
      : (newPro[index].quantity = 0);
    setProduct(newPro);
  };

  let totalAmount = () => {
    let totalAmt = 0;
    let tax = 0;
    let grandTotal = 0;

    for (let index = 0; index < productList.length; index++) {
      totalAmt =
        totalAmt + productList[index].price * productList[index].quantity;
    }

    tax = totalAmt * 0.18;
    grandTotal = totalAmt + tax;

    const payment = {
      totalAmt,
      tax,
      grandTotal,
    };
    return payment;
  };

  let resetCart = () => {
    let newProductList = [...productList];
    newProductList.map((product) => {
      product.quantity = 0;
    });
    setProduct(newProductList);
  };

  let addItem = (name,desc,price,stock) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      desc: desc,
      quantity: 1,
      stock: stock,
    });
    setProduct(newProductList);
    console.log(newProductList);
  };

  let removeItem = (index) => {
    let newProductList = [...productList];
    newProductList.splice(index, 1);
    setProduct(newProductList);
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid row mx-auto">
        <div className="col-lg-8 bg-danger">
          <AddItem addItem={addItem}/>
          <ProductList
            products={productList}
            incQty={incQuantity}
            decQty={decQuantity}
          />
        </div>
        <div className="col-lg-4 bg-primary">
          <Footer
            products={productList}
            payments={totalAmount}
            resetCart={resetCart}
            removeItem={removeItem}
          />
        </div>
      </div>
    </>
  );
}
export default App;
