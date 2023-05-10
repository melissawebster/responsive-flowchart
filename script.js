

function showMoreLess(event, button) {
  const container = button.parentNode
  const addText = container.querySelector('.hidden-text')
  if (addText.classList == 'hidden-text') {
    button.innerHTML = 'Read less'
    addText.classList.toggle('show')
  } else {
    button.innerHTML = 'Read more...'
    addText.classList.toggle('show')
  }
}

