import axios from "axios";

export default function addBook(name, year, category) {
    axios.post('http://localhost:8080/books', {
        name: name,
        year: year,
        category: category
      })
      .then(function (response) {
        
      })
      .catch(function (error) {
        console.log(error);
      });
}
