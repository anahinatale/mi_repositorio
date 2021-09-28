import IMG from "../imagenes/performance.jpg";


export const ProductosLista = () => {
    return (
    <>
    <div className="ItemList">
        <h1 className="title">PRODUCTOS</h1>
          <div className="productos">
            <div className="producto">
              <div className="producto_img">
                <img src={IMG} width="250"></img>
              </div>
            <div className="producto_footer">
                <h1>Título</h1>
                <p>Categoria</p>
                <p className="price">$390</p>
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
            <div className="producto">
              <div className="producto_img">
                <img src={IMG} width="250"></img>
              </div>
            <div className="producto_footer">
                <h1>Título</h1>
                <p>Categoria</p>
                <p className="price">$390</p>
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
            <div className="producto">
              <div className="producto_img">
                <img src={IMG} width="250"></img>
              </div>
            <div className="producto_footer">
                <h1>Título</h1>
                <p>Categoria</p>
                <p className="price">$390</p>
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
          </div>
    </div>
    </>
    )
}