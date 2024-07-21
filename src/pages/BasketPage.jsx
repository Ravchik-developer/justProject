import React, { useContext, useEffect } from 'react'
import { Context } from '../index'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import BasketCard from '../component/BasketCard'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { addBasket } from '../API/basketAPI'

export const BasketPage = observer(() => {
  const {users} = useContext(Context)
  const {webStore} = useContext(Context)
  const navigate = useNavigate()

  // const getBasketList = async (user_id) => {
  //   const res = await getBasket(user_id)
  //   console.log('корзина', res.data.books)
  // }

  // Параметры для объекта корзины
  const user_id = users.getUser().id
  let books = webStore.basket

// Создание объекта корзины 
  const createNewBasket = async () =>  {
    const newBasket = {
      userId: user_id,
      completed: false,
      books: books
    }
  const response = await addBasket(newBasket)
  console.log(response.data)
  }
//


  const removeBook = async (book_id) => {
      try {
        webStore.removeBookFromBasket(book_id)
        books = webStore.basket
        if (webStore.basket.length == 0) {
          navigate('/main')
        } else {
        createNewBasket()
      }
      } catch (e) {
        alert(e)
      }
    
  }

  useEffect(()=>{
    createNewBasket()
  }, [])

  return (
    users.loggedIn && (
      <Container className=' justify-content-center align-item-center'>  
    <ListGroup variant="flush" className='bg-dark bg-opacity-10 m-3 rounded' >
      <h2 className='m-3'>Корзина покупок</h2>
      {webStore.basket.map((book)=>(
      <BasketCard
        title={book.title} 
        price={book.price}
        id={book.id}
        deleteFromBasket={removeBook}
      />
      ))} 
      <ListGroup.Item variant='success' className='m-3' style={{width:'60%'}}>
        <Button variant='success' className='me-5' to='/main' onClick={()=> navigate('/main')}>
              {' '}
              Оплатить
          </Button>
            <Badge bg="danger" className='p-2'>
            {webStore.getTotalCost()} $
            </Badge>
          
        </ListGroup.Item>
  </ListGroup>
  </Container>
  )
  )
})
