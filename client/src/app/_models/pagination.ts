export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalpages: number;
}

export class PaginatedResult<T>{
  result: T;
  pagination: Pagination;
}
