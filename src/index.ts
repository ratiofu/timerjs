declare namespace global {
  const window: { performance: { now: () => number } }
  const process: { hrtime: number[] }
}

const haveGlobal = (typeof global !== 'undefined')
const now = haveGlobal && global.window && window.performance && performance.now || false
const nowMicro = global.process && process.hrtime
    ? () => {
      const hrTime = process.hrtime()
      return hrTime[0] * 1000000 + hrTime[1] / 1000
    }
    // see https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
    : now
      ? () => now() * 1000
      : () => Date.now() * 1000

export { nowMicro }

export default class Timer {

  constructor() {
    this.reset()
  }

  get µs(): number {
    return nowMicro() - this._start
  }

  get µsec(): number {
    return Math.round(this.µs)
  }

  public reset(): void {
    this._start = nowMicro()
  }

  private _start: number

}
