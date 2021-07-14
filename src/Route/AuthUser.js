import React from 'react'
import Counter from '../testReact/counter';
import Page404 from '../page404';
import Api_work2 from '../testReact/api-workshop2';
import ViewDetail from '../testReact/viewDetail';
import { Switch, Route } from 'react-router-dom';
import Todo from '../Reducer/Todo';
import Cart from '../testReact/Cart';
import Youtube from '../testReact/Youtube';
export default function AuthUser() {
    return (
        <Switch>
      <Route path="/" exact><Counter /></Route>
      <Route path="/product/" exact><Api_work2 /></Route>
      <Route path="/product/:paramId/"><ViewDetail /></Route>
      <Route path="/Todo/"><Todo /></Route>
      <Route path="/Cart/"><Cart /></Route>
      <Route path="/youtube/"><Youtube /></Route>
      <Route path="*"><Page404 /></Route>
    </Switch>
    )
}
