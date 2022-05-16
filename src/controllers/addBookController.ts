import {addBookForm, modalContainer} from "../components";
import {Book, generateId, updateBookContainer} from "../utils";

    addBookForm?.addEventListener("submit", evt => {
        evt.preventDefault();

        const title = (<HTMLInputElement>document.getElementById("title"));
        const author = (<HTMLInputElement>document.getElementById("author"));
        const pages = (<HTMLInputElement>document.getElementById("pages"));

        let currentBooks = (<Book[]>JSON.parse(localStorage.getItem("books")!));
        currentBooks.push({
            title: title.value,
            author: author.value,
            pages: pages.value,
            read: false,
            id: generateId()
        });

        localStorage.setItem("books", JSON.stringify(currentBooks));

        title.value = "";
        author.value = "";
        pages.value = "";

        modalContainer?.classList.add("hidden");

        updateBookContainer();
    });