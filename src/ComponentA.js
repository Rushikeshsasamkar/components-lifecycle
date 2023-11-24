import React from "react";
import ComponentB from "./ComponentB";
export default class ComponentA extends React.Component{

    constructor(){
        super();
        this.state={
            name:"Component A",
            data:[]
        }
        console.log("Component A Constructor");
    }
    static getDerivedStateFromProps(){
        console.log("Component A getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("Component A componentDidMount");
        
       fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({data}))
    
    }

    render(){
        console.log(this.state.data);
        return(<>
          <h1>{this.state.name}</h1>
            <ul>
                {this.state.data.map((d,index)=>{
                    return <li key={index}>{d.username}</li>
                })}
            </ul>
            </>
        
        )
    }
}