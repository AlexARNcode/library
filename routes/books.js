import express from "express";
import { addBook, deleteBook, getAllBooks, getBook, updateBook } from "../controllers/books.js";

const router = express.Router();

router.get('/', getAllBooks);

router.get('/:id', getBook)

router.post('/', addBook)

router.put('/:id', updateBook)

router.delete('/:id', deleteBook)

export default router;