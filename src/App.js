import React from "react";
import NavBar from "./Components/NavBar";
import {ProductosLista} from "./Components/ItemListContainer";
import {ItemCount} from "./Components/ItemCount";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Paginas } from "./Components/Paginas";
import { DataProvider } from "./Context/DataProvider"
import { Carrito } from "./Components/Carrito";


function App() {

  return (
    <DataProvider>
       <div className="App">
    <Router>
    <Route>
      <NavBar />
      <Carrito />
      <Paginas />
    </Route>
    </Router>
    </div>
    </DataProvider>
  );
}

export default App;




