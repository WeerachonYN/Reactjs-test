import React, { useEffect } from 'react';

import { Menu, Segment, Input, Image, Popup, List, Divider, Header, Placeholder, Dropdown, Icon } from 'semantic-ui-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CATEGORY_IN_REQ, FETCH_CATEGORY_REQ, SORT_WORD_REQ } from '../redux/Reducer/action.type';
import axios from 'axios';
import '../css/headers.css'
// import '../css/Dropdown.css'
export default function Headers() {
  const history = useHistory()
  const { user } = useSelector(state => state.auth)
  const { search } = useSelector(state => state.product)
  const dispatch = useDispatch();
  const [state, setState] = useState('');
  const [data, setData] = useState('');
  const host = process.env.REACT_APP_API_HOST;
  const square = { width: 175, height: 175 }
  const fetchData = async () => {
    try {
      const response = await axios.get('/category/');
      setData(response.data)
      dispatch({ type: FETCH_CATEGORY_REQ, payload: response.data.data.results })
    } catch (error) {
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  const handleFilter = (id) => {
    // console.log('ID',id);
    setState('Dropdown')
    dispatch({ type: CATEGORY_IN_REQ, category_in: id });
    dispatch({type:SORT_WORD_REQ,sort:null})
    return history.push(`/product/?category_in=${id}`)
  }
  const handle = () => {
    setState('Product')
    return dispatch({ type: CATEGORY_IN_REQ, category_in: [] })
  }
  console.log(user);

  return (
    <div className="warper-head">
      <div className="header-box">

        <Segment inverted >
          <Menu inverted pointing secondary  >

            {/* <Menu.Item
  name='Home'
  active={state === 'Home'}
  as={Link} to={"/"}
  onClick={() => setState('Home')}
/> */}
            <Dropdown
              name='Categories'
              text='Categories'
              pointing
              className='link item'
              active={state === 'Categories'}
              onClick={() => setState('Categories')}>
              <Dropdown.Menu  active={state === 'Dropdown'}  >
                <Dropdown.Header>ประเภทสินค้า</Dropdown.Header>
                {data.data?.results.map(item =>
                  <Dropdown.Item key={item.id} onClick={() => handleFilter(item.id)} >
                    {item.name}
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item
              name='Product'
              active={state === 'Product'}
              as={Link} to={"/product/"}
              onClick={() => handle()}
            />
            <Menu.Item
              name='About'
              active={state === 'About'}
              as={Link} to={"/About/"}
              onClick={() => setState('About')}
            />

            {/* <Menu.Item
              name='Youtube'
              active={state === 'Youtube'}
              as={Link} to={"/Youtube/"}
              onClick={() => setState('Youtube')}
            /> */}


            <Menu.Menu position='right'>
              <Menu.Item>
                {/* right */}
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>


      </div>
    </div>
  )

}
