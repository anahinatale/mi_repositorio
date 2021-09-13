import carrito from './imagenes/carrito.png';
import './NavBar.css';

function CartWidget () {
    return (
    <div className="CartWidget">
     <img src = {carrito} />      
    </div>
    );
    };
    export default CartWidget;