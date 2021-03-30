import React from "react";
import CartDry85 from "./Components/CartDry85/CartDry85";
import InventroyDry85 from "./Components/InventroyDry85/InventroyDry85";

function App(props) {
  return (
    <div className="container">
      <h1 className="text-center" >Assignment #3 - Dongheon Ryu (300306185)</h1>
      <div className="row">
        <div className="col-8">
          <InventroyDry85 />
        </div>
        <div className="col-4">
          <CartDry85 />
        </div>
      </div>
    </div>
  );
}

export default App;
