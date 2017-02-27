'use strict'

import test from 'ava'
import faceit from './..'

test(t => {
  t.truthy(faceit.male)
  t.truthy(faceit.female)
  t.truthy(faceit.random)
})
