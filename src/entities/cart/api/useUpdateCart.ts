import { useMutation, useQueryClient } from '@tanstack/react-query'
import { cartApi } from './cartApi'
import type { Cart, CartResponse } from '../model/types'

export const useUpdateCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      id,
      products,
    }: {
      id: number
      products: { id: number; quantity: number }[]
    }) => cartApi.updateCart(id, products),

    onSuccess: (_, variables) => {
      const cartKey = ['cart', String(variables.id)] as const

      const updatedCart = queryClient.setQueryData<Cart>(cartKey, (oldData) => {
        if (!oldData) return undefined;
        const isDeleteAction = variables.products.length > 1
        let newProducts;
        if(isDeleteAction) {
          newProducts = oldData.products.filter(p => variables.products.some(v => v.id === p.id))
        } else {
          newProducts = oldData.products.map((product) => {
            const change = variables.products.find((v) => v.id === product.id)
            if(!change) return product
            return {
              ...product,
              quantity: change.quantity,
              total: product.price * change.quantity,
            }
          }).filter(p => p.quantity > 0)
        }
        return {
          ...oldData,
          products: newProducts,
          total: newProducts.reduce((acc, p) => acc + p.total, 0),
          totalProducts: newProducts.length,
          totalQuantity: newProducts.reduce((acc, p) => acc + p.quantity, 0)
        }
      })
      if(updatedCart) {
        queryClient.setQueriesData<CartResponse>(
          { queryKey: ['carts']},
          (oldData) => {
            if (!oldData) return oldData;

            return {
              ...oldData,
              carts: oldData.carts.map((cart) => cart.id === variables.id ? { ...cart, total: updatedCart.total, totalProducts: updatedCart.totalProducts} : cart)
            }
          }
        )
      }
    },
    onError: (error: Error) => {
      alert('Ошибка при обновлении: ' + error.message)
    },
  })
}