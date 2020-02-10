import { useState } from 'react';
import { Scale, Tonal } from '@tonaljs/modules';

export const useTransformer = () => {
  const [root, setRoot] = useState('E');
  const [pitch, setPitch] = useState('3');
  const [scale, setScale] = useState('major pentatonic');

  // TODO: consoantes sao curtas, vogais sao longas! :S

  // charset is is the unique characters in the string
  const simpleTransform = text => {
    const scaleNotes = Scale.scale(`${root}${pitch} ${scale}`).notes;
    const scaleSize = scaleNotes.length;
    const uniqueChars = {};

    [...text].forEach(char => {
      if (char in uniqueChars) uniqueChars[char]++;
      else uniqueChars[char] = 1;
    });

    // console.log(uniqueChars);

    return [...text].map((char, i, array) => {
      const isLetter = letter =>
        char.toLowerCase().charCodeAt(0) >= 97 && char.toLowerCase().charCodeAt(0) <= 122;

      // rest
      // if (char === ' ') return null;
      if (i === 0) return scaleNotes[0];

      // the first character is the root note
      if (char === ' ' || char === '.') return Tonal.transpose(scaleNotes[0], '-8P');

      if (char === ',') return Tonal.transpose(scaleNotes[0], '5P');

      // the most frequent char is a highest root note

      const alphabetPos = isLetter(char) ? char.toLowerCase().charCodeAt(0) - 97 : 0;

      const noteIndex = alphabetPos % scaleSize;

      const note = scaleNotes[noteIndex];

      return note;
    });
  };

  const complexTransform = () => {};

  return [root, setRoot, pitch, setPitch, scale, setScale, simpleTransform];
};
