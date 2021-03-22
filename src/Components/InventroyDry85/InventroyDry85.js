import React, { useState, useEffect } from "react";
import { addCart, getInventory } from "../../Service/Service";

function InventroyDry85(props) {
  const [inventory, setInventory] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    refreshPage();
  }, []);

  function refreshPage() {
    setLoading(true);

    getInventory()
      .then((json) => {
        setInventory(json);

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

  async function addCartButton(e) {
    await addCart(e.target.value);
    reloadPage();
  }

  function reloadPage() {
    window.location.reload(false);
  }
  return (
    <div className="col">
      <table className="table">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr>
              <td>{item.SKU}</td>
              <td>{item.Name}</td>
              <td>{item.Quantity}</td>
              <td>{item.Price}</td>
              <td>
                {item.Quantity === 0 ? (
                  <button className="btn btn-secondary">Out of Stock</button>
                ) : (
                  <button
                    className="btn btn-success"
                    value={item.SKU}
                    onClick={addCartButton}
                  >
                    Add
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventroyDry85;
