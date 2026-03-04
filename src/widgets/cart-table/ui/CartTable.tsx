import type { Cart } from "@/entities/cart/model/types";
import { formatCurrency } from "@/shared/lib/formatCurrency";
import * as S from './CartTable.styles'
import { UpdateQuantity } from "@/features/cart/update-quantity";
import { RemoveProduct } from "@/features/cart/delete-product";
interface CartTableProps {
  cart: Cart;
}

export const CartTable = ({ cart }: CartTableProps) => {
  return (
    <S.TableContainer>
      <h2>Корзина: #{cart.id}</h2>
      <S.ProductTable>
        <thead>
          <tr>
            <th>Товар</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Итого</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {cart.products.map((product) => (
            <tr key={product.id}>
              <td data-label="Товар">{product.title}</td>
              <td data-label="Цена">{formatCurrency(product.price)}</td>
              <td data-label="Кол-во">
                <UpdateQuantity
                  cartId={cart.id} 
                  productId={product.id} 
                  currentQuantity={product.quantity} 
                />
              </td>
              <td data-label="Итого">{formatCurrency(product.total)}</td>
              <td>
                <RemoveProduct 
                  cartId={cart.id}
                  productId={product.id}
                  products={cart.products}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </S.ProductTable>
      <S.TotalInfo>
        Общая сумма: {formatCurrency(cart.total)}
      </S.TotalInfo>
    </S.TableContainer>
  );
};