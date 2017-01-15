[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# Buffer for LinkedIn Images

> A micro-service for Buffer to handle LinkedIn Images natively

## Current Status

- [x] Automate posting of image using headless browser
- [x] Create scenario for both old and new LinkedIn interface
- [ ] Detect which scenario to run based on account UI version
- [ ] Setup as a micro-service with own queue
- [ ] Integrate with Buffer scheduled posts

## Usage

This is a work in progress. But you can still try.

    $ git clone
    $ npm install
    $ LINKEDIN_EMAIL=[...] LINKEDIN_PASSWORD=[...] node index.js

## Demo

![BUffer for LinkedIn Images Demonstration](https://s27.postimg.org/qprznhv83/ezgif_com_crop.gif)
