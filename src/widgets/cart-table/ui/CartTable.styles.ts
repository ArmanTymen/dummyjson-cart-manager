import styled from "@emotion/styled";
import { breakpoints } from "@/shared/consts/breakpoints";

export const TableContainer = styled.div`
  margin-top: 20px;
`;

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
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
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
    
    &::before {
      content: attr(data-label);
      font-weight: 600;
      color: #64748b;
      font-size: 0.85rem;
    }

    &:last-child {
      justify-content: center;
      padding-top: 15px;
    }
  }

  /* --- TABLET --- */
  ${breakpoints.tablet} {
    display: table;

    thead { display: table-header-group; }
    tbody { display: table-row-group; }

    tr {
      display: table-row;
      background: none;
      box-shadow: none;
      border: none;
    }

    th, td {
      display: table-cell;
      padding: 12px;
      border: 1px solid #ddd;
      text-align: left;
      font-size: 14px;
      &::before { display: none; }
    }

    th {
      background-color: #f9f9f9;
      font-weight: 600;
    }
  }

  /* --- DESKTOP --- */
  ${breakpoints.desktop} {
    th, td {
      padding: 16px;
      font-size: 16px;
    }
  }
`;

export const TotalInfo = styled.div`
  margin-top: 30px;
  text-align: right;
  font-weight: bold;
  padding: 15px;
  background: #f8fafc;
  border-radius: 8px;
  font-size: 1.2rem;

  ${breakpoints.tablet} {
    background: none;
    padding: 0;
    font-size: 1.4rem;
  }
`;