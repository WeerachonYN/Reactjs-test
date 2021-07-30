import React, { useEffect } from 'react'
import { Button, Menu, MenuMenu, Input, Icon, Header, Statistic, Popup, Label, Dropdown, Image } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import ButtonAnimated from './Button'
import { Link, Redirect } from 'react-router-dom'
import { useState } from 'react'
import Sort from './Sort'
import { useDispatch } from 'react-redux'
import { CATEGORY_IN_REQ, GET_INVOID_REQ, PAGE_PRODUCT_REQ, SEARCH_WORD_REQ, SORT_WORD_REQ } from '../redux/Reducer/action.type'

import '../css/headers.css'
import '../css/Dropdown.css'
const MenuLoginLogout = () => {
  const { token, user } = useSelector((state) => state.auth)
  const { search, sort, category_in } = useSelector(state => state.product)
  const [state, setstate] = useState(null)
  const [word, setWord] = useState('');
  const host = process.env.REACT_APP_API_HOST;
  const history = useHistory();
  const dispatch = useDispatch();
  const handleOnClick = () => {
    localStorage.clear()
    return window.location.href = '/login/'
  }
  useEffect(() => {
    setWord(search)
  }, [search])
  const onKeyUP = (e) => {
    e.preventDefault()
    if (word) {
      dispatch({ type: SEARCH_WORD_REQ, search: word })
      dispatch({ type: CATEGORY_IN_REQ, category_in: [] });
      dispatch({ type: SORT_WORD_REQ, sort: null })
      dispatch({ type: PAGE_PRODUCT_REQ, page: 1 })
      return history.push(`/product/?search=${word}`)
    }
  }
  const titleClick = () => {

    dispatch({ type: SEARCH_WORD_REQ, search: '' })
    dispatch({ type: CATEGORY_IN_REQ, category_in: [] });
    dispatch({ type: SORT_WORD_REQ, sort: null })
    dispatch({ type: PAGE_PRODUCT_REQ, page: 1 })
    return history.push('/')
  }
  return (
    <div className="wrapper-top">
      <div className="top-header-box">

        <div className="item-header-box1">

          <Statistic className="text-title" size="large" onClick={() => titleClick()}>
            <Statistic.Label className="title-name">STORE</Statistic.Label>
            <Statistic.Value className="title-name">METRO</Statistic.Value>
          </Statistic>
        </div>
        <div className="item-header-box2">
          <Input className="input-search" icon='search' size="big" value={word} placeholder='Search...' onBlur={(e) => onKeyUP(e)} onChange={(e) => setWord(e.target.value)} />
        </div>
        <div className="item-header-box3">
          <Popup content='คำสั่งซื้อของคุณ' trigger={token ? <Icon size="large" className="icon-item-header" name="box" onClick={() => history.push("/invoid/")} /> : <Icon size="large" className="icon-item-header" name="box" onClick={() => history.push("/login/")} />} />
          <Popup content='ตะกร้าสินค้า' trigger={token ? <Icon size="large" className="icon-item-header" name="cart" onClick={() => history.push('/cart/')} /> : <Icon size="large" className="icon-item-header" name="cart" onClick={() => history.push("/login/")} />} />

          <Popup content={user ? user.username : 'เข้าสู่ระบบ'} trigger={!user ? <Icon size="large" className="icon-item-header" name="user" onClick={() => history.push('/login/')} /> : user.images ? <Image onClick={() => history.push('/profile/')} src={host + user.images.image.small_square_crop} avatar className="icon-item-header" /> : <Icon size="large" className="icon-item-header" name="user" onClick={() => history.push('/profile/')} />} />


          <Dropdown >
            {user ? (<Dropdown.Menu>
              <Dropdown.Item onClick={() => history.push('/profile/')} >
                <Icon name="cog" /> ข้อมูลผู้ใช้
              </Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Item onClick={() => handleOnClick()} >
                <Icon name="log out" /> ออกจากระบบ
              </Dropdown.Item>
            </Dropdown.Menu>)
              : (<Dropdown.Menu>
                <Dropdown.Item onClick={() => history.push("/login/")}>
                  <Icon name="lock" />  เข้าสู่ระบบ
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => history.push("/Register/")}>
                  <Icon name="signup" /> สมัครสมาชิก
                </Dropdown.Item >
              </Dropdown.Menu>)}
          </Dropdown>


        </div>
      </div>
    </div>
  )
}

export default MenuLoginLogout