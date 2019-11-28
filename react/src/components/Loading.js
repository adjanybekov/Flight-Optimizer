import React, { Component } from 'react';
import loading from "./loading2.gif"

class Loading extends Component {

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
            return ( 
                           
                <img   style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }} src={loading} alt="loading..."/>
            );                
    }
}

export default Loading
