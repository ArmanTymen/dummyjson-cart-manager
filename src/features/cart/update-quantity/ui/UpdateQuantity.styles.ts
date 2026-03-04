import styled from "@emotion/styled";
import { breakpoints } from "@/shared/consts/breakpoints";

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  
  ${breakpoints.tablet} {
    justify-content: flex-start;
    gap: 8px;
  }
`;

export const QuantityValue = styled.span`
  font-weight: 600;
  min-width: 24px;
  text-align: center;
  font-size: 14px;
  color: #2d3436;

  ${breakpoints.tablet} {
    font-size: 16px;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* --- MOBILE --- */
  width: 40px; 
  height: 40px;
  background: #f8f9fa;
  
  cursor: pointer;
  border: 1px solid #dfe6e9;
  color: #3498db;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.2s;

  /* --- TABLET & DESKTOP --- */
  ${breakpoints.tablet} {
    width: 32px;
    height: 32px;
    background: white;
  }

  &:hover:not(:disabled) {
    background: #f0f7ff;
    border-color: #3498db;
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    filter: grayscale(1);
  }
`;