import  React, { createContext, useEffect, useState } from "react";
import data from './Data';

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [productos, setProductos] = useState ([]);
    
    useEffect (()=> {
      const producto = data.items
      if (producto){
          setProductos(producto)

      } else{
          setProductos([])
      }


      setProductos(producto)
    },[])
    const value = {
        productos : [productos]
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