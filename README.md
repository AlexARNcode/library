# library


![This is an image](https://github.com/aleen42/badges/raw/master/src/node.svg)

This is a simple backend REST API that I have created to learn NodeJS.
It is used to manage your books, you can:
- See the list of all books of the library
- See a specific book
- Add a new book
- Update a book
- Delete a book

(Basic CRUD)

I am just mocking a database at the moment, using a simple array, but maybe I will integrate a real database later.

You can use the `library-insomnia.json` file to import it in Insomnia and make requests to the API.

### How to run
- `git clone https://github.com/AlexARNcode/library`
- `cd library`
- `npm start`

### Avalaible routes
- Get all books : `GET http://localhost:8080/books`
- Get a specific book : `GET http://localhost:8080/books/:bookId`
- Create a new book  `POST http://localhost:8080/books`
- Update a book : `PATCH http://localhost:8080/books/:bookId`
- Delete a book : `DELETE http://localhost:8080/books/:bookId`

You can import `library-insomnia.json`in Insomnia to make it easier.
