import { Layout } from "@/shared/ui/Layout";
import { CartList } from "@/widgets/cart-list";
import * as S from './CartListPage.styles';
import { CartFilter } from "@/features/cart/cart-filter";

export const CartListPage = () => {
  return (
    <Layout>
      <S.PageHeader>
        <h2>Список корзин</h2>
        <CartFilter />
      </S.PageHeader>
      
      <CartList />
    </Layout>
  );
};