import express from "express";
import { addBook, deleteBook, getAllBooks, getBook, updateBook } from "../controllers/books.js";
import cors from 'cors';

const router = express.Router();
router.use(cors())

router.get('/', getAllBooks);

router.get('/:id', getBook)

router.post('/', addBook)

router.put('/:id', updateBook)

router.delete('/:id', deleteBook)

export default router;