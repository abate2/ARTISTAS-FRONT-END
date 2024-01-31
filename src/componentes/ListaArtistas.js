import React from "react";

import Artista from "./Artista";

export default  class ListaArtistas extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                {this.props.artistas.map((artista) => (
                    <Artista nombre={artista.nombre} img={artista.img} descripcion={artista.descripcion}/>
                ))}
            </>
        )
    }

}