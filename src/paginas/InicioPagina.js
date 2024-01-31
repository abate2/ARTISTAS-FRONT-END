import React from "react";
import Artista from '../componentes/Artista.js'

export default class InicioPagina extends React.Component {

    render() {
        return(
            <>
                <h2>Inicio</h2>
                <p>Bienvenido a mi página de artistas favoritos :D de aquí almacenaré todos los artistas que mas me gustan para nunca olvidarlos</p>
                
                <Artista 
                nombre="The Who" 
                img="./images/theWho.png"
                descripcion="This is a pretty famous band that  mostly is recognized by its rock rhythms"/>
                
            </>
        )
    }
}