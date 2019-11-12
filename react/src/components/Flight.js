import React, { Component } from 'react';


class Flight extends Component {

    getStyle = ()=>{
        return{
            textDecoration:'none',
            background:"yellow",
            padding:'10px',
            borderColor: "black",
            borderStyle: "solid"
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                {this.props.flight}     {'  '}                
            </div>
        );
    }
}

export default Flight
