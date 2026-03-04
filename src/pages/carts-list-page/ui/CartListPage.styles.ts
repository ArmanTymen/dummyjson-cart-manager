import styled from "@emotion/styled";
import { breakpoints } from "@/shared/consts/breakpoints";

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;

  h2 {
    margin: 0;
  }

  ${breakpoints.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
`;