import CartWidget from './CartWidget';
import './NavBar.css';
import Logo from "../imagenes/logo.png";
import {Link} from "react-router-dom";
import {DataContext} from "../Context/DataProvider";
import { useContext } from 'react';

function NavBar () {

   const value = useContext (DataContext);
   const [menu, setMenu] = value.menu;
   const [carrito] =value.carrito;

   const toogleMenu = () => {
      setMenu (!menu)
   }

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
    <div onClick= {toogleMenu}>
     <CartWidget />
     <h2 className="item_total">{carrito.lenght}</h2>
    </div>   
   </div>
   );
   };
   export default NavBar;

