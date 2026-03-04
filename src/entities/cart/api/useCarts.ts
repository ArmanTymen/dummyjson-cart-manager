import { usePaginationStore } from "@/features/pagination/model/store"
import { useQuery } from "@tanstack/react-query";
import { apiInstance } from "@/shared/api/base";
import type { CartResponse } from "../model/types";

export const useCarts = () => {
    const { currentPage, pageSize, userId } = usePaginationStore()

    const skip = (currentPage -1) * pageSize;

    return useQuery({
        queryKey: ['carts', pageSize, currentPage, userId],
        queryFn: async () => {
            if(userId) {
                const response = await apiInstance.get<CartResponse>(`/carts/user/${userId}`)
                return response.data
            }
            const response = await apiInstance.get<CartResponse>('/carts', {
                params: { limit: pageSize, skip }
            })
            return response.data
        } 
    })
}