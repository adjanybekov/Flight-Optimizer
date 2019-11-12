import React,{Component} from 'react';
import Flights from './components/Flights';
import MyForm from './components/MyForm';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      flights:[        
      ]
    };
    this.onFormSubmit = this.onFormSubmit.bind();
  }


  

  onFormSubmit = (data)=>{
    console.log(data);    
    this.setState({flights :data});
    this.flights=[];
  }
  getStyle(){
    return{      
      color: "red",        
    }    
  }
  
  render(){
    return (
      <div className="App" style={this.getStyle()}>
        {/* <Inputs/> */}
      <MyForm onFormSubmit={this.onFormSubmit}/>
       <Flights flights={this.state.flights}/> 
      </div>
    );
  }
}

export default App;