import React from "react";
import ListaArtistas from "../componentes/ListaArtistas";

export default class ArtistasPagina extends React.Component {

    artistas = [
        {
            nombre: 'The Who',
            img: '/images/theWho.png'
        },
        {
            nombre: 'Dire Straits',
            img: '/images/theWho.png'
        },
        {
            nombre: 'The Clash',
            img: '/images/theWho.png'
        }
    ]

    render() {
        return(
            <>
                <h2 className="mt-5">Artista</h2>
                <ListaArtistas artistas={this.artistas} />
            </>
        )
    }
}