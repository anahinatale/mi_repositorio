import react from "react";
import Card from "../imagenes/performance.jpg";
import {ItemCount} from "./ItemCount";
import eliminar from "../imagenes/eliminar.png";
import { Button } from "semantic-ui-react";

export const Carrito = () => {
    return (
        <div className="carrito_contenedor">
            <div className="carrito">
                <div className="carrito_close">
                </div>
                <h2>Su carrito</h2>
                <div className="carrito_center">
                    <div className="carrito_item">
                        <img src={Card}></img>
                        <div>
                            <h3>Título</h3>
                            <p className="precio">$</p>
                        </div>
                        <div>
                           <ItemCount />
                        </div>
                        <div className="remove_item">
                            <img src={eliminar}></img>
                        </div>
                    </div>
                </div>
                <div className="carrito_footer">
                    <h3>Total: $ </h3>
                    <button className="btn_pay">Pagar</button>
                </div>
            </div>
        </div>
    )
}