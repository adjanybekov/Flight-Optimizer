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

    //   onMount=(res)=>{
    //     console.log(res);
    //     // this.setState({todos: res.data});
    //     this.props.onFormSubmit(res.data);
    //   }
    handleSubmit = () =>{
        this.props.onFormSubmit(this.state.destination, this.state.source);
        // this.setState({destination : this.state.destination.replace(/[ ,]+/g, ",")});
        // console.log(this.state.destination);
        // var url= "http://localhost:8000/api/flight/"+this.state.source+"/"+this.state.destination.replace(/[ ,]+/g, ",");//"http://localhost:8000/getFlight/"+this.state.source+"/"+this.state.destination;
        // axios.get(url)
        // .then(res=>this.onMount(res));

    }

    render() {
        return (
            <div style={this.getStyle()}>
                {/* <input className='btn btn-primary' value = {this.state.source} onChange={this.handleChangeSource}/> */}

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