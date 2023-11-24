import React from 'react';
import './App.css';
import  ComponentA  from './ComponentA';

class App extends React.Component {
  render(){
  return (
    <div className="App">
        App
        <ComponentA/>
    </div>
  );
}
}

export default App;
