import express from 'express';
import bodyParser from 'body-parser';
import booksRoutes from './routes/books.js';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const app = express();
const PORT = 8080;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "An API to manage your books",
      contact: {
        name: "AlexARNcode",
        url: "https://github.com/AlexARNcode/library",
      },
    },

    servers: [
      {
        url: "http://localhost:8080",
        description: "Library API documentation",
      },
    ],
  },
  apis: ["./routes/swagger.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(bodyParser.json())
app.use('/books', booksRoutes);


app.listen(
    PORT,
    console.log(`Alive on http://localhost:${PORT}`)
);




