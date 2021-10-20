import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const playerSettings = {
  url: 'https://tonejs.github.io/audio/impulse-responses/cosmic-ping-long.mp3',
  mute: true,
  volume: 0,
  autostart: true,
  loop: true,
  loopStart: 2,
  loopEnd: 3.6
}

// ambient wow!
// loopStart: 1,
// loopEnd: 8,
// playbackRate: 0.4

// ambient wow!
// loopStart: 0.7,
// loopEnd: 2,
// playbackRate: 0.4

// slow and relax
// loopStart: 0.7,
// loopEnd: 1,
// playbackRate: 0.1

const player = new Tone.Player(playerSettings)
player.chain(Tone.Destination)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Cosmic Sound Day',
    type: 'Player',
    node: player,
    settings: playerSettings
  }
]

export { instrument }
