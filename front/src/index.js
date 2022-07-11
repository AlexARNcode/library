import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Book from './Components/Book';
import NewBook from './Components/NewBook';
import Login from './Pages/Login';
import Register from './Pages/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="book/:id" element={<Book />} />
    <Route path="book/add" element={<NewBook />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>
</BrowserRouter>
);
