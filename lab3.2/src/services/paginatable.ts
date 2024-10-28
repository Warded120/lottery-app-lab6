import { Identifiable } from '../models/identifiable';
import { ToString } from '../models/toString';

export interface Paginatable<TEntity extends ToString> {
    getPaginated(pageNumber: number, pageSize: number): TEntity[];
    getTotalCount(): number;
}
