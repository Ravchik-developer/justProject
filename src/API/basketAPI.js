import {client, loggedInClient} from './index'

// export const getBasket = async (user_id)=>{
//     const res = await client.get('/basket/' + user_id)
//     return res
// }

// 
export const addBasket = async (basket) =>{
    const res = await loggedInClient.post('/basket', basket)
    return res
}

// export const deleteBookFromBasket = async (book_id) => {
//     const res = await loggedInClient.delete('basket/books/' + book_id) 
// }