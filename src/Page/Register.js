import React from 'react'
import { useState } from 'react';
import { Button, Form, Message, Segment, Container, Item } from 'semantic-ui-react'
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import '../css/register.css';
import { Redirect } from 'react-router-dom'
import { FETCH_AUTH_REQ } from '../redux/Reducer/action.type';
export default function Register() {
  const [error, setError] = useState(null)
  const [currentUser, setCurrentUser] = useState(null);
  document.title = "METRO - REGISTER"
  const dispatch = useDispatch();

  const fetLogin = async (data) => {
    try {
      await axios.post('/register/', data)
      setCurrentUser(true)
      setError(null)
    } catch (error) {
      setCurrentUser(false)
      setError(error.response.data)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, first_name, last_name, email } = e.target.elements;
    const data = {
      username: username.value,
      password: password.value,
      email: email.value,
      first_name: first_name.value,
      last_name: last_name.value,
    }
    const data_login = {
      username: username.value,
      password: password.value,
    }
    fetLogin(data);
    return dispatch({ type: FETCH_AUTH_REQ, payload: data_login })
  }
  if (currentUser) {
    return <Redirect to='/' />
  }

  return (
    <Container>
      <br />
      <Segment>
        <h1 className="h1-register">สมัครสมาชิก</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Usename</label>
            <input name="username" placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input name="password" type="password" placeholder='Password' />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input name="email" type="email" placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <label>First Name</label>
            <input name="first_name" placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input name="last_name" placeholder='Last Name' />
        
          </Form.Field>

          <Button color="instagram" type='submit'>Submit</Button>
        </Form>
        {error ? <Message error>
          <Message.Header>{error.code}</Message.Header>
          <p>{error?.msg}</p>
        </Message> : <div />}

        <br />
      </Segment>
    </Container>
  )
}
