# timerjs
Precision Timer for JavaScript projects

## Install
```bash
yarn add @ratiofu/timerjs
```

## Use
```javascript
import Timer from '@ratiofu/timerjs'

const timer = new Timer()
// some stuff here
console.log('with pretend-accuracy decimals', timer.µs)
console.log('rounded', timer.µsec)
```
