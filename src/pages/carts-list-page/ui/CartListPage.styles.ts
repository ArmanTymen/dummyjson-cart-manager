import styled from "@emotion/styled";
import { breakpoints } from "@/shared/consts/breakpoints";

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
  width: 100%; 

  h2 {
    margin: 0;
    text-align: center;
    font-size: 24px;
    color: #2c3e50;
  }

  ${breakpoints.tablet} {
    flex-direction: column;
    justify-content: left;
    align-items: left;
    margin-bottom: 30px;

    h2 {
      text-align: left;
    }
  }
`;