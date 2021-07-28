import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DimmerLoader from '../component/Dimmer';
import { CATEGORY_IN_REQ } from '../redux/Reducer/action.type';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SORT_WORD_REQ } from '../redux/Reducer/action.type';
export default function MenuSidebar() {
  const [state, setState] = useState('');
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory();
  const handleFilter = (_id,name) => {
    // console.log('ID',id);
    setState(name)
    dispatch({ type: CATEGORY_IN_REQ, category_in: _id });
    dispatch({type:SORT_WORD_REQ,sort:null})
    return history.push(`/product/?category_in=${_id}`)
  }
  const fetchData = async () => {
    const post = await axios.get("/category/");
    setData(post.data)

  }
  useEffect(() => {
    fetchData()

  }, [])
  if (!data) {
    return <DimmerLoader />;
  }
  
  return (
    <Menu pointing secondary vertical>
      {data.data.results.map(item => <Menu.Item key={item.id}
        name={item.name}
        active={state === item.name}
        onClick={()=>handleFilter(item.id,item.name)}
      />)}

    </Menu>
  )
}
