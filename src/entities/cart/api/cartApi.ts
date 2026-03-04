import { apiInstance } from "@/shared/api/base";
import type { Cart, CartResponse } from "../model/types";

export const cartApi = {
    getCarts: async (limit: number, skip: number): Promise<CartResponse> => {
        const { data } = await apiInstance.get<CartResponse>('/carts', {
            params: { limit, skip }
        });
        return data
    },

    getCartById: async (id: string): Promise<Cart> => {
        const { data } = await apiInstance.get<Cart>(`/carts/${id}`)
        return data
    },

    updateCart: async (id: number, products: { id: number, quantity: number}[]): Promise<Cart> => {
        const { data } = await apiInstance.put<Cart>(`/carts/${id}`, {
            merge: true,
            products
        });
        return data
    },

    deleteCart: async (id: number): Promise<Cart> => {
        const { data } = await apiInstance.delete<Cart>(`/carts/${id}`);
        return data
    }
}