import React from "react";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontGrow : true
        }
        this.toggleFontB = this.toggleFontB.bind(this);
        this.toggleFontA = this.toggleFontA.bind(this);
    }

    toggleFontB() {
        this.setState(prevState =>({
            fontGrow : !prevState.fontGrow
        }))
    }

    toggleFontA() {
        this.setState(prevState =>({
            fontGrow : true
        }))
    }

    render() {
        return(
            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-center bg-primary ">
                    <p onMouseEnter={this.toggleFontB} onMouseLeave={this.toggleFontA} className={"mx-auto " + (this.state.fontGrow ? 'fs-6' : 'fs-5')}><b>Contact: {this.props.contact}</b></p>
                    <p onMouseEnter={this.toggleFontB} onMouseLeave={this.toggleFontA} className={"mx-auto " + (this.state.fontGrow ? 'fs-6' : 'fs-5')}><b>Phone number: {this.props.phone}</b></p>
                    <p onMouseEnter={this.toggleFontB} onMouseLeave={this.toggleFontA} className={"mx-auto " + (this.state.fontGrow ? 'fs-6' : 'fs-5')}><b>Email: {this.props.email}</b></p>
                    <p onMouseEnter={this.toggleFontB} onMouseLeave={this.toggleFontA} className={"mx-auto " + (this.state.fontGrow ? 'fs-6' : 'fs-5')}><b>City: {this.props.city}</b></p>
                    <p onMouseEnter={this.toggleFontB} onMouseLeave={this.toggleFontA} className={"mx-auto " + (this.state.fontGrow ? 'fs-6' : 'fs-5')}><b>{this.props.year}</b></p>
                </div>
            </div>
        )
    }
}