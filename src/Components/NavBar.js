import CartWidget from './CartWidget';
import './NavBar.css';
import Logo from './imagenes/logo.png';

function NavBar () {
   return (
   <div className="NavBar">
      <a href="">
         <div>
           <img src={Logo} alt="" width="125" className="logo"></img>  
         </div>
      </a>
      <a href="#section">Inicio</a>
      <a href="#section">Quienes somos</a>
      <a href="#section">Contacto</a>
    <div>
     <CartWidget />
     <span className="item_total">0</span>
    </div>   
   </div>
   );
   };
   export default NavBar;

