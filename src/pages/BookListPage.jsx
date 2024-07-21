import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../index'
import BookCard from '../component/BookCard'
import AddBookModal from '../component/AddBookModal'
import { observer } from 'mobx-react-lite'
import { getBooks, deleteBook } from '../API/booksAPI'
import { Button } from 'react-bootstrap'

export const BookListPage = observer(() => {
  const [showCreateBookModal, setShowCreateBookModal] = useState(false)
  const {webStore} = useContext(Context)
  const {users} = useContext(Context)
  

  const removeBook = async (book_id) => {
  try {
    const response = await deleteBook(book_id)
    webStore.removeBook(book_id)
  } catch (e) {
    alert(e)
  }
}

  const addBookToBasket = (book_id) => {
    webStore.addBookToBasket(book_id)
  }


  const getBookList = async () => {
    const response = await getBooks()
    webStore.setBooks(response.data)
  }

  useEffect(()=>{
    getBookList()
  }, [])

  return (   
    <div className='d-flex flex-wrap '>
            <AddBookModal
        show={showCreateBookModal}
        onClose={() => setShowCreateBookModal(false)}
      />
        {webStore.bookList.map((book)=>(
          <BookCard 
          id={book.id}
          key={book.id}
          title={book.title} 
          img={book.image} 
          price={book.price}
          onDelete={removeBook}
          pushFromBasket={addBookToBasket}
          />
        ))} 
        { users.loggedIn && (
        <Button
        variant='success'
        style={{ width: '70px', height: '50px', fontSize: '30px' }}
        className=' position-fixed bottom-0 end-0 mb-5 me-5 pt-0'
        onClick={() => setShowCreateBookModal(true)}
      >
        +
      </Button>
      )}
    </div>
  )
})
