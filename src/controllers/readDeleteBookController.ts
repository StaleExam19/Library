import { bookContainer, ind, modalContainer } from "../components";
import * as selectedBook from "../states/selectedBook";
import { Book, updateBookContainer } from "../utils";


const readBtn = document.getElementById("read");
const deleteBtn = document.getElementById("delete");


readBtn?.addEventListener("click", evt => {
    const currentBook = selectedBook.getState();
    const booksFromStorage = (<Book[]>JSON.parse(localStorage.getItem("books")!));
    
    const index = booksFromStorage.findIndex(val => val.id == currentBook.id);

    booksFromStorage[index] = {
        id: currentBook.id,
        author: currentBook.author,
        read: true,
        title: currentBook.title,
        pages: currentBook.pages
    }

    localStorage.setItem("books", JSON.stringify(booksFromStorage));
    updateBookContainer();
    modalContainer?.classList.replace("flex", "hidden");
});

deleteBtn?.addEventListener("click", evt => {
    const currentBook = selectedBook.getState();
    const filtered = (<Book[]>JSON.parse(localStorage.getItem("books")!)).filter(val => val.id !== currentBook.id);
    
    localStorage.setItem("books", JSON.stringify(filtered));
    updateBookContainer();
    modalContainer?.classList.replace("flex", "hidden");
})