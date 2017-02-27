'use strict'

const baseUrl = 'https://d3iw72m71ie81c.cloudfront.net'

const genders = ['male', 'female']
const randomGender = genders[Math.floor(Math.random() * 2)]
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

exports.random = `${baseUrl}/${randomGender}-${randomNumber(1, 239)}.jpg`
exports.male = `${baseUrl}/male-${randomNumber(1, 123)}.jpg`
exports.female = `${baseUrl}/female-${randomNumber(1, 116)}.jpg`
