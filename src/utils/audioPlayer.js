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
        const nextNote = pos++ % notes.length;
        
        setCurrent(nextNote);
        // console.log(time);
        // console.log(synthPart.progress);
      }, time);
    },
    notes,
    '8n'
  );
  // Setup the synth to be ready to play on beat 1

  // synthPart.humanize = "32n";

  synthPart.start();

  Tone.Transport.latencyHint = 'fastest';

  Tone.Transport.start('+0.5');
};

export { play };
