import React from 'react';
import './App.css';
import  ComponentA  from './ComponentA';
import TimerOne from './Timer/TimerOne';

class App extends React.Component {

  constructor(){

    super();
    this.state={
      timerOn:false
    }

  }

  handleTimerOn=()=>{
    this.setState((prevState)=>({timerOn:!prevState.timerOn}))
    
  }
  render(){
  return (
    <div className="App">
        <TimerOne timerOn={this.state.timerOn}/>
        <button onClick={this.handleTimerOn}>
          {this.state.timerOn?"Stop":"Start"}
        </button>

    </div>
  );
}
}

export default App;
