import React from 'react'
import {useState} from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import '../css/login.css';
import  { Redirect } from 'react-router-dom'
export default function Login() {
      const [form,setForm] = useState(null);
      const handleSubmit = (e) => {
        e.preventDefault();
        const {username,password} = e.target.elements;
        const data ={
          username:username.value,
          password:password.value,
        }
        axios.post('/token/',data).then(val =>{
          localStorage.setItem('token',val.data.access);
          setForm(true)
          console.log(val.statusText)
        }).catch(e => {
          setForm(false)
            // alert(e.message)
            console.log(e.message);
          })
        // setForm(data)
       
      } 
      if(form){
        return <Redirect to='/' />
      }
 
    //   function checkStatus(response) {
    //     if (response.status >= 200 && response.status < 400) {
    //         return response;
    //     }
    //     const error = new Error(response.statusText);
    //     error.response = response;
    //     throw error
    // }
    
    return (
        <div className="container">
            <br />
            <h1>เข้าสู่ระบบ</h1>
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
          <Button type='submit'>Submit</Button>
        </Form>
        </div>
        <br />
        <br />
        </div>
    )
}
