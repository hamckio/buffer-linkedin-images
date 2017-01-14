[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# Buffer for LinkedIn Images

> A micro-service for Buffer to handle LinkedIn Images natively

## Status

- [x] Automate posting of image using headless browser
- [ ] Create scenario for both old and new LinkedIn interface
- [ ] Detect which scenario to run based on account UI version
- [ ] Integrate with Buffer scheduled posts

## Current Usage

This is a work in progress. But you can still try.

    $ git clone
    $ npm install
    $ LINKEDIN_EMAIL=[...] LINKEDIN_PASSWORD=[...] node index.js
    
Will only work for accounts that still has the normal/old LinkedIn UI.

## Author
[@hamckio](https://twitter.com/hamckio)
