import styled from "@emotion/styled";
import { breakpoints } from "@/shared/consts/breakpoints";

export const ActionButton = styled.button<{ variant?: 'danger' | 'default' }>`
  /* --- MOBILE --- */
  width: 100%; 
  padding: 12px;
  margin: 10px 0 0 0;
  font-size: 15px;
  
  cursor: pointer;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  
  background-color: ${props => props.variant === 'danger' ? '#ff4757' : '#dfe6e9'};
  color: ${props => props.variant === 'danger' ? '#ffffff' : '#2d3436'};

  /* --- TABLET & DESKTOP --- */
  ${breakpoints.tablet} {
    width: auto;
    padding: 8px 16px;
    font-size: 14px;
    margin: 0 5px;
  }

  &:hover:not(:disabled) {
    background-color: ${props => props.variant === 'danger' ? '#ff6b81' : '#b2bec3'};
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;