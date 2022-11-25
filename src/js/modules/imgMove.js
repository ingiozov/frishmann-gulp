export const imageMove = () => {
  const div = document.querySelector('.hole')
  let isIn = false
  div.addEventListener('mouseover', function () {
    isIn = true
  })
  div.addEventListener('mouseout', function () {
    isIn = false
  })
  div.addEventListener('mousemove', function (e) {
    if (isIn) {
      div.style.setProperty('--x', e.pageX + div.scrollLeft + 'px')
      div.style.setProperty('--y', e.pageY + div.scrollTop - 90 + 'px')
    }
  })
}

// imageMove()
