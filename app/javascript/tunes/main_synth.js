import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const synthSettings = {
  volume: 0.8,
  detune: 0,
  portamento: 0,
  envelope: {
    attack: 0.05,
    attackCurve: 'bounce',
    decay: 3,
    decayCurve: 'exponential',
    sustain: 0,
    release: 1,
    releaseCurve: 'linear'
  },
  oscillator: {
    type: 'amtriangle',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0
  }
}

const freeverbSettings = {
  wet: 0.55,
  roomSize: 0.23,
  dampening: 40
}

const channelSettings = {
  volume: -14,
  pan: 0,
  mute: false,
  solo: false
}

const synthNode = new Tone.Synth(synthSettings)
const freeverbNode = new Tone.Freeverb(freeverbSettings)
const channelNode = new Tone.Channel(channelSettings).toDestination()

synthNode.chain(freeverbNode, channelNode)

const v = 1

// prettier-ignore
const partSettings = {
  scale: [
    'A1','C1','D1','E1', 'G1',
    'A2','C2','D2','E2','G2',
    'A3','C3','D3','E3','G3',
    'A4','C4','D4','E4','G4',
    'A5','C5','D5','E5','G5',
    'A6','C6','D6','E6','G6',
    'A7','C7','D7','E7','G7',
    'A8','C8','D8','E8','G8'
  ],
  sequence: [
    {
      time: '0:0:0',
      noteName: 'G3',
      duration: '8n',
      velocity: v
    },
    {
      time: '0:1:0',
      noteName: 'E3',
      duration: '8n',
      velocity: v
    },
    {
      time: '0:2:0',
      noteName: 'G3',
      duration: '8n',
      velocity: v
    },
    {
      time: '1:0:0',
      noteName: 'E3',
      duration: '4n',
      velocity: v
    },
    {
      time: '1:2:0',
      noteName: 'E3',
      duration: '4n',
      velocity: v
    }
  ]
}

const partNode = new Tone.Part(function (time, note) {
  synthNode.triggerAttackRelease(
    note.noteName,
    note.duration,
    time,
    note.velocity
  )
}, [])

partNode.loopEnd = '2m'
partNode.loop = true

const instrument = [
  {
    id: generateUniqId(),
    name: 'Main Synth',
    type: 'ToneSynth',
    node: synthNode,
    settings: synthSettings
  },
  {
    id: generateUniqId(),
    name: 'Freeverb',
    type: 'FreeverbEffect',
    node: freeverbNode,
    settings: freeverbSettings
  },
  {
    id: generateUniqId(),
    name: 'Channel',
    type: 'Channel',
    node: channelNode,
    settings: channelSettings
  },
  {
    id: generateUniqId(),
    name: 'Sequencer',
    type: 'Sequencer',
    node: partNode,
    settings: partSettings
  }
]

export { instrument }
