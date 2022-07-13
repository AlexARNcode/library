import express from "express";
import { addBook, deleteBook, getAllBooks, getBook, updateBook } from "../controllers/books.js";
import cors from 'cors';
import checkJWT from "../middlewares/security.js";

const router = express.Router();
router.use(cors())

router.get('/', getAllBooks);

router.get('/:id', getBook)

router.post('/', checkJWT, addBook)

router.put('/:id', checkJWT, updateBook)

router.delete('/:id', checkJWT, deleteBook)

export default router;