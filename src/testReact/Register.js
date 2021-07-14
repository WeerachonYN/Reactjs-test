import React from 'react'
import {useState} from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import Login from './Login';
import '../css/login.css';
import  { Redirect } from 'react-router-dom'
export default function Register() {
      const [currentUser, setCurrentUser] = useState(null);
      const handleSubmit = (e) => {
        e.preventDefault();
        const {username,password,first_name,last_name,email} = e.target.elements;
        const data ={
          username:username.value,
          password:password.value,
          email:email.value,
          first_name:first_name.value,
          last_name:last_name.value,
        }
        axios.post('/register/',data).then(val =>{
          setCurrentUser(true)
          console.log(val.statusText)
        }).catch(e => {
          setCurrentUser(false)
            alert(e.message)
            console.log(e.message);
          })
        // setForm(data)
       
      } 
      if(currentUser){
        return <Redirect to='/' />
      }
 
    return (
        <div className="container">
          <h1>สมัครสมาชิก</h1>
          <div className="gridLogin">
          
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
          <Button type='submit'>Submit</Button>
        </Form>
        </div>
        <br />
      
        </div>
    )
}
