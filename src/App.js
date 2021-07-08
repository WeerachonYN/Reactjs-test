
import './css/App.css';
import React from 'react';
import Counter from './testReact/counter';
// import MapValue from './mapValue';
import Page404 from './page404';
import Header from './component/Header';
import Api_work2 from './testReact/api-workshop2';
import Register from './testReact/Register';
import ViewDetail from './testReact/viewDetail';
import {Switch, Route, Router} from'react-router-dom';
import Todo from './Reducer/Todo';

const App =( ) => {
  return (
    <div className="App">
     
        <Header />
        
           <Switch>
            <Route path="/" exact><Counter /></Route>
            <Route path="/Product/"><Api_work2 /></Route>
            <Route path="/Register/"><Register /></Route>
            <Route path="/ViewDetail/:paramId/"><ViewDetail /></Route>
            <Route path="/Todo/"><Todo/></Route>
            <Route path="*"><Page404 /></Route>
        </Switch>
  
    </div>
  );
 }



export default App;
