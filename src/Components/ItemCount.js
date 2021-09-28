import * as React from 'react';

export function ItemCount ({stock, initial, onAdd}){
    const [contador, setContador] = React.useState(1);
    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }
    return (
        <div>
            <span>{contador}</span>
            <button onClick={sumar}> + </button>
            <button onClick={restar}> - </button>
        </div>
    )
}


