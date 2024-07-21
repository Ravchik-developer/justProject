import { makeAutoObservable } from "mobx"

class WebStore {
    amountToBePaid = 0
    basket = []
    bookList = []
    chosenBook = null

    constructor() {
        makeAutoObservable(this)
    }

    addBook(book) {
        this.bookList.push(book)
    }

    setBooks(books) {
        this.bookList = books
    }

    setBasket(basket) {
        this.basket = basket
    }

    getBook(id) {
        return this.bookList[id-1]
    }

    removeBook(book_id){
        this.bookList = this.bookList.filter(book=>book.id!==book_id)
    }

    getTotalCost() {
        let totalCost = 0
        this.basket.forEach((book)=>{
            totalCost += parseFloat(book.price)
        })
        return totalCost.toFixed(2)
    }

    removeBookFromBasket(book_id){
        this.basket = this.basket.filter(book=>book.id!==book_id)
    }

    addBookToBasket(book_id) {
        this.bookList.map((book)=>{
            if (book.id === book_id) {
                return this.basket.push(book)   
            }
            return book
        })
    }
}

export default WebStore