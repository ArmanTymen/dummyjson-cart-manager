import styled from "@emotion/styled";
import { breakpoints } from "@/shared/consts/breakpoints";

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }

  ${breakpoints.tablet} {
    max-width: 300px;
  }
`;