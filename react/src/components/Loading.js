import React, { Component } from 'react';
import loading from "./loading2.gif"
import { directive } from '@babel/types';

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
                   <div className="text-center">    
                    <img  src={loading} alt="loading..."/>
                  </div>
            );                
    }
}

export default Loading
