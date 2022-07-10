import axios from "axios";

export default function deleteBook(id) {
    axios.delete(`http://localhost:8080/books/${id}`)
    .then(function (response) {

    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        window.location.href = "/";

    });
}