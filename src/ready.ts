import { updateBookContainer, showModal, generateId, Book } from "./utils";
import { ind, addBookForm, modalContainer, overlay } from "./components";


// Initial state
let books = localStorage.getItem("books");


if ((<Book[]>JSON.parse(books!)).length !== 0) {
    ind?.classList.add("hidden");
    updateBookContainer();
}

if (!books) {
    localStorage.setItem("books", JSON.stringify([]));
    books = localStorage.getItem("books");
    ind?.classList.remove("hidden");
}