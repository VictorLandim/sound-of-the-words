import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
`;

export const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  max-width: 100%;
  width: 900px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
