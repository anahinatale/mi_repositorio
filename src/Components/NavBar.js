import CartWidget from './CartWidget';
import './NavBar.css';
import Logo from "../imagenes/logo.png";
import {Link} from "react-router-dom";

function NavBar () {
   return (
   <div className="NavBar">
      <Link to="">
         <div>
           <img src={Logo} alt="" width="125" className="logo"></img>  
         </div>
      </Link>
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/contacto">Contacto</Link>
    <div>
     <CartWidget />
     <span className="item_total">0</span>
    </div>   
   </div>
   );
   };
   export default NavBar;

