import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "@/entities/cart/api/useCart";
import { Layout } from "@/shared/ui/Layout";
import { CartTable } from "@/widgets/cart-table";
import * as S from './CartDetailPage.styles';

export const CartDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data, isLoading, isError } = useCart(id || "");

  if (isLoading) return <Layout><div>Загрузка корзины...</div></Layout>;
  if (isError) return <Layout><div>Ошибка при загрузке корзины</div></Layout>;
  if (!data) return <Layout><div>Корзина не найдена</div></Layout>;

  return (
    <Layout>
      <S.BackButton onClick={() => navigate(-1)}>
        <span>←</span> Назад к списку
      </S.BackButton>
      
      <CartTable cart={data} />
    </Layout>
  );
};