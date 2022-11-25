import gsap from 'gsap'

const allLinks = document.querySelectorAll('a')
const allImages = document.querySelectorAll('img')
const allBtns = document.querySelectorAll('button')

export const cursorCustom = () => {
  const customCursor = document.querySelector('.custom-cursor')

  const allLinks = document.querySelectorAll('a')
  const allImages = document.querySelectorAll('img')
  const allBtns = document.querySelectorAll('button')

  gsap.set(customCursor, { xPercent: -50, yPercent: -50 })
  window.addEventListener('mousemove', (e) => {
    gsap.to(customCursor, { x: e.clientX, y: e.clientY, duration: 0.5 })
  })

  allLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      customCursor.classList.add('active')
    })
    link.addEventListener('mouseleave', () => {
      customCursor.classList.remove('active')
    })
  })

  allImages.forEach((img) => {
    img.addEventListener('mouseenter', () => {
      customCursor.classList.add('active')
    })
    img.addEventListener('mouseleave', () => {
      customCursor.classList.remove('active')
    })
  })

  allBtns.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      customCursor.classList.add('active')
    })
    btn.addEventListener('mouseleave', () => {
      customCursor.classList.remove('active')
    })
  })
}
