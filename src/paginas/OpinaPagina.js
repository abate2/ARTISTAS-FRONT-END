import React from "react";

export default class Opina extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            mensaje: '',
        }

        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this);
    }

    submitted(event) {
        alert("Your feedback will be  take into account thank you " + this.state.nombre);
        event.preventDefault();
    }

    changed(event) {
        this.setState({
            nombre: event.target.value,  
        })
    }

    render() {
        return(
            <>
                <h2>Tu opinion es importante</h2>
                <form onSubmit={this.submitted}>
                    <div className="form-group my-2">
                        <label>Nombre</label>
                        <input type="text" className="form-control" onChange={this.changed}/>
                    </div>
                    <div className="form-group my-2">
                        <label>Dejanos aqui tu opinion</label>
                        <textarea className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary my-2">Enviar</button>
                </form>
            </>


        )
    }
}