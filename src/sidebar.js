import React from "react";

export default class Sidebar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="row">
                <div className="col-4">
                    <h2>{this.props.section}</h2>
                </div>
            </div>
        )
    }
}