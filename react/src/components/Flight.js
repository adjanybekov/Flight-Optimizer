import React, { Component } from 'react';


class Flight extends Component {

    getStyle = ()=>{
        return{
            textDecoration:'none',
            background:"#6ba8a9",
            padding:'10px',
            borderColor: "black",
            borderStyle: "solid",
            // width: "18rem"
        }
    }

    render() {      
        if(Array.isArray(this.props.flight)){
            return (            
                <div class="card" style={this.getStyle()}>                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{this.props.flight[0]} </li>
                        <li class="list-group-item">{this.props.flight[1]}</li>
                        <li class="list-group-item">{this.props.flight[2]}</li>
                    </ul>            
                </div>
            );

        }else{
            return (
                <div class="card" style={this.getStyle()}>                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Why not to choose new direction ? </li>
                    </ul>            
                </div>
            );
        }
        
    }
}

export default Flight
