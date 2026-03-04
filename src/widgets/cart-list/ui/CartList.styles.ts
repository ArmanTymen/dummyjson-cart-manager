import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { breakpoints } from "@/shared/consts/breakpoints";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  /* --- MOBILE --- */
  display: block;
  thead { display: none; }
  tbody { display: block; width: 100%; }

  tr {
    display: block;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #f9f9f9;
    font-size: 14px;

    &:last-child {
      border-bottom: none;
      padding-top: 15px;
      justify-content: center;
    }

    &::before {
      content: attr(data-label);
      font-weight: 700;
      color: #7f8c8d;
    }
  }

  /* --- TABLET --- */
  ${breakpoints.tablet} {
    display: table;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    thead { display: table-header-group; }
    tbody { display: table-row-group; }

    tr {
      display: table-row;
      background: none;
      box-shadow: none;
      &:hover { background-color: #f8fafc; }
    }

    td, th {
      display: table-cell;
      padding: 10px 8px; 
      font-size: 13px; 
      text-align: left;
      border-bottom: 1px solid #eee;
      &::before { display: none; }
    }

    th:nth-of-type(2), td:nth-of-type(2) { display: none; }

    th {
      background-color: #f8f9fa;
      color: #475569;
      font-weight: 600;
    }
  }

  /* --- DESKTOP --- */
  ${breakpoints.desktop} {
    td, th {
      padding: 16px;
      font-size: 16px;
    }
    
    th:nth-of-type(2), td:nth-of-type(2) { display: table-cell; }
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 8px 20px;
  background-color: #3498db;
  color: white;
  border-radius: 6px;
  font-weight: 500;
  text-align: center;
  transition: background 0.2s;

  &:hover { background-color: #2980b9; }

  ${breakpoints.mobileOnly} {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;