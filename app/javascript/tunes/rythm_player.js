import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const playerSettings = {
  url: 'https://tonejs.github.io/audio/impulse-responses/filter-rhythm1.mp3',
  mute: true,
  volume: -1,
  autostart: true,
  loop: true
}

const player = new Tone.Player(playerSettings)
player.chain(Tone.Destination)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Rythm Sound',
    type: 'Player',
    node: player,
    settings: playerSettings
  }
]

export { instrument }
