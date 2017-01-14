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
  .wait('#share-actions .upload')
  .click('#share-actions .upload')
  .wait('textarea[name="shareText"]')
  .type('textarea[name="shareText"]', 'Image posted via Buffer for LinkedIn Images (experiment)')
  .upload('input[name="file_name"]', __dirname + '/buffer.png')
  .wait('.postmodule-submit:not([disabled])')
  .click('.postmodule-submit')
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
