const { document, dom } = require('./helpers')
const { expect } = require('chai')

// Import your main script so event listeners register in this simulated DOM environment
require('../index.js')

describe('Handling Events with JavaScript', () => {
  let changeColorButton
  let resetColorButton
  let textInput
  let keyPressDisplay
  let textInputDisplay

  before(() => {
    changeColorButton = document.getElementById('changeColorButton')
    resetColorButton = document.getElementById('resetColorButton')
    textInput = document.getElementById('textInput')
    keyPressDisplay = document.getElementById('keyPressDisplay')
    textInputDisplay = document.getElementById('textInputDisplay')
  })

  it('should select the changeColorButton element', () => {
    expect(changeColorButton).to.not.be.null
  })

  it('should select the resetColorButton element', () => {
    expect(resetColorButton).to.not.be.null
  })

  it('should select the textInput element', () => {
    expect(textInput).to.not.be.null
  })

  it('should display the key pressed by the user', () => {
    // Simulate key press event
    const event = new dom.window.KeyboardEvent('keydown', { key: 'A' })
    document.dispatchEvent(event)

    expect(keyPressDisplay.textContent).to.include('A')
  })

  it('should display user input in real-time', () => {
    // Simulate input event
    textInput.value = 'Hello'
    const event = new dom.window.Event('input', { bubbles: true })
    textInput.dispatchEvent(event)

    expect(textInputDisplay.textContent).to.include('Hello')
  })
})
