import { Identifiable } from './identifiable';
import { ToString } from './toString';

export interface IBook extends Identifiable<number>, ToString {
    bookName: string;
    author: string;
    releaseYear: number;
    borrowed: boolean;
    borrowedBy?: string;

    getBookName(): string;
    getAuthor(): string;
    getReleaseYear(): number;
    getFullName(): string;
}
