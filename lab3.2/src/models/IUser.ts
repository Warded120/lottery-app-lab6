import { Identifiable } from './identifiable';
import { ToString } from './toString';
import { IBook } from './IBook';

export interface IUser extends Identifiable<number>, ToString {
    borrowedBooks: IBook[];
    username: string;
    email: string;

    getUsername(): string;
    getEmail(): string;
    borrowBook(book: IBook): void;
    takeBookBack(bookId: number): void;
}
