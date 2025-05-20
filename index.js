// Change background color button
const changeColorButton = document.getElementById('changeColorButton')
const resetColorButton = document.getElementById('resetColorButton')
const keyPressDisplay = document.getElementById('keyPressDisplay')
const textInput = document.getElementById('textInput')
const textInputDisplay = document.getElementById('textInputDisplay')

changeColorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = 'lightblue'
})

resetColorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = ''
})

document.addEventListener('keydown', (event) => {
  keyPressDisplay.textContent = `Key pressed: ${event.key}`
})

textInput.addEventListener('input', (event) => {
  textInputDisplay.textContent = event.target.value
})
