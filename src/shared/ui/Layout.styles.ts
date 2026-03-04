import styled from "@emotion/styled";
import { breakpoints } from "@/shared/consts/breakpoints";

export const Container = styled.div`
  max-width: 1000px; 
  margin: 0 auto;
  padding: 0 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

export const Header = styled.header`
  border-bottom: 2px solid #eee;
  padding: 20px 0;
  margin-bottom: 20px;
  width: 100%;
  
  ${breakpoints.tablet} {
    margin-bottom: 30px;
    padding: 30px 0 15px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0;

  ${breakpoints.tablet} {
    font-size: 2.2rem;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0; 
`;