import axios from 'axios';
import React from 'react'

import '../css/api-workshop2.css'
import CardProduct from '../component/Card';
class Api_work2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products:[],
            is_true:true
        }

    }
        
    
  
    componentDidMount(){
        axios.get("http://127.0.0.1:8000/product/").then(response => {
            const products = response.data.data.results;
            this.setState({products})
       
        }).catch((e)=>{
            this.setState(
                state => ({
                    is_true:state.false
                })
            );
                
            console.log(e);
            // alert(e.message)
             
        })

    }
    
    render (){
    return (
            // {this.state.products.map(item =>
            // <div role="listitem" class="item" key={item.id}>{item.name}</div>
            // )}
<div className="grid">
   
    {this.state.products.map(item =>
    
        <CardProduct
        key={item.id}
        title={item.name}
        image={item.image.medium_square_crop}
        detail={item.detail}
        />
        )}
      
        </div> 

    );
}

}
export default Api_work2;