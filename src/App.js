import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './counter';
import MapValue from './mapValue';
import Api_work2 from './api-workshop2';

const GetnickName = (props) =>  {
  return (
    <h1>Hi,{props.name}</h1>
  );
 }

// function GetnickName (props) {
//   return (
//     <h1>Hi,{props.name}</h1>
//   )
// }
const App =( ) => {
  // constructor(props){
  //   super(props)
  //   this.state
  // }
 
 const getHello = ()=>"Hello World"
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
        {/* <h1>{getHello()}</h1>
        <GetnickName name="Chon"/>
        <Counter />
        <MapValue /> */}
        <Api_work2 />
        {/* <CardExampleImageCard title="hello"/> */}
    
    </div>
  );
 }
// import React from 'react'


export default App;
