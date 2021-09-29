import React, {Fragment, useState} from 'react';

export const Contacto = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        mensaje:'',

    })

    const handleInputChange = (event) => {

        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

    return (
        <Fragment>
            <div className="formulario">
            <h1 className="titulo_form">Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Mensaje" className="form-control_mensaje" onChange={handleInputChange} name="mensaje"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            </div>
        </Fragment>
    );
}
 