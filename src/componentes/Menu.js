import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {

    render() {
        return(
            <div className="row bg-light fixed-top px-4 py-2 d-block">
                <div className="col-12 d-flex align-items-center">
                    <h1 > Artio </h1>
                    <Link to="/" className="mx-3"> Inicio </Link>
                    <Link to="/artistas" className="mx-3"> Artistas </Link>
                    <Link to="/contacto" className="mx-3"> Contacto </Link>
                    <Link to="/SobreNosotros" className="mx-3"> Sobre nosotros </Link>
                    <Link to="/opina" className="mx-3">Opina</Link>
                </div>
            </div>
        )
    }
}