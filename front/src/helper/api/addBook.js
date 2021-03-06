import axios from "axios";

export default function addBook(name, year, category) {
    axios.post('http://localhost:8080/books', {
        name: name,
        year: year,
        category: category
      })
      .then(function (response) {
        alert(`Book "${name}" added !`);
      })
      .catch(function (error) {
        console.log(error);
      });
}
