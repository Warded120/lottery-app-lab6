import { Identifiable } from '../models/identifiable';

import { IToString } from '../models/IToString';

export class Library<TItem extends Identifiable<TId> & IToString, TId>
{
  private items: Array<TItem>;
  constructor() {
    this.items = [];
  }

  add(item: TItem): void {
    this.items.push(item);
  }

  remove(item: TItem): void {
    this.items = this.items.filter((x) => x !== item);
  }

  removeById(id: TId): void {
    const itemToDelete = this.items.filter((x) => x.id === id)[0];
    if (!itemToDelete) {
      throw new Error('Item was not found');
    }
    this.items = this.items.filter((x) => x.id !== id);
  }

  find(id: TId): TItem | undefined {
    return this.items.filter((x) => x.id === id)[0];
  }

  getAll(): Array<TItem> {
    return this.items;
  }
}
