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

export const Container = styled.div`
  width: 650px;
  max-width: 100%;
  background-color: #fff;
  color: #303030;
  box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
`;

export const Header = styled.h1`
  font-size: 32px;
  font-weight: 900;
  position: absolute;
  bottom: 0px;
  right: 10px;

  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

export const Button = styled.button`
  display: block;
  background-color: #fff;
  width: 100%;
  margin-top: 20px;
  justify-self: center;
  align-self: stretch;
  padding: 10px;
  border-radius: 10px;
  color: #505050;
  border: 3px solid #fcfcfc;
  appearance: none;
  outline: none;
  font-family: Lato, sans-serif;
  font-weight: 700;
  font-size: 32px;
  transition: 0.25s all;

  &:hover {
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0px);
  }
`;

export const Input = styled.textarea`
  border-radius: 10px;
  display: block;
  width: 100%;
  height: 400px;
  outline: none;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  padding: 20px;
  font-size: 42px;
  border: 0;
  resize: none;
`;

export const Text = styled.div`
  border-radius: 10px;
  display: block;
  width: 100%;
  height: 400px;
  outline: none;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  padding: 20px;
  font-size: 42px;
  border: 0;
`;

export const Letter = styled.span`
  text-decoration: ${props => (props.highlight ? 'underline' : 'none')};
  /* border-bottom: ${props => (props.highlight ? '2px solid currentColor' : 'none')}; */
`;
