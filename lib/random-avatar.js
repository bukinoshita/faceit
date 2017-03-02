'use strict'

const verifyUrl = require('./verify-url')
const randomNumber = require('./random-number')
const {baseUrl} = require('./../config.json')

const genders = ['male', 'female']
const randomGender = genders[Math.floor(Math.random() * 2)]

const randomAvatar = () => {
  if (randomGender === 'male') {
    const url = `${baseUrl}/male-${randomNumber(1, 123)}.jpg`
    return verifyUrl(url)
      .then(res => {
        if (res) {
          return url
        }

        return randomAvatar()
      })
      .catch(err => err)
  }

  const url = `${baseUrl}/female-${randomNumber(1, 116)}.jpg`

  return verifyUrl(url)
    .then(res => {
      if (res) {
        return url
      }

      return randomAvatar()
    })
    .catch(err => err)
}

module.exports = randomAvatar
