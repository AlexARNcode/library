import express from "express";
import cors from 'cors';
import { createUser, logUser } from "../controllers/users.js";

const router = express.Router();
router.use(cors())

router.post('/', createUser);
router.post('/login', logUser);

export default router;