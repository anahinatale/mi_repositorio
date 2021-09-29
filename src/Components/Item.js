import React from "react";
import IMG from "../imagenes/performance.jpg";

export const ProductosItem = ({
    id,  
    nombre, 
    precio, 
    imagen, 
}) => {
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
          <button className="btn">
              Añadir al Carrito
          </button>
          <div>
              <a href="" className="btn">Info</a>
          </div>
      </div>
     </div> 
    )
    }