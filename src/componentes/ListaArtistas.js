import React from "react";

export default  class ListaArtistas extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                {this.props.map(artista)}
            </>
        )
    }

}