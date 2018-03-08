"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var haveGlobal = (typeof global !== 'undefined');
var np = haveGlobal && global.window && window.performance
    && performance.now && performance || false;
var nowMicro = global.process && process.hrtime
    ? function () {
        var hrTime = process.hrtime();
        return hrTime[0] * 1000000 + hrTime[1] / 1000;
    }
    // see https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
    : np
        ? function () { return np.now() * 1000; }
        : function () { return Date.now() * 1000; };
exports.nowMicro = nowMicro;
var Timer = /** @class */ (function () {
    function Timer() {
        this.reset();
    }
    Object.defineProperty(Timer.prototype, "\u00B5s", {
        get: function () {
            return nowMicro() - this._start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "\u00B5sec", {
        get: function () {
            return Math.round(this.µs);
        },
        enumerable: true,
        configurable: true
    });
    Timer.prototype.reset = function () {
        this._start = nowMicro();
    };
    return Timer;
}());
exports.default = Timer;
//# sourceMappingURL=index.js.map