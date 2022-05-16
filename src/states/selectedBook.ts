import { Book } from "../utils";

let book: Book;

export const setState = (value: Book) => book = value;
export const getState = () => book;