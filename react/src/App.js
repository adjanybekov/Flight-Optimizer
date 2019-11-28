import React,{Component} from 'react';
import Flights from './components/Flights';
import MyForm from './components/MyForm';
import Loading from './components/Loading';
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
    if(destination.length===0 ||  source.length === 0){
      console.log("Please fill source and destination");
    }else{
      var url= "http://18.220.103.103:8000/api/flight/"+source+"/"+destination.replace(/[ ,]+/g, ",");//"http://localhost:8000/getFlight/"+this.state.source+"/"+this.state.destination;
      this.setState({loading:true,flights:[]},()=>{
        axios.get(url)
        .then(res=>{
          console.log(res.data);
          this.setState({flights :res.data, loading: false});
        });
      })        
    }        
  }
  getStyle(){
    return{      
      color: "black"       
    }    
  }

  render(){

    const result = (this.state.loading) ? (<Loading style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}} />):(<Flights flights={this.state.flights}/>);        
    
    return (
      <div className="App"   style={this.getStyle()}>  
      <MyForm  onFormSubmit={this.onFormSubmit}/>
        {result}
      </div>
    );
  }
}

export default App;