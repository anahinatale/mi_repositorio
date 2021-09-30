import * as React from 'react';

export function ItemCount ({stock, initial}){
    const [contador, setContador] = React.useState(initial = 1, stock = 6);
    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }
    return (
        <div>
            <button className="boton1" onClick={sumar}> + </button>
            <span>{contador}</span>
            <button className="boton1" onClick={restar}> - </button>
        </div>
    )
}


