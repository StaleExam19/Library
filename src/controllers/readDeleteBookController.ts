import { modalContainer } from "../components";
import * as selectedBook from "../states/selectedBook";
import { Book, updateBookContainer } from "../utils";


const readBtn = document.getElementById("read");
const deleteBtn = document.getElementById("delete");


readBtn?.addEventListener("click", evt => {
    const currentBook = selectedBook.getState();
    const filtered = (<Book[]>JSON.parse(localStorage.getItem("books")!)).filter(val => val.id !== currentBook.id);
    console.log(filtered);

    filtered.push({
        title: currentBook.title,
        author: currentBook.author,
        pages: currentBook.pages,
        id: currentBook.id,
        read: true
    });

    localStorage.setItem("books", JSON.stringify(filtered));
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