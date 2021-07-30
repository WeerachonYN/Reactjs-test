import React from 'react'
import Counter from '../Page/Home';
import Page404 from '../page404';
import Product from '../Page/Product';
import ViewDetail from '../Page/viewDetail';
import { Switch, Route,Redirect } from 'react-router-dom';
// import Todo from '../Page/Youtube';
import Cart from '../Page/Cart';
import Youtube from '../Page/Youtube';
import CategoryDetail from '../Page/CategoryDetail';
import Invoid from '../Page/Invoid';
import InvoidDetail from '../Page/InvoidDetail'
import { useSelector } from 'react-redux';
import Profile from '../Page/Profile';
import ScrollToTop from './ScrollTop'
export default function AuthUser() {
  const {token} = useSelector(state => state.auth)
    return (
      <ScrollToTop >
        <Switch>
      <Route path="/" exact><Counter /></Route>
      <Route path="/product/" exact><Product /></Route>
      <Route path="/product/:paramId/"><ViewDetail /></Route>
      <Route path="/About/"><Youtube /></Route>
      <Route path="/Cart/">{!token ?<Redirect to="/login/"/>:<Cart />}</Route>
      <Route path="/invoid/" exact>{!token ?<Redirect to="/login/"/>:<Invoid/>}</Route>
      <Route path="/invoid/:id/">{!token ?<Redirect to="/login/"/>:<InvoidDetail/>}</Route>
      <Route path="/Profile/">{!token?<Redirect to="/login/"/>:<Profile />}</Route>
      <Route path="/login/"><Redirect to="/"/></Route>
      <Route path='/category/:p_id/'><CategoryDetail/></Route>
      {/* <Route path="/youtube/"><Youtube /></Route> */}
    </Switch>
    </ScrollToTop>
    )
}
