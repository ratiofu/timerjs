import { assert } from 'chai'
import 'mocha'

import Timer from './index'

describe('Timer', function() {

  it('tracks the time and resets', function(done: () => void) {
    const timer = new Timer()

    setTimeout(
      () => {
        assert.isAbove(timer.µs, 5000)
        done()
      },
      10)
  })

})
