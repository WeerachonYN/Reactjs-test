
import './css/App.css';
import React from 'react';
import Counter from './testReact/counter';
// import MapValue from './mapValue';
import Page404 from './page404';
import Header from './component/Header';
import Api_work2 from './testReact/api-workshop2';
import Login from './testReact/login';
import ViewDetail from './testReact/viewDetail';
import {Switch, Route} from'react-router';

const App =( ) => {
  return (
    <div className="App">
     
        <Header />
        <Switch>
            <Route path="/" exact><Counter /></Route>
            <Route path="/api"><Api_work2 /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/ViewDetail/:paramId/"><ViewDetail /></Route>
            <Route path="*"><Page404 /></Route>
          
       </Switch>
 
    </div>
  );
 }



export default App;
