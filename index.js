// @flow
'use strict'

var fs = require('fs')
var path = require('path')
var winston = require('winston')
var cron = require('node-cron')
var Nightmare = require('nightmare')
require('nightmare-upload')(Nightmare)
var browser = Nightmare({ show: false })

console.log('Buffer for LinkedIn Images started.')

cron.schedule('42 23 * * *', function () {
  var pictureFilePath = getRandomPictureFilePath()
  winston.info('posting new picture: %s', pictureFilePath)
  postPicture(pictureFilePath)
})

console.log('Scheduled posting 1 image from ./queue every day at 11:42pm.')

function getRandomPictureFilePath () {
  var basePath = 'queue/'
  var files = fs.readdirSync(path.join(__dirname, basePath))
  var randomIndex = Math.floor(Math.random() * files.length)
  return path.join(__dirname, basePath, files[randomIndex])
}

function postPicture (filePath, login, password) {
  return browser
    .viewport(1200, 600)
    .goto('https://www.linkedin.com')
    .type('input[name="session_key"]', login || process.env.LINKEDIN_EMAIL)
    .type('input[name="session_password"]', password || process.env.LINKEDIN_PASSWORD)
    .click('#login-submit')
    .wait('input[name="file"]')
    .upload('input[name="file"]', filePath)
    .wait('.sharing-textarea')
    .type('.sharing-textarea', 'Image posted via Buffer for LinkedIn Images (experiment)')
    .wait('.sharing-share-box__post-button')
    .click('.sharing-share-box__post-button')
    .end(function () { return true })
    .then(function (result) {
      if (result === true) removePicture(filePath)
      else throw result
    })
    .catch(function (error) {
      winston.info(error)
    })
}

function removePicture (filePath) {
  fs.unlink(filePath)
}
