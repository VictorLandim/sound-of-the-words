import React from 'react';
import { TextInput, Text, Letter, EditorContainer, Button } from './styles';
import { IoIosPlay, IoIosSquare } from 'react-icons/io';

const Player = ({ playing, currentChar, text, onInputChange, onButtonClick }) => {
  const renderText = () => {
    if (!playing) return <TextInput spellCheck={false} onChange={onInputChange} value={text} />;

    return (
      <Text>
        {[...text].map((letter, i) => {
          // if (letter === '\n') return <br />;

          return (
            <Letter highlight={currentChar === i} key={`${letter}${i}`}>
              {letter}
            </Letter>
          );
        })}
      </Text>
    );
  };

  return (
    <EditorContainer>
      {renderText()}
      {/* <Button onClick={onButtonClick}>{playing ? '◼' : '►'}</Button> */}
      <Button onClick={onButtonClick}>{playing ? <IoIosSquare /> : <IoIosPlay />}</Button>
    </EditorContainer>
  );
};

export default Player;
