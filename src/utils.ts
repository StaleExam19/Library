import { bookContainer, ind, modalContainer } from "./components";


interface Book {
    title: string,
    author: string,
    pages: string,
    read: boolean,
    id: string
}

const bookCard = (book: Book) => /*html */ `
    <div class="book-card" data-toggle="dialog" id="${book.id}">
        <h3 class="text-2xl pointer-events-none">${book.title}</h3>
        <p class="pointer-events-none">${book.author}</p>
        <p class="pointer-events-none">${book.pages} pages</p>
        <p class="pointer-events-none">Read: 
        <span class="${book.read ? 'text-green-500' : 'text-rose-500'}">
        ${book.read ? "Yes" : "Not Yet"}
        </span></p>
    </div>
`;

const updateBookContainer = () => {
    bookContainer!.innerHTML = "";
    const book = (<Book[]>JSON.parse(localStorage.getItem("books")!))
    if (book.length !== 0) {
        ind?.classList.add("hidden");
        book.map(val => {
            bookContainer!.innerHTML += bookCard(val);
        });
    }
}


const generateId = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 16; i++)
        result += chars[Math.floor(Math.random() * chars.length - 1)];

    return result;
}


const showModal = (dialogId: string) => {
    modalContainer?.classList.replace("hidden", "flex")
    document.querySelectorAll(".dialog").forEach(val => val.classList.replace("flex", "hidden"));
    document.getElementById(dialogId)?.classList.replace("hidden", "flex");
};

export {
    bookCard,
    updateBookContainer,
    generateId,
    showModal,
    Book
}