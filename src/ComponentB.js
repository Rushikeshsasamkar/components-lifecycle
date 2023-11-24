import React from "react";

export default class ComponentB extends React.Component{

    constructor(){
        super();
        this.state={
            name:"Component B"
        }
        console.log("Component B Constructor");
    }
    static getDerivedStateFromProps(){
        console.log("Component B getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("Component B componentDidMount");
    }

    render(){
        console.log("Componet B render");
        return(
          <h1>{this.state.name}</h1>
        )
    }
}