import "./ItemListContainer.css";
import "./ItemCount";

const ItemListContainer = (props) => {
    return (
      <div className="ItemListContainer">
        <h1>Bienvenida, mi nombre es {props.name}</h1>
      </div>
      );
    }
   
    export default ItemListContainer;
