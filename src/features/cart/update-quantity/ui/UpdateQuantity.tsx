import { useUpdateCart } from "@/entities/cart/api/useUpdateCart";
import * as S from './UpdateQuantity.styles';

interface Props {
  cartId: number;
  productId: number;
  currentQuantity: number;
}

export const UpdateQuantity = ({ cartId, productId, currentQuantity }: Props) => {
  const { mutate: updateCart, isPending } = useUpdateCart();

  const handleUpdate = (delta: number) => {
    const newQuantity = currentQuantity + delta;
    if (newQuantity < 1) return;

    updateCart({
      id: cartId,
      products: [{ id: productId, quantity: newQuantity }]
    });
  };

  return (
    <S.QuantityWrapper>
      <S.ActionButton 
        disabled={isPending || currentQuantity <= 1} 
        onClick={() => handleUpdate(-1)}
        title="Уменьшить"
      >
        −
      </S.ActionButton>
      
      <S.QuantityValue>{currentQuantity}</S.QuantityValue>
      
      <S.ActionButton 
        disabled={isPending} 
        onClick={() => handleUpdate(1)}
        title="Увеличить"
      >
        +
      </S.ActionButton>
    </S.QuantityWrapper>
  );
};