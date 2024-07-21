// import { useContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {BookListPage} from "./pages/BookListPage"
import {BookPage} from "./pages/BookPage"
import {BasketPage} from "./pages/BasketPage"
import {AuthPage} from "./pages/AuthPage"
import {RegistrationPage} from "./pages/RegistrationPage"
import {ProfilePage} from "./pages/ProfilePage"
import NavBar from "./component/NavBar"

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/main" element={<BookListPage/>} />
        <Route path="/book/:id" element={<BookPage/>} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/registration" element={<RegistrationPage/>} /> 
        <Route path="/basket" element={<BasketPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="*" element={<BookListPage/>} />
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
