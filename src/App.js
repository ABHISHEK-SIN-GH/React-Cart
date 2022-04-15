import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";

  let incQuantity = (index) => {
    let newPro = [...productList];
    newPro[index].quantity < newPro[index].stock ? newPro[index].quantity++ : newPro[index].quantity = newPro[index].stock;
    setProduct(newPro);
  };

  let decQuantity = (index) => {
    let newPro = [...productList];
    newPro[index].quantity > 0 ? newPro[index].quantity-- : newPro[index].quantity = 0;
    setProduct(newPro);
  };

  let totalAmount = () => {
    let totalAmt = 0;
    let tax = 0;
    let grandTotal = 0;

    for (let index = 0; index < productList.length; index++) {
      totalAmt = totalAmt + (productList[index].price * productList[index].quantity);
    }

    tax = totalAmt * 0.18;
    grandTotal = totalAmt + tax;

    const payment = {
      totalAmt,
      tax,
      grandTotal
    }
    return payment;
  }

  return (
    <>
      <Navbar />
  </>
}

export default App;
