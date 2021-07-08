import axios from 'axios';
import React from 'react'

import '../css/api-workshop2.css'
import CardProduct from '../component/Card';
class Api_work2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products:[]

        }

    }
        
    
  
    componentDidMount(){
        axios.get("/product/").then(response => {
            const products = response.data.data.results;
            this.setState({products})
       
        }).catch((e)=>{
          
            console.log(e.message);
            // alert(e.message)
             
        })

    }
    
    render (){

    return (
        <div className="container">
                  <h1>Product All</h1>
    <div className="grid">
    {/* <Grid columns={5} divided>
    <Grid.Row> */}
    {this.state.products.map(item =>
        <CardProduct key={item.id}
        // isloading={item}
        id={item.id}
        title={item.name}
        image={item.image.medium_square_crop}
        detail={item.detail}
        />
        )}
          {/* </Grid.Row>
            </Grid> */}
        </div> 

        </div>

    );
}

}
export default Api_work2;