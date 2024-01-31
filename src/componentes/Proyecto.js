import React from "react";
import './Proyecto.css'

export default class Proyecto extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row">
                <div className="col-12 d-flex align-items-center">
                    <img src={this.props.img} alt={this.props.description} className="project-image"/>
                    <div className="px-3">
                        <h2>{this.props.name}</h2>
                        <a href={this.props.linkTo} className="btn btn-danger mt-3 mb-3" target="_blank">Go to my github</a>
                    </div>
                </div>
            </div>
        )
    }    
}