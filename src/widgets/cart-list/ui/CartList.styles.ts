import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { breakpoints } from "@/shared/consts/breakpoints";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  table-layout: fixed;

  /* --- MOBILE --- */
  @media (max-width: 767px) {
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
  }

  /* --- TABLET & DESKTOP (768px и выше) --- */
  @media (min-width: 768px) {
    display: table;
    width: 100%;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    thead { display: table-header-group; }
    tbody { display: table-row-group; }

    tr {
      display: table-row;
      background: none;
      &:hover { background-color: #f8fafc; }
    }

    td, th {
      display: table-cell;
      padding: 12px 8px;
      font-size: 13px;
      border-bottom: 1px solid #eee;
      vertical-align: middle;
      text-align: left;
      &::before { display: none; }
    }

    th {
      background-color: #f8f9fa;
      color: #475569;
      font-weight: 600;
      text-align: left; /* ЗАГОЛОВКИ ТОЖЕ СЛЕВА */
    }

    /* РАСПРЕДЕЛЕНИЕ ШИРИНЫ (5 колонок) */
    th:nth-of-type(1), td:nth-of-type(1) { width: 10%; } /* ID */
    th:nth-of-type(2), td:nth-of-type(2) { 
      width: 25%; 
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; 
    } /* Юзер */
    th:nth-of-type(3), td:nth-of-type(3) { width: 20%; } /* Товаров */
    th:nth-of-type(4), td:nth-of-type(4) { width: 20%; } /* Итого */
    th:nth-of-type(5), td:nth-of-type(5) { width: 20%; } /* Действие */
  }

  /* --- ТОЛЬКО DESKTOP (1024px и выше) --- */
  @media (min-width: 1024px) {
    td, th {
      padding: 16px 8px;
      font-size: 16px;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  background-color: #3498db;
  color: white !important;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  transition: background 0.2s;

  &:hover { background-color: #2980b9; }

  ${breakpoints.mobileOnly} {
    width: 100%;
    margin-top: 10px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 6px 12px;
    font-size: 13px;
  }
`;