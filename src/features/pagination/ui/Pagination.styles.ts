import styled from "@emotion/styled";
import { breakpoints } from "@/shared/consts/breakpoints";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 20px 0;

  ${breakpoints.tablet} {
    gap: 15px;
  }
`;

export const PageInfo = styled.span`
  font-weight: 600;
  color: #333;
  font-size: 14px;
  min-width: 100px;
  text-align: center;

  ${breakpoints.tablet} {
    font-size: 16px;
  }
`;

export const PageButton = styled.button`
  flex: 1;
  max-width: 140px;
  padding: 12px 10px;
  
  cursor: pointer;
  background: white;
  border: 1px solid #3498db;
  color: #3498db;
  border-radius: 6px;
  transition: all 0.2s;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap; 

  ${breakpoints.tablet} {
    flex: none;
    padding: 10px 20px;
  }

  &:hover:not(:disabled) {
    background: #3498db;
    color: white;
  }

  &:disabled {
    border-color: #ccc;
    color: #ccc;
    cursor: not-allowed;
  }
`;