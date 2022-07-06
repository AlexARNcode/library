# library


![This is an image](https://github.com/aleen42/badges/raw/master/src/node.svg)

This is a simple backend REST API that I have created to learn NodeJS.
It is used to manage your books, you can:
- See the list of all books of the library
- See a specific book
- Add a new book
- Update a book
- Delete a book

You can use the `library-insomnia.json` file to import it in Insomnia and make requests to the API.

### Pre-Requisites
- You need to have a mysql server running locally on your computer.

### How to run
- `git clone https://github.com/AlexARNcode/library`
- `cd library`
- Rename `dbConfig.dist` to `dbConfig.js` and edit the properties `host, user, password, database` according to your needs.
- `npm start`

### Avalaible routes
- Get all books : `GET http://localhost:8080/books`
- Get a specific book : `GET http://localhost:8080/books/:bookId`
- Create a new book  `POST http://localhost:8080/books`
- Update a book : `PUT http://localhost:8080/books/:bookId`
- Delete a book : `DELETE http://localhost:8080/books/:bookId`

You can import `library-insomnia.json`in Insomnia to make it easier.
