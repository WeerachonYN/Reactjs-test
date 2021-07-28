import React from 'react'
import Counter from '../testReact/counter';
import Page404 from '../page404';
import Product from '../testReact/Product';
import ViewDetail from '../testReact/viewDetail';
import { Switch, Route,Redirect } from 'react-router-dom';
import Todo from '../redux/Reducer/Todo';
import Cart from '../testReact/Cart';
import Login from '../testReact/Login';
import Youtube from '../testReact/Youtube';
import CategoryDetail from '../testReact/CategoryDetail';
// import Category from '../testReact/Category';
import Invoid from '../testReact/Invoid';
import InvoidDetail from '../testReact/InvoidDetail'
import { useSelector } from 'react-redux';
import Profile from '../testReact/Profile';
import ScrollToTop from './ScrollTop'
export default function AuthUser() {
  const {token} = useSelector(state => state.auth)
    return (
      <ScrollToTop >
        <Switch>
      <Route path="/" exact><Counter /></Route>
      <Route path="/product/" exact><Product /></Route>
      <Route path="/product/:paramId/"><ViewDetail /></Route>
      <Route path="/About/"><Todo /></Route>
      <Route path="/Cart/">{!token ?<Redirect to="/login/"/>:<Cart />}</Route>
      <Route path="/invoid/" exact>{!token ?<Redirect to="/login/"/>:<Invoid/>}</Route>
      <Route path="/invoid/:id/">{!token ?<Redirect to="/login/"/>:<InvoidDetail/>}</Route>
      <Route path="/Profile/">{!token?<Redirect to="/login/"/>:<Profile />}</Route>
     
      <Route path='/category/:p_id/'><CategoryDetail/></Route>
      <Route path="/youtube/"><Youtube /></Route>
    </Switch>
    </ScrollToTop>
    )
}
