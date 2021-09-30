import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";

export const ProductosItem = ({
    id,  
    nombre, 
    precio, 
    imagen, 
}) => {

    const value = useContext (DataContext);
    const addCarrito = value.addCarrito;


    return (
    <div className="producto">
        <div className="producto_img">
          <img src={imagen.default} alt="nombre" width="250"></img>
        </div>
      <div className="producto_footer">
          <h1>{nombre}</h1>
          <p className="price">${precio}</p>
      </div>
      <div className="button">
          <button className="btn" onClick={() => addCarrito(id)}>
              Añadir al Carrito
          </button>
          <div>
              <a href="" className="btn">Info</a>
          </div>
      </div>
     </div> 
    )
    }