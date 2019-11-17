import React, { Component } from 'react'

// import axios from 'axios';

export class MyForm extends Component {
    state={
        source:"",
        destination:""
    }

    getStyle = ()=>{
        return{
            textDecoration:'none',
            background:"green",
            padding:'10px'
        }
    }

    handleChangeSource = event =>{
        this.setState({source : event.target.value});
        // console.log(event.target.value);
    }

    handleChangeDestination = event =>{
        this.setState({destination : event.target.value});
        // console.log(event.target.value);
    }

    handleSubmit = () =>{
        
        this.props.onFormSubmit(this.state.destination, this.state.source);    
    }

    render() {
        return (
            <div style={this.getStyle()}>                
                <div className='row'>
                    
                        <div className="input-group mb-3 col-md-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Source</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Please type in source" aria-label="Username" aria-describedby="basic-addon1" value = {this.state.source} onChange={this.handleChangeSource}/>
                        </div>
                        <div className="input-group mb-3 col-md-6">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Destinations</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Please separate destinations with comma(,) " aria-label="Username" aria-describedby="basic-addon1" value = {this.state.destination} onChange={this.handleChangeDestination}/>
                        </div>
                        <div className="col-md-2">
                            <button className='btn btn-primary' onClick={this.handleSubmit}>Search flight</button>
                        </div>
                        
                    </div>                                
            </div>
        )
    }
}

export default MyForm