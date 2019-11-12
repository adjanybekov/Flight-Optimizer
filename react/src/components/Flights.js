import React,{Component} from 'react';
import Flight from './Flight';

class Flights extends Component{



  render(){        
    if(this.props.flights.length>0){
      return  this.props.flights.map((flight)=>(<Flight flight={flight}/>));          
    }else{
      return <Flight flight = "Why not to choose another direction?!"/>
    }
    
  }
}

export default Flights;