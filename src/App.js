
import './css/App.css';
import React from 'react';
import Header from './component/Header';
import MenuLoginLogout from './component/LoginLogout';

import Footer from './component/Footer';
import Content from './testReact/Content';
const App = () => {
  
  return (
    <div className="App">
      <Header />
      <MenuLoginLogout />
      <Content />
      <Footer />
    </div>
  );
}



export default App;
