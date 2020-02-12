import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';

import { useTransformer } from '../../utils/transformer';
import { play } from '../../utils/audioPlayer';

import { Main, AppContainer } from './styles';

import GlobalStyles from '../../globalStyles';

import Header from '../Header';
import Player from '../Player';
import Settings from '../Settings';

// TODO: play notes at the same time: (create chords)
// TODO: get words from url params
// TODO: save params in localstorage

// Hello world
// my name is
const App = () => {
  // const defaultContent = `Words dance.`;
  // const defaultText = `Pe, ur, pla pla.`;
  const defaultText = 'Words dance.';

  const [text, setText] = useState(defaultText);
  const [currentChar, setCurrentChar] = useState(null);
  const [playing, setPlaying] = useState(false);

  const [root, setRoot, pitch, setPitch, scale, setScale, simpleTransform] = useTransformer();

  const onRootChange = e => setRoot(e.target.value);
  const onPitchChange = e => setPitch(e.target.value);
  const onScaleChange = e => setScale(e.target.value);

  const onInputChange = e => setText(e.target.value);

  const onButtonClick = () => {
    if (!text) return;

    setPlaying(!playing);

    if (playing) {
      stopTone();
    } else {
      const transformedText = simpleTransform(text);
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

    setCurrentChar(0);
  };

  useEffect(() => {
    startTone();
  }, []);

  return (
    <Main>
      <GlobalStyles />
      <Header text="Sound of the Words." />

      <AppContainer>
        <Player
          playing={playing}
          currentChar={currentChar}
          text={text}
          onInputChange={onInputChange}
          onButtonClick={onButtonClick}
        />
        <Settings
          root={root}
          pitch={pitch}
          scale={scale}
          playing={playing}
          onRootChange={onRootChange}
          onPitchChange={onPitchChange}
          onScaleChange={onScaleChange}
        />
      </AppContainer>
    </Main>
  );
};

export default App;
