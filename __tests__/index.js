'use strict'

import test from 'ava'
import faceit from './..'

test(t => {
  t.truthy(faceit.male())
  t.truthy(faceit.female())
  t.truthy(faceit.random())
  t.not(faceit.male(), faceit.male())
  t.not(faceit.female(), faceit.female())
  t.not(faceit.random(), faceit.random())
})
