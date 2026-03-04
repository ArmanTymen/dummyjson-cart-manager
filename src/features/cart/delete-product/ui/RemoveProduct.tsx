import { useUpdateCart } from "@/entities/cart/api/useUpdateCart";
import type { Cart } from "@/entities/cart/model/types";
import * as S from './RemoveProduct.styles';

interface RemoveProductProps {
  cartId: number;
  productId: number;
  products: Cart['products'];
}

export function RemoveProduct({ cartId, productId, products }: RemoveProductProps) {
  const { mutate: updateCart, isPending } = useUpdateCart();

  const handleRemoveProduct = () => {
    if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
      const remainingProducts = products
        .filter(p => p.id !== productId)
        .map(p => ({ id: p.id, quantity: p.quantity }));

      updateCart({
        id: cartId,
        products: remainingProducts
      });
    }
  };

  return (
    <S.ActionButton 
      variant="danger"
      disabled={isPending}
      onClick={handleRemoveProduct}
    >
      {isPending ? 'Удаление...' : 'Удалить'}
    </S.ActionButton>
  );
}

