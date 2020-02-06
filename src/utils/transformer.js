import { Scale, Tonal } from '@tonaljs/modules';

const root = 'E4';
const scale = 'minor';
const scaleNotes = Scale.scale(`${root} ${scale}`).notes;
const scaleSize = scaleNotes.length;

// charset is is the unique characters in the string
const simpleTransform = text => {
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
    if (char === ' ') return scaleNotes[0];

    // the first character is the root note
    if (i === 0) return Tonal.transpose(scaleNotes[0], '-8P');

    // the most frequent char is a highest root note

    const alphabetPos = isLetter(char) ? char.toLowerCase().charCodeAt(0) - 97 : 0;

    const noteIndex = alphabetPos % scaleSize;

    const note = scaleNotes[noteIndex];

    return note;
  });
};

const complexTransform = () => {};

export { simpleTransform as transform };
