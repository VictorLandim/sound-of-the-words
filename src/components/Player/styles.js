import styled, { css } from 'styled-components';

export const EditorContainer = styled.div`
  flex: 3;
  width: 100%;
  background-color: #fff;
  color: #303030;
  box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
    margin-top: 75px;
  }
`;

const textBlockCss = css`
  border-radius: 10px;
  display: block;
  width: 100%;
  height: 450px;
  outline: none;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  padding: 20px;
  font-size: 42px;
  border: 0;

  @media only screen and (max-width: 768px) {
    height: 300px;
  }
`;

export const TextInput = styled.textarea`
  ${textBlockCss};
  resize: none;
`;

export const Text = styled.div`
  ${textBlockCss};
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

export const Letter = styled.span`
  /* text-decoration: ${props => (props.highlight ? 'underline' : 'none')}; */
  border-bottom: ${props => (props.highlight ? '3px solid currentColor' : 'none')};
`;
