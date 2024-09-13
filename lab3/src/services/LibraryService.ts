export class Library<T> {
    private items: T[] = [];

    // Add an item (book or user)
    add(item: T): void {
        this.items.push(item);
    }

    // Remove an item by id
    remove(id: number): void {
        this.items = this.items.filter((item: any) => item.id !== id);
    }

    // Find an item by id
    find(id: number): T | undefined {
        return this.items.find((item: any) => item.id === id);
    }

    // List all items
    list(): T[] {
        return this.items;
    }
}
