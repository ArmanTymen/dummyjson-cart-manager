import { create } from "zustand"

interface PaginationState {
    currentPage: number,
    pageSize: number,
    userId: string;
    setPage: (page: number) => void,
    setPageSize: (size: number) => void
    setUserId: (id: string) => void;
}
export const usePaginationStore = create<PaginationState>((set) => ({
    currentPage: 1,
    pageSize: 10,
    userId: '',
    setPage: (page) => set({ currentPage: page}),
    setPageSize: (size) => set({ pageSize: size, currentPage: 1}),
    setUserId: (id) => set({ userId: id, currentPage: 1 }),
}))