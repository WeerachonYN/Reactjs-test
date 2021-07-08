import axios from 'axios';
import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter:0,
            user:[]
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
    componentDidMount(){
     
            axios.get('/users/').then(
               
                res => {
              
                    this.setState({
                        user:res.data.results
                    
                    });
                 }
                
            ).catch(error => {
                console.log(error);
            })
            
    }
    
    render(){
      
        if(this.state.user){
            return <h2>Hi, {this.state.user.map(item =>(
                <p key={item.id}>{item.first_name}</p>
            ))}</h2>
        }
        return (
            <Grid.Column width={16}>
            <Segment>
            <h1>Home Page</h1>
                <p>{this.state.counter}</p>
                <button onClick={this.onIncrement} type = "button"> + </button>
            </Segment>
            </Grid.Column>
        );
    }
}
