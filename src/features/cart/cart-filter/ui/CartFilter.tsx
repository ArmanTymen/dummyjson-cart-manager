import { usePaginationStore } from "@/features/pagination/model/store";
import * as S from './CartFilter.styles'

export function CartFilter() {
  const { userId, setUserId } = usePaginationStore();

  return (
    <S.SearchInput
      type="number"
      placeholder="Поиск по User ID..."
      value={userId}
      onChange={(e) => setUserId(e.target.value)}
    />
  );
};