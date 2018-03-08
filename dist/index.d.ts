declare const nowMicro: () => number;
export { nowMicro };
export default class Timer {
    constructor();
    readonly µs: number;
    readonly µsec: number;
    reset(): void;
    private _start;
}
