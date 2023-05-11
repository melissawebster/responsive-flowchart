

function showMoreLess(event, button) {
  const container = button.parentNode
  const addText = container.querySelector('.hidden-text')
  if (addText.classList == 'hidden-text') {
    button.innerHTML = 'read less'
    addText.classList.toggle('show')
  } else {
    button.innerHTML = 'read more...'
    addText.classList.toggle('show')
  }
}

