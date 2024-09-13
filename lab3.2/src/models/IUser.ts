import { Identifiable } from './identifiable';
import { IToString } from './IToString';
import { IBook } from './IBook';

export interface IUser extends Identifiable<number>, IToString {
  borrowedBooks: IBook[];
  username: string;
  email: string;

  getUsername(): string;
  getEmail(): string;
  borrowBook(book: IBook): void;
  takeBookBack(bookId: number): void;
}
