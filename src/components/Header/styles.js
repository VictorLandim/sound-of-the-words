import styled from 'styled-components';

export const Header = styled.h1`
  font-size: 35px;
  font-weight: 900;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: left;
  color: #303030;
  opacity: 0.3;
  width: 40px;
  z-index: -1;

  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    font-size: 22px;
    bottom: unset;
    top: 10px;
  }
`;
