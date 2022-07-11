import express from "express";
import cors from 'cors';
import { createUser } from "../controllers/users.js";

const router = express.Router();
router.use(cors())

router.post('/', createUser);

export default router;