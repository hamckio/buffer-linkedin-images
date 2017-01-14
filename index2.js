'use strict';

var Nightmare = require('nightmare');
require('nightmare-upload')(Nightmare);
var browser = Nightmare({ show: true });

browser
  .viewport(1200, 600)
  .goto('https://www.linkedin.com')
  .type('input[name="session_key"]', process.env.LINKEDIN_EMAIL)
  .type('input[name="session_password"]', process.env.LINKEDIN_PASSWORD)
  .click('#login-submit')
  .wait('input[name="file"]')
  .upload('input[name="file"]', __dirname + '/buffer.png')
  .wait('.sharing-textarea')
  .type('.sharing-textarea', 'Image posted via Buffer for LinkedIn Images (experiment)')
  .wait('.sharing-share-box__post-button')
  .click('.sharing-share-box__post-button')
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
