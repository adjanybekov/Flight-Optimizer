import React,{Component} from 'react';
import Flights from './components/Flights';
import MyForm from './components/MyForm';
import axios from "axios";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      flights:[        
      ],
      loading: false
    };
  }


  

  onFormSubmit = (destination, source)=>{
    var url= "http://localhost:8000/api/flight/"+source+"/"+destination.replace(/[ ,]+/g, ",");//"http://localhost:8000/getFlight/"+this.state.source+"/"+this.state.destination;
    this.setState({loading:true,flights:[]},()=>{
      axios.get(url)
      .then(res=>{
        console.log(res.data);
        this.setState({flights :res.data, loading: false});
      });
    })        
    // this.flights=[];
  }
  getStyle(){
    return{      
      color: "red",        
    }    
  }

  render(){
    const result = (this.state.loading) ? (<p>loading...</p>):(<Flights flights={this.state.flights}/>);
    console.log(this.state.loading);
    
    return (
      <div className="App" style={this.getStyle()}>
        {/* <Inputs/> */}
      <MyForm onFormSubmit={this.onFormSubmit}/>
        {result}
      </div>
    );
  }
}

export default App;