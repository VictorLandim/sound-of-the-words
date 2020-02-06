import * as Tone from 'tone';
import Synth from './synth';

const play = async (notes, setCurrent) => {
  const synth = Synth.toMaster();
  let pos = 0;

  // create a new sequence with the synth and notes
  const synthPart = new Tone.Sequence(
    (time, note) => {
      synth.triggerAttackRelease(note, '20hz', time);

      Tone.Draw.schedule(() => {
        setCurrent(pos++ % notes.length);
        // console.log(time);
        // console.log(synthPart.progress);
      }, time);
    },
    notes,
    '4n'
  );
  // Setup the synth to be ready to play on beat 1

  synthPart.humanize = true;

  synthPart.start();

  Tone.Transport.latencyHint = 'fastest';

  Tone.Transport.start('+0.1');
};

export { play };
