import React, { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../index'
import { login } from '../API/userAPI'

export const AuthPage = () => {
  const [username, setUsername] = useState('george')
  const [password, setPassword] = useState('qwerty1')
  const {users} = useContext(Context)
  const navigate = useNavigate()

  const loginUser = async () => {
      try {
        const response = await login(username, password)
        users.setUser(response.data)
        users.setLoggedIn(true); 
        // console.log(users.getUser().id) 
        navigate('/main')
      } catch (error) {
        if (error.response.status===301) {
          alert('Неверный логин или пароль')
        } 
  
      }
  }

  return (
    <Container className='d-flex justify-content-center align-item-center'>
      <Form 
        className='bg-dark bg-opacity-10 p-3 mt-3 rounded' 
        style={{width: '40%', minWidth: '500px'}}
      >
        <h2>Авторизация</h2>
        <Form.Control 
          type="text" 
          className='mt-3'
          placeholder="username" 
          value={username} 
          onChange={(e)=>setUsername(e.target.value)}
        />
        <Form.Control 
          type="password" 
          className='mt-3' 
          placeholder="password" 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)} 
        />
        <div className='d-flex justify-content-between align-item-start mt-3'>

          <Link to="/registration" className='mt-3'>Зарегистрироваться</Link>

          <Button variant='success' className='mt-3' 
          onClick={
            loginUser
          }>
            {' '}
            Войти
          </Button>

        </div>
      </Form>
    </Container>
  ) 
}
