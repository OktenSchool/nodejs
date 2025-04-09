export interface IPaginatedResponse<T> {
    totalItems: number;
    totalPages: number;
    prevPage: boolean;
    nextPage: boolean;
    data: T[];
}
