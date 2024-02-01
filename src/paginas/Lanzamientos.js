import React from "react";

export default class LanzamientosPagina extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lanzamientos: []
        }

    }

            
    componentDidMount() {
        fetch(" https://musicbrainz.org/ws/2/release?artist=9fdaa16b-a6c4-4831-b87c-bc9ca8ce7eaa&fmt=json")
        .then( res => res.json())
        .then((result) => {
            console.log(result)
            this.setState({
                lanzamientos : result.releases
            });
        })
    }

    render() {
        return(
            <>
                {this.state.lanzamientos.map((lanzamiento) => (
                    <p>{lanzamiento.title} {lanzamiento.date}</p>
                ))}
            </>
        )
    }
}

/*fetch(" https://musicbrainz.org/ws/2/release?artist-9fdaa16b-a6c4-4831-b87c-bc9ca8ce7eaa&fmt-json") ------->with fetch we make  a get petition.In an api like musicbrainz we need to build the url based in which data we want to get.That is how can work in different json data , every API has its own documentation that we allow us to get the right url for the information that we are looking for */
/*.then( res => res.json()) is used to transform what we received from the API in a javascript object also can be expressed like this  .then(response => response.json())*/
/*.then((result) => { that  we  can see  in the line 16 the result parameter in the second .then block refers to the parsed JSON content obtained from the response. This is where you can work with the actual data received from the server after it has been successfully parsed from JSON format to a JavaScript object. The result variable inside that block holds the data you fetched from the server.*/
/* res or response or result  can be changed according to the programmer's preferences.*/