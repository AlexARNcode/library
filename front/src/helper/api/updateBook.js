import axios from "axios";

export default function updateBook(bookIdToUpdate, bookNameToUpdate, bookYearToUpdate, bookCategoryToUpdate) {
  axios.put(`http://localhost:8080/books/${bookIdToUpdate}`, {
      name: bookNameToUpdate,
      year: bookYearToUpdate,
      category: bookCategoryToUpdate
    })
    .then(function (response) {
      alert(`Book "${bookNameToUpdate}" updated !`);
    })
    .catch(function (error) {
      console.log(error);
    });
}
