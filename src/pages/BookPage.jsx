import React, { useContext } from 'react'
import BookDescriptionCard from '../component/BookDescriptionCard'

import { Context } from '../index'

export const BookPage = () => {
  const id = 1
  const {webStore} = useContext(Context)
  const book = webStore.chosenBook

  const addBookToBasket = (book_id) => {
    webStore.addBookToBasket(book_id)
  }
  return (
    <div>
      <BookDescriptionCard 
         id={book.id}
         key={book.id}
         title={book.title} 
         description={book.description}
         img={book.image} 
         price={book.price}
         pushFromBasket={addBookToBasket}
      />
    </div>
  )
}
