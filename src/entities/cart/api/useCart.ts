import { useQuery } from "@tanstack/react-query"
import { cartApi } from "./cartApi"

export const useCart = (id: string | undefined) => {
    return useQuery({
        queryKey: ['cart', id],
        queryFn: () => cartApi.getCartById(id!),
        enabled: !!id
    })
}