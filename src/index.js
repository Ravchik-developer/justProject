import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import UserStore from './store/userStore'
import WebStore from './store/webStore'

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider value={{
        users: new UserStore(),
        webStore: new WebStore()
    }}>
        <App />
    </Context.Provider>
)

