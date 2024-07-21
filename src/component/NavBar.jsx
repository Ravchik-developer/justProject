import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Context} from '../index'
import { observer } from 'mobx-react-lite'

import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavBar = observer(() => {
    const {users} = useContext(Context)
    const {webStore} = useContext(Context)
    const flag = webStore.basket.length > 0 ? true : false 

    const navigate = useNavigate()
    return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home" className='ms-3'>ONLINE BOOK STORE</Navbar.Brand>
        <Nav className="me-auto">
            { flag && (
            <Link className={classes.link} to='/basket'>
                {' '}
                <FontAwesomeIcon icon={faBasketShopping} />
            </Link>
            )}
            <Link className={classes.link} to='/main'>
                {' '}
                Главная
            </Link>
            { users.loggedIn && (
            <Link className={classes.link} to='/profile'>
                {' '}
                Профиль
            </Link>
             )}
        </Nav>
        { users.loggedIn ? 
        <Button variant='success' className='me-5' to='/auth' onClick={()=> users.setLoggedIn(false)}>
            {' '}
            Выход
        </Button> :
        <Button variant='success' className='me-5' to='/auth' onClick={()=> navigate('/auth')}>
            {' '}
            Вход
    </Button>
    
        }
    </Navbar>
)
})

export default NavBar
