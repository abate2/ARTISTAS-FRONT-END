import React from "react";

export default class ContactoPagina extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            mensaje: ''
        }

        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this)
    }

    submitted(event) {
        alert("Se envio el formulario de " + this.state.nombre);
        event.preventDefault();{/*this to prevent that the formulary send information to the url cause it don't have an address defined for that reason we need to stop its default behavior*/}
    }

    changed(event) {
        this.setState({
            nombre: event.target.value,  
        })
    }

    render() {
        return(
            <>
                <h2>Contacto</h2>
                <form onSubmit={this.submitted}>
                    <div className="form-group my-2">
                        <label>Nombre</label>
                        <input type="text" className="form-control" onChange={this.changed}/>
                    </div>
                    <div className="form-group my-2">
                        <label>Mensaje</label>
                        <textarea className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary my-2">Enviar</button>
                </form>
            </>
        )
    }
}

/*event.target.value is used to capture the info from an input*/
