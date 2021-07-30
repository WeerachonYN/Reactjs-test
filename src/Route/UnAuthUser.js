import React from 'react'
import Counter from '../Page/Home';
import Login from '../Page/Login';
import Page404 from '../page404';
import Product from '../Page/Product';
import Register from '../Page/Register';
import ViewDetail from '../Page/viewDetail';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Todo from '../Page/Todo';
import Category from '../Page/CategoryDetail';
import Youtube from '../Page/Youtube';
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
        <Route path="/About/"><Youtube /></Route>
        <Route path="/login/">{token ?<Redirect to="/"/>:<Login />}</Route>
        {/* <Route path="/youtube/"><Youtube /></Route> */}
        <Route path='/category/:p_id/'><Category/></Route>
        <Route path="*"><Page404 /></Route>
      </Switch>
      </ScrollToTop>
    )
}
