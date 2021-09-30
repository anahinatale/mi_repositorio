import  React, { createContext, useEffect, useState } from "react";
import data from './Data';

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [productos, setProductos] = useState ([]);
    const [menu, setMenu] = useState (false);
    const [carrito, setCarrito] = useState ([]);
    
    useEffect (()=> {
      const producto = data.items
      if (producto){
          setProductos(producto)

      } else{
          setProductos([])
      }


      setProductos(producto)
    },[])

    const addCarrito = (id) => {
        const check = carrito.every (item =>{
            return item.id !== id;
        })
        if (check){
            const data = productos.filter (producto => {
                return producto.id === id
            })
            setCarrito([...carrito, ...data])
        }else{
            alert("El producto ya se encuentra en el carrito")
        }
    }

    useEffect(()=> {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito')
        )
        if (dataCarrito){
            setCarrito(dataCarrito)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    },[carrito])

    const value = {
        productos : [productos],
        menu : [menu, setMenu],
        addCarrito: addCarrito,
        carrito : [carrito, setCarrito]
    }

    const fetchProducts = async () => {
        const result = await getProducts ();
        setProductos (result);
        fetchProducts ();
      };

      const getProducts = function (){
        return new Promise(function(resolver){
            setTimeout(function(){
                resolver(data);
            },2000);
          });
    };

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )

}