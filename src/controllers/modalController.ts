import {overlay, modalContainer} from "../components";
import { Book, showModal } from "../utils";
import * as selectedBook from "../states/selectedBook";

overlay?.addEventListener("click", evt => {
    modalContainer?.classList.add("hidden");
});


document.addEventListener("click", evt => {
    if ((<HTMLElement>evt.target).matches("[data-toggle]")) {
        const id = (<HTMLElement>evt.target).getAttribute("data-toggle")!;
        showModal(id);


        if (id === "dialog") {
            const target = (<HTMLElement>evt.target);
            const targetBook = (<Book[]>JSON.parse(localStorage.getItem("books")!))
                .find(val => val.id == target.id);
            selectedBook.setState(targetBook!);
        }   
    }
});