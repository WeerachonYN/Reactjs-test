import React, { useEffect } from 'react';

import { Menu, Segment, Input, List, Dropdown } from 'semantic-ui-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CATEGORY_IN_REQ, FETCH_CATEGORY_REQ, SEARCH_WORD_REQ } from '../redux/Reducer/action.type';
import axios from 'axios';
export default function Header() {
  // const { dataAll } = useSelector(state => state.category)
  const { search } = useSelector(state => state.product)
  const dispatch = useDispatch();
  const [state, setState] = useState('');
  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('/category/');
      setData(response.data)
      // console.log('CATEGORY',response.data);
      dispatch({ type: FETCH_CATEGORY_REQ, payload: response.data.data.results })
    } catch (error) {
      console.log('ERROR Category ALL', error.response.data);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    // console.log('Search:',e.target.value);
    return dispatch({ type: SEARCH_WORD_REQ, search: e.target.value })
  }
  const handleFilter = (id) => {
    // console.log('ID',id);
    return dispatch({ type: CATEGORY_IN_REQ, category_in: id });
  }
  const handle = () => {
    setState('Product')
    return dispatch({ type: CATEGORY_IN_REQ, category_in: [] })
  }
  return (
    <Segment inverted>
      <Menu inverted pointing secondary >
        <Menu.Item
          name='Home'
          active={state === 'Home'}
          as={Link} to={"/"}
          onClick={() => setState('Home')}
        />
        <Menu.Item
          name='Product'
          active={state === 'Product'}
          as={Link} to={"/product/"}
          onClick={() => handle()}
        />
        <Menu.Item
          name='Todo'
          active={state === 'Todo'}
          as={Link} to={"/Todo/"}
          onClick={() => setState('Todo')}
        />
        <Dropdown name='Categories' text='Categories' pointing className='link item' active={state === 'Categories'} onClick={() => setState('Categories')}>
          <Dropdown.Menu>
            <Dropdown.Header>ประเภทอาหาร</Dropdown.Header>
            {data.data?.results.map(item =>
              <Dropdown.Item key={item.id} onClick={() => handleFilter(item.id)} >
                {item.name}
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          name='Youtube'
          active={state === 'Youtube'}
          as={Link} to={"/Youtube/"}
          onClick={() => setState('Youtube')}
        />


        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' value={search} placeholder='Search...' onChange={(e) => handleSearch(e)} />
          </Menu.Item>

        </Menu.Menu>
      </Menu>
    </Segment>

  )

}
