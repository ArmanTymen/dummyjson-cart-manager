import styled from "@emotion/styled";
import { breakpoints } from "@/shared/consts/breakpoints";

export const BackButton = styled.button`
  /* --- MOBILE --- */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%; 
  margin-bottom: 20px;
  padding: 12px;
  
  cursor: pointer;
  background-color: #ffffff;
  color: #34495e;
  border: 1px solid #dcdde1;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.2s ease;

  /* --- TABLET & DESKTOP --- */
  ${breakpoints.tablet} {
    width: auto;
    justify-content: flex-start;
    padding: 10px 18px;
    font-size: 14px;
    
    &:hover {
      background-color: #f8f9fa;
      border-color: #3498db;
      color: #3498db;
      transform: translateX(-4px);
    }
  }

  &:active {
    transform: translateX(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;