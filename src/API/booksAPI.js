import {client, loggedInClient} from './index'

export const getBooks = async () => {
    const res = await client.get('/books')
    return res
}

export const exposeBook = async (book) => {
    const res = await loggedInClient.post('/books', book)
    return res
}

export const deleteBook = async (book_id) => {
    const res = await loggedInClient.delete('/books/' + book_id) 
}