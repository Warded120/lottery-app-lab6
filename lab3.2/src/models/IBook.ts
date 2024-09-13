import { Identifiable } from './identifiable';
import { IToString } from './IToString';

export interface IBook extends Identifiable<number>, IToString {
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
