import express from 'express';
import bodyParser from 'body-parser';
import booksRoutes from './routes/books.js';
import usersRoutes from './routes/users.js';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { swaggerOptions } from './routes/swaggerOptions.js';

const app = express();
const PORT = 8080;
const specs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(bodyParser.json())
app.use('/books', booksRoutes);
app.use('/users', usersRoutes);

app.listen(
    PORT,
    console.log(`Alive on http://localhost:${PORT}`)
);




