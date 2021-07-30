import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DimmerLoader from '../component/Dimmer';
import { CATEGORY_IN_REQ, PAGE_PRODUCT_REQ } from '../redux/Reducer/action.type';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { SORT_WORD_REQ } from '../redux/Reducer/action.type';
export default function MenuSidebar() {
  const {search} = useSelector(state => state.auth)
  const [state, setState] = useState('');
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory();
  const handleFilter = (_id,name) => {
    setState(name)
    dispatch({ type: CATEGORY_IN_REQ, category_in: _id });
    dispatch({type:SORT_WORD_REQ,sort:null})
    dispatch({type:PAGE_PRODUCT_REQ,page:1})
    if(search){
      return history.push(`/product/?search=${search}&category_in=${_id}`)
    }else{
      return history.push(`/product/?category_in=${_id}`)
    }
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
