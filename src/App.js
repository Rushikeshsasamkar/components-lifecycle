import React from 'react';
import './App.css';
import  ComponentA  from './ComponentA';
import TimerOne from './Timer/TimerOne';

class App extends React.Component {
  render(){
  return (
    <div className="App">
        
        {/* <ComponentA/> */}
        <TimerOne/>
    </div>
  );
}
}

export default App;
