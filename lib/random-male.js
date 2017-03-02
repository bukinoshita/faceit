'use strict'

const verifyUrl = require('./verify-url')
const randomNumber = require('./random-number')
const {baseUrl} = require('./../config.json')

const randomMale = () => {
  const url = `${baseUrl}/male-${randomNumber(1, 123)}.jpg`

  return verifyUrl(url)
    .then(res => {
      if (res) {
        return url
      }

      return randomMale()
    })
    .catch(err => err)
}

module.exports = randomMale
