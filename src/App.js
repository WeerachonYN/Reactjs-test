
import './css/App.css';
import React from 'react';
import Header from './component/Header';
import MenuLoginLogout from './component/LoginLogout';
import { useSelector } from 'react-redux';
import UnAuthUser from './Route/UnAuthUser';
import AuthUser from './Route/AuthUser';

const App = () => {
  const { user } = useSelector(state => state.auth)
  return (
    <div className="App">

      <Header />
      <MenuLoginLogout />
      {!user? <UnAuthUser /> : <AuthUser />}
    </div>
  );
}



export default App;
