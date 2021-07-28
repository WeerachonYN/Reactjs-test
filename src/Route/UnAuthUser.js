import React from 'react'
import Counter from '../testReact/counter';
import Login from '../testReact/Login';
import Page404 from '../page404';
import Product from '../testReact/Product';
import Register from '../testReact/Register';
import ViewDetail from '../testReact/viewDetail';
import { Switch, Route, Redirect } from 'react-router-dom';
import Todo from '../redux/Reducer/Todo';
import Category from '../testReact/CategoryDetail';
import Youtube from '../testReact/Youtube';
import { useSelector } from 'react-redux';
import ScrollToTop from './ScrollTop'
export default function UnAuthUser() {
  const {token} = useSelector(state => state.auth)
    return (
      <ScrollToTop>
        <Switch>
        <Route path="/" exact><Counter /></Route>
        <Route path="/product/" exact><Product /></Route>
        <Route path="/Register/"><Register /></Route>
        <Route path="/product/:paramId/"><ViewDetail /></Route>
        <Route path="/About/"><Todo /></Route>
        <Route path="/login/">{token ?<Redirect to="/"/>:<Login />}</Route>
        <Route path="/youtube/"><Youtube /></Route>
        <Route path='/category/:p_id/'><Category/></Route>
        <Route path="*"><Page404 /></Route>
      </Switch>
      </ScrollToTop>
    )
}
