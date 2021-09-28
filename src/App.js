import React from "react";
import NavBar from "./Components/NavBar";
import {ProductosLista} from "./Components/ItemList";
import {ItemCount} from "./Components/ItemCount"


function App() {

  return (
    <div className="App">
      <NavBar />
      <ProductosLista />
      <ItemCount stock="4" initial="9"/>
    </div>
  );
}

export default App;




