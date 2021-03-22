import React, { useState, useEffect } from "react";
import { checkCart, deleteCar, getCart } from "../../Service/Service";

function CartDry85(props) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    refreshPage();
  }, []);

  useEffect(() => {
    setTotal(function sumPrice() {
      let sum = 0;
      cart.forEach((item) => {
        sum += item.Price * item.Quantity;
      });
      return sum.toFixed(2);
    });
  }, [cart]); // whenever Setcart work

  function refreshPage() {
    setLoading(true);

    getCart()
      .then((json) => {
        setCart(json);

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }

  if (loading)
    return (
      <div className="alert alert-info">
        Please stand by while we connect your call....
      </div>
    );
  if (error)
    return (
      <div className="alert alert-danger">There was an error loading...</div>
    );

  async function deleteCartButton(e) {
    await deleteCar(e.target.value);

    refreshPage();
  }
  async function checkOutButton() {
    await checkCart();
    reloadPage();
    refreshPage();
  }
  function reloadPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <div className="col">
        <table className="table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr>
                  <td>{item.SKU}</td>
                  <td>{item.Name}</td>
                  <td>{item.Quantity}</td>
                  <td>{item.Price}</td>
                  <td>
                    <button
                      className="alert-primary alert"
                      onClick={deleteCartButton}
                      value={item.SKU}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <button className="btn btn-primary" onClick={checkOutButton}>
                Checkout
              </button>
            </div>
            <div className="col-sm-4">
              <div> ${total}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDry85;
