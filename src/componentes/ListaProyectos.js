import React from "react";

import Proyecto from "./Proyecto.js";

export default class ListaProyectos extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <>
                {this.props.proyectos.map((proyecto) => (
                    <Proyecto name={proyecto.name} img={proyecto.img} linkTo={proyecto.linkTo} description={proyecto.description}/>
                ))}
            </>
        )
    }
}