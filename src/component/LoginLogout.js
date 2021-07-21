import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import ButtonAnimated from './Button'
import { Link, Redirect } from 'react-router-dom'
import { useState } from 'react'
import Sort from './Sort'
const MenuLoginLogout = () => {
  const { token } = useSelector((state) => state.auth)
  const [state, setstate] = useState(null)
  const history = useHistory();
  const handleOnClick = () => {
    localStorage.clear()
    return window.location.href='/login/'
  }
  const handleBTNClick = (e) => {
    // console.log(e);
    if (e === 'Toggle1' && state === null) {
      setstate('Toggle1')
    }
    else setstate(null)


  }
  if (token) {
    return (
      <Menu borderless>
        <Menu.Item position='left'>
     
        </Menu.Item>
        <Menu.Item position='right' >
          <ButtonAnimated />
          <Button animated='fade' color="linkedin" as={Link} to={"/invoid/"}>
            <Button.Content visible>การสั่งซื้อ</Button.Content>
            <Button.Content hidden>12.99 Baht</Button.Content>
          </Button>
        </Menu.Item>
        <Menu.Item >
          <Button onClick={handleOnClick}>Log out</Button>
        </Menu.Item>

      </Menu>)
  }
  return (
    <Menu borderless>
      <Menu.Item position='left'>
        <Button.Group>
          <Button toggle active={state} onClick={handleBTNClick}>
            Toggle
          </Button>
          <Button toggle active={state} onClick={handleBTNClick}>
            Toggle
          </Button>
        </Button.Group>
      </Menu.Item>
      <Menu.Item position='right' >
        <Button onClick={() => history.push("/Register/")}>Sign up</Button>
      </Menu.Item>

      <Menu.Item >
        <Button onClick={() => history.push("/login/")}>Log-in</Button>
      </Menu.Item>
    </Menu>
  )
}

export default MenuLoginLogout