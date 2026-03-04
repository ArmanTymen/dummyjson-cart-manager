import { useCarts } from "@/entities/cart/api/useCarts";
import { formatCurrency } from "@/shared/lib/formatCurrency";
import * as S from "./CartList.styles";
import Pagination from "@/features/pagination/ui/Pagination";

export const CartList = () => {
  const { data, isLoading, isError } = useCarts();

  if (isLoading) return <div>Загрузка списка...</div>;
  if (isError) return <div>Ошибка при загрузке данных</div>;

  return (
    <>
      <S.Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Пользователь</th>
            <th>Товаров</th>
            <th>Итого</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {data?.carts.map((cart) => (
            <tr key={cart.id}>
              <td data-label="Номер корзины">#{cart.id}</td>
              <td data-label="Клиент">ID пользователя: {cart.userId}</td>
              <td data-label="Кол-во товаров">{cart.totalProducts} шт.</td>
              <td data-label="Сумма к оплате">
                <strong>{formatCurrency(cart.total)}</strong>
              </td>
              <td>
                <S.StyledLink to={`/carts/${cart.id}`}>
                  Смотреть детали
                </S.StyledLink>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
      <Pagination totalItems={data?.total || 0} />
    </>
  );
};