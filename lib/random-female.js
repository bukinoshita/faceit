'use strict'

const verifyUrl = require('./verify-url')
const randomNumber = require('./random-number')
const {baseUrl} = require('./../config.json')

const randomFemale = () => {
  const url = `${baseUrl}/female-${randomNumber(1, 116)}.jpg`

  return verifyUrl(url)
    .then(res => {
      if (res) {
        return url
      }

      return randomFemale()
    })
    .catch(err => err)
}

module.exports = randomFemale
