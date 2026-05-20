/** Generative ambient placeholder when no MP3 is present. */

let ctx: AudioContext | null = null
let nodes: { osc: OscillatorNode; gain: GainNode }[] = []
let masterGain: GainNode | null = null
let running = false

function getContext(): AudioContext {
  if (!ctx) ctx = new AudioContext()
  return ctx
}

export function startAmbient(volume = 0.12): void {
  const audio = getContext()
  if (running) {
    if (audio.state === 'suspended') void audio.resume()
    if (masterGain) masterGain.gain.setTargetAtTime(volume, audio.currentTime, 0.5)
    return
  }

  masterGain = audio.createGain()
  masterGain.gain.value = 0
  masterGain.connect(audio.destination)

  const freqs = [110, 164.81, 220, 329.63]
  nodes = freqs.map((freq) => {
    const osc = audio.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = freq
    const gain = audio.createGain()
    gain.gain.value = 0.018
    osc.connect(gain)
    gain.connect(masterGain!)
    osc.start()
    return { osc, gain }
  })

  masterGain.gain.setTargetAtTime(volume, audio.currentTime, 1.2)
  running = true
}

export function stopAmbient(): void {
  if (!ctx || !masterGain) return
  const audio = ctx
  masterGain.gain.setTargetAtTime(0, audio.currentTime, 0.8)
  setTimeout(() => {
    nodes.forEach(({ osc }) => {
      try {
        osc.stop()
      } catch {
        /* already stopped */
      }
    })
    nodes = []
    running = false
    void audio.close()
    ctx = null
    masterGain = null
  }, 900)
}

export function playChime(muted: boolean): void {
  if (muted) return
  const audio = getContext()
  if (audio.state === 'suspended') void audio.resume()

  const osc = audio.createOscillator()
  const gain = audio.createGain()
  osc.type = 'sine'
  osc.frequency.value = 392
  gain.gain.value = 0.0001
  osc.connect(gain)
  gain.connect(audio.destination)
  osc.start()
  gain.gain.exponentialRampToValueAtTime(0.04, audio.currentTime + 0.02)
  gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.35)
  osc.stop(audio.currentTime + 0.4)
}

/** Gentle brand chime for LifeWare logo */
export function playLogo(muted: boolean): void {
  if (muted) return
  const audio = getContext()
  if (audio.state === 'suspended') void audio.resume()

  const t = audio.currentTime
  const notes = [261.63, 329.63]

  notes.forEach((freq, i) => {
    const osc = audio.createOscillator()
    const gain = audio.createGain()
    osc.type = 'triangle'
    osc.frequency.value = freq
    const start = t + i * 0.07
    gain.gain.setValueAtTime(0.0001, start)
    gain.gain.exponentialRampToValueAtTime(0.07, start + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.45)
    osc.connect(gain)
    gain.connect(audio.destination)
    osc.start(start)
    osc.stop(start + 0.5)
  })
}

/** Soft bubble-pop: noise burst + descending tone */
export function playPop(muted: boolean): void {
  if (muted) return
  const audio = getContext()
  if (audio.state === 'suspended') void audio.resume()

  const t = audio.currentTime
  const duration = 0.14

  const bufferSize = Math.floor(audio.sampleRate * duration)
  const buffer = audio.createBuffer(1, bufferSize, audio.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < bufferSize; i++) {
    const decay = 1 - i / bufferSize
    data[i] = (Math.random() * 2 - 1) * decay * decay
  }

  const noise = audio.createBufferSource()
  noise.buffer = buffer

  const filter = audio.createBiquadFilter()
  filter.type = 'bandpass'
  filter.frequency.setValueAtTime(900, t)
  filter.frequency.exponentialRampToValueAtTime(280, t + duration)
  filter.Q.value = 0.8

  const noiseGain = audio.createGain()
  noiseGain.gain.setValueAtTime(0.0001, t)
  noiseGain.gain.exponentialRampToValueAtTime(0.22, t + 0.008)
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, t + duration)

  noise.connect(filter)
  filter.connect(noiseGain)
  noiseGain.connect(audio.destination)
  noise.start(t)
  noise.stop(t + duration)

  const osc = audio.createOscillator()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(520, t)
  osc.frequency.exponentialRampToValueAtTime(140, t + 0.12)

  const oscGain = audio.createGain()
  oscGain.gain.setValueAtTime(0.0001, t)
  oscGain.gain.exponentialRampToValueAtTime(0.1, t + 0.006)
  oscGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.16)

  osc.connect(oscGain)
  oscGain.connect(audio.destination)
  osc.start(t)
  osc.stop(t + 0.18)
}
