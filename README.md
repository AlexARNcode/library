# :book: library


![This is an image](https://github.com/aleen42/badges/raw/master/src/node.svg)

### General
This is a web application to manage books.

### Technical
##### Backend
REST API with NodeJS and Express.

##### Frontend
React

### Pre-Requisites
- You need to have a mysql server running locally on your computer.

### How to run
#### Backend
- `git clone https://github.com/AlexARNcode/library`
- `cd library`
- Rename `dbConfig.dist` to `dbConfig.js` and edit the properties `host, user, password, database` according to your needs.
- `npm start`

#### Frontend
- `cd front`
- `npm start`

### Avalaible routes
- Get all books : `GET http://localhost:8080/books`
- Get a specific book : `GET http://localhost:8080/books/:bookId`
- Create a new book  `POST http://localhost:8080/books`
- Update a book : `PUT http://localhost:8080/books/:bookId`
- Delete a book : `DELETE http://localhost:8080/books/:bookId`

### Swagger documentation
A documentation is avalaible on `http://localhost:8080/api-docs/` to see the parameters and responses of each route : 

![Capture d’écran 2022-07-06 à 03 37 44](https://user-images.githubusercontent.com/53975649/177449252-aab4eae8-4ca4-4005-910d-66054bab4c7e.png)

### JSON file to use in Insomnia / Postman

You can import `library-insomnia.json`in Insomnia (or Postman) to make it easier : This will load all pre-configured calls to the backend API : 

![Capture d’écran 2022-07-06 à 03 45 49](https://user-images.githubusercontent.com/53975649/177449479-67abe18b-72ce-4c75-b56b-6a6d0d865001.png)

