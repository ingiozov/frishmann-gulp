import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger)

export const gsapAcc = () => {
  const caseItems = document.querySelectorAll('.app__case--acc-item')

  // Header logic with IntersectionObserver

  const accHeading = document.querySelector('.acc__header')
  const pin2 = document.querySelector('#pin2')
  const pin3 = document.querySelector('#pin3')
  const pin4 = document.querySelector('#pin4')
  const pin5 = document.querySelector('#pin5')

  const obsOptions = {
    root: document.querySelector('.app__case--acc'),
    rootMargin: '0px',
    threshold: 0,
  }

  const obsCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === 'pin2') {
          accHeading.innerHTML = 'о проекте'
          accHeading.style.zIndex = 100
        }
        if (entry.target.id === 'pin3') {
          accHeading.innerHTML = 'проделанные работы'
        }
        if (entry.target.id === 'pin4') {
          accHeading.innerHTML = 'результаты'
        }
        if (entry.target.id === 'pin5') {
          accHeading.innerHTML = 'галерея'
        }
      } else {
        if (entry.target.id === 'pin2') {
          accHeading.innerHTML = 'клиент'
        }
        if (entry.target.id === 'pin3') {
          accHeading.innerHTML = 'о проекте'
        }
        if (entry.target.id === 'pin4') {
          accHeading.innerHTML = 'проделанные работы'
        }
        if (entry.target.id === 'pin5') {
          accHeading.innerHTML = 'результаты'
        }
      }
    })
  }

  const observer = new IntersectionObserver(obsCallback, obsOptions)

  observer.observe(pin2)
  observer.observe(pin3)
  observer.observe(pin4)
  observer.observe(pin5)

  // GSAP logic

  gsap.set('#pin5', { top: 'calc(100vh - 30px - 60px)' })
  gsap.set('#pin4', { top: 'calc(100vh - 60px - 60px)' })
  gsap.set('#pin3', { top: 'calc(100vh - 90px - 60px)' })
  gsap.set('#pin2', { top: 'calc(100vh - 120px - 60px)' })
  // gsap.set('#pin1', { top: 'calc(100vh - 150px - 60px)' })

  const tl = gsap.timeline({
    defaults: {
      ease: 'power2.inOut',
    },
    scrollTrigger: {
      trigger: '.app__case--acc',
      pin: true,
      scrub: 0.1,
      start: '-60px top',
      end: '+=12000px',
    },
  })

  // tl.to('#pin1', { opacity: 0, ease: 'none' })

  // #pin2
  tl.to('#pin2', {
    y: () => '-' + document.querySelector('#pin2').scrollHeight + 'px',
    duration: 2,
  })

  // #pin3
  tl.to(
    '#pin3',
    {
      y: () => '-' + document.querySelector('#pin3').scrollHeight + 'px',
      duration: 2,
    },
    '-=0.5'
  )

  // #pin4
  tl.to(
    '#pin4',
    {
      y: () => '-' + document.querySelector('#pin4').scrollHeight + 'px',
      duration: 2,
    },
    '-=0.5'
  )

  // #pin5
  tl.to(
    '#pin5',
    {
      y: () => '-' + document.querySelector('#pin5').scrollHeight + 'px',
      duration: 2,
    },
    '-=0.5'
  )
}
