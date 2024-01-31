import React from "react";
import './Artista.css';

export default class Artista extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            escondido: false
        }

        this.toggleEsconder = this.toggleEsconder.bind(this);
    }

    toggleEsconder() {
        this.setState(prevState => ({
            escondido: !prevState.escondido
        }))
    }

    render(){
        return(
            <div className={"row my-4 " + (this.state.escondido ? 'd-none' : '')}>
                <div className="col-12 d-flex align-items-center">
                    <img src={this.props.img} alt={this.props.nombre} className="band-thumb"/>
                    <div className="px-3">
                        <h2>{this.props.nombre} </h2>
                        <p>{this.props.descripcion} </p>
                        <button className="btn btn-danger" onClick={this.toggleEsconder}>esconder</button>
                    </div>
                </div>
            </div>
        )
    }
}