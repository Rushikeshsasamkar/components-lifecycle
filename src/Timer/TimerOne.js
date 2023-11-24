import React from "react";

export default class TimerOne extends React.Component{

    constructor(){
        super();
        this.state={
            time:0
        }
        this.timer=null;
        console.log("TimeOne Constructor");
    }

    static getDerivedStateFromProps(){
        console.log("TimerOne getDerivedFromProps");

    }
    shouldComponentUpdate(){
        return true;
    }

    // handlIncrease =()=>{
    //     this.setState((prevState)=>{
    //         return {count:prevState.count+1}
    //     })
    // }

    render(){
        return(<>
            {/* console.log("TimerOne Render"); */}
            <h1>Time spent</h1>
            {new Date(this.state.time*1000).toISOString().slice(11,19)}

            </>
        )
    }

    componentDidMount(){
        console.log("TimerOne componentDidMount");


        this.timer=setInterval(()=>{
            this.setState((prevState)=>({time:prevState.time+0.5}))
        },1000);
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState){

        console.log("TimerOne getSnapShotBeforeUpdate");
        return null;

    }

    componentDidUpdate(){
        console.log("TimerOne componetDidUpdate")
    }

}