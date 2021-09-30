import react, { useContext } from "react";
import Card from "../imagenes/performance.jpg";
import {ItemCount} from "./ItemCount";
import eliminar from "../imagenes/eliminar.png";
import cerrar from "../imagenes/cerrar.png";
import { DataContext } from "../Context/DataProvider";

export const Carrito = () => {
    const value = useContext(DataContext)
    const [menu,setMenu] = value.menu;
    const [carrito,setCarrito] = value.carrito;

    const tooglefalse = () =>{
        setMenu(false);
    }

    const show1 = menu ? "carrito_contenedor show" : "carrito_contenedor";
    const show2 = menu ? "carrito show" : "carrito";
    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito_close" onClick={tooglefalse}>
                    <img src={cerrar}></img>
                </div>
                <h2>Su carrito</h2>
                <div className="carrito_center">

                {
                    carrito.map((producto)=>(
                        
                    <div className="carrito_item">
                        <img src={producto.imagen.default} className="card"></img>
                        <div>
                            <h3>{producto.titulo}</h3>
                            <p className="precio">{producto.precio}</p>
                        </div>
                        <div>
                           <ItemCount />
                        </div>
                        <div className="remove_item">
                            <img src={eliminar}></img>
                        </div>
                    </div>
                    ))
                }
                </div>
              <div className="carrito_footer">
                    <h3>Total: $ </h3>
                    <button className="btn_pay">Pagar</button>
                </div>  
            </div>
        </div>
    )
}