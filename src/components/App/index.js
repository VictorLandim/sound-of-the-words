import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';
import { transform } from '../../utils/transformer';
import { play } from '../../utils/audioPlayer';
import { Main, Container, Input, Text, Header, Button, Letter } from './styles';

// TODO: play notes at the same time: (create chords)

// Hello world
// my name is
const App = () => {
  const defaultContent = `Words dance.`;

  const [text, setText] = useState(defaultContent);
  const [currentChar, setCurrentChar] = useState(null);
  const [playing, setPlaying] = useState(false);

  const onChange = e => setText(e.target.value);

  const onClick = () => {
    if (!text) return;

    setPlaying(!playing);

    if (playing) {
      stopTone();
    } else {
      const transformedText = transform(text);
      play(transformedText, setCurrentChar);
    }
  };

  const startTone = async () => {
    await Tone.start();
    Tone.context.latencyHint = 'playback';
  };

  const stopTone = () => {
    Tone.Transport.stop();
    Tone.Transport.position = 0;
    Tone.Transport.cancel(0);

    setCurrentChar(null);
  };

  useEffect(() => {
    startTone();
  }, []);

  const renderText = () => {
    if (!playing) return <Input onChange={onChange} value={text} />;

    return (
      <Text>
        {[...text].map((letter, i) => {
          // if (letter === '\n') return <br />;

          return (
            <Letter
              suppressContentEditableWarning={true}
              highlight={currentChar === i}
              contentEditable="false"
              key={`${letter}${i}`}
            >
              {letter}
            </Letter>
          );
        })}
      </Text>
    );
  };
  return (
    <Main>
      <Header>Sound of the Words</Header>
      <Container>
        {renderText()}
        <Button onClick={onClick}>{playing ? '◼' : '►'}</Button>
      </Container>
    </Main>
  );
};

export default App;
