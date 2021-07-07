import React from 'react'

export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter:0
        }
        // #bind 
        // this.onIncrement = this.onIncrement.bind(this)
        
    }
    
    // arrow fucn
    onIncrement =()=> {
        this.setState (
            state => ({
                counter:state.counter + 1
            })
        );
    }
    
    render(){
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.onIncrement} type = "button"> + </button>
            </div>
        );
    }
}
