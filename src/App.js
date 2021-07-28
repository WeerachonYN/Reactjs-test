
import './css/App.css';
import React,{useEffect} from 'react';
import Headers from './component/Header';
import MenuLoginLogout from './component/LoginLogout';
import Footer from './component/Footer';
import Content from './testReact/Content';
import { useSelector,useDispatch } from 'react-redux';
import { SET_AUTH } from './redux/Reducer/action.type';
import axios from 'axios';
const App = () => {
  const { time, token } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const fetchRefetch = async () => {
    try {
      let fd = new FormData()
      fd.append('refresh',token.refresh)
     
      const responses = await axios.post('/token/refresh/',fd)
      const response = responses.data
      dispatch({type:SET_AUTH,payload:response})
      console.log('refetch', response);
    } catch (error) {
      console.log(error);
    }
  }
  let current
  useEffect(() => {
    if (time<=Date.now()/1000) {
      fetchRefetch()
    }
  }, [Date.now()/1000])
  return (
    <div className="App">
      <MenuLoginLogout />
      <Headers />

      <Content />
      <Footer />
    </div>
  );
}



export default App;
