import { usePaginationStore } from "../model/store";
import * as S from './Pagination.styles';

interface PaginationProps {
  totalItems: number;
}

export function Pagination({ totalItems }: PaginationProps) {
  const { currentPage, setPage, pageSize } = usePaginationStore();
  
  const totalPages = Math.ceil(totalItems / pageSize);
  const hasNextPage = currentPage < totalPages;

  return (
    <S.PaginationWrapper>
      <S.PageButton 
        onClick={() => setPage(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        ← Назад
      </S.PageButton>

      <S.PageInfo>
        {currentPage} / {totalPages || 1}
      </S.PageInfo>

      <S.PageButton 
        onClick={() => setPage(currentPage + 1)} 
        disabled={!hasNextPage}
      >
        Вперед →
      </S.PageButton>
    </S.PaginationWrapper>
  );
}
