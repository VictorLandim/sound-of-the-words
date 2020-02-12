import styled from 'styled-components';

export const SettingsContainer = styled.div`
  padding: 20px 10px;
  margin-left: 50px;
  flex: 1;
  width: 100%;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  width: 100%;
  border-radius: 20px;
  border: 0;
  outline: 0;
  padding: 15px 15px;
  background-color: #fff;
  color: #303030;
  box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.3);
  font-family: 'Lato', sans-serif;
  /* appearance: none; */
  -webkit-appearance: initial;
`;

export const Row = styled.div`
  margin-bottom: 40px;
`;
