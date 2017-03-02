'use strict'

const isReachable = require('is-reachable')

const verifyUrl = url => {
  return new Promise((resolve, reject) => {
    isReachable(url)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

module.exports = verifyUrl
