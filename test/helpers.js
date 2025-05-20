const { JSDOM } = require('jsdom')
const fs = require('fs')
const path = require('path')

// Adjust path relative to this file
const htmlPath = path.resolve(__dirname, '../index.html')
const html = fs.readFileSync(htmlPath, 'utf8')

const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" })
const { window } = dom
const { document } = window

// Set globals for your app and tests
global.window = window
global.document = document
global.HTMLElement = window.HTMLElement
global.Event = window.Event
global.KeyboardEvent = window.KeyboardEvent

module.exports = { document, dom, window }
