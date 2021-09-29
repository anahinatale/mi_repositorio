import React from "react";
import { Switch, Route } from "react-router-dom";
import { Formulario } from "./Contacto";
import { Inicio } from "./Inicio";
import { ProductosLista } from "./ItemListContainer";
import { Contacto } from "./Contacto";


export const Paginas = () => {
    return (
      <section>
          <Switch>
              <Route path="/" exact component ={Inicio} />
              <Route path="/productos" exact component ={ProductosLista} />
              <Route path="/contacto" exact component ={Contacto} />
          </Switch>
      </section>
    )
}