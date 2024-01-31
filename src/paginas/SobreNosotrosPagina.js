import React from "react";
import Proyecto from "../componentes/ListaProyectos";

export default class SobreNosotros extends React.Component {

    proyectos = [
        {
            name:'Snake game',
            img: '/images/snake_game2.png',
            linkTo: 'https://github.com/abate2/SNAKE-GAME',
            description:"snake game image"
        },
        {
            name:'Ping pong',
            img: '/images/ping_pong1.png',
            linkTo: 'https://github.com/abate2/PING_PONG',
            description:"Ping pong image"
        },
        {
            name:'Dashboard',
            img: '/images/dark_mode.png',
            linkTo: 'https://github.com/abate2/DASHBOARD-ECOMERCE',
            description:"Dashboard image"
        }
    ]

    render() {
        return(
            <>
                <h3 className="mt-3">Abate</h3>
                <p>This is a project focus in practice react in order to create web apps more easily</p>
                <Proyecto proyectos={this.proyectos}/>
            </>
        )
    }
}