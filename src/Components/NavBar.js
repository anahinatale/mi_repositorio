import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar () {
   return (
   <div className="NavBar">
      <h1>Gea</h1>
      <a href="#section">Inicio</a>
      <a href="#section">Quienes somos</a>
      <a href="#section">Contacto</a>
      <CartWidget />
   </div>
   );
   };
   export default NavBar;

