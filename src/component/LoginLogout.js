import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import ButtonAnimated from './Button'
const MenuLoginLogout = () => {
  const { user } = useSelector((state) => state.auth)
  const history = useHistory();
  if (user) {
    return (
      <Menu borderless>
        <Menu.Item position='right' >
          <ButtonAnimated />
        </Menu.Item>
        <Menu.Item >
          <Button onClick={() => localStorage.removeItem("persist:root")}>Log out</Button>
        </Menu.Item>
      </Menu>)
  }
  return (
    <Menu borderless>
      <Menu.Item position='right' >
        <Button primary onClick={() => history.push("/Register/")}>Sign up</Button>
      </Menu.Item>

      <Menu.Item >
        <Button onClick={() => history.push("/login/")}>Log-in</Button>
      </Menu.Item>
    </Menu>
  )
}

export default MenuLoginLogout