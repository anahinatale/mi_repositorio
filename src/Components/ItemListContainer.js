import React, { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import {ProductosItem} from "./Item";


export const ProductosLista = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos

    return (
    <>
    <div className="ItemList">
        <h1 className="title">PRODUCTOS</h1>
          <div className="productos">
            {
              productos.map(producto => (
              <ProductosItem 
              key={producto.id}
              id={producto.id}  
              nombre={producto.nombre}  
              precio={producto.precio} 
              imagen={producto.imagen}  
              stock={producto.stock} 
              />
              ))
            }
    </div>
    </div>
    </>
    )
}