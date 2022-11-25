import gsap from 'gsap'

export const headerImg = () => {
  const section = document.querySelector('.app__header')
  // const nextSection = document.querySelector('#jobs')
  const img = document.querySelector('.app__header--img')
  // let isIn
  // section.addEventListener('mouseover', () => {
  //   isIn = true
  // })
  // section.addEventListener('mouseout', () => {
  //   isIn = false
  // })

  gsap.set(img, { xPercent: -50, yPercent: -50 })

  // // observer
  // const obsOptions = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 1.0,
  // }
  // const obsCb = (entries, observer) => {
  //   entries.forEach((entry) => {
  //     // console.log(entry)
  //   })
  // }
  // const observer = new IntersectionObserver(obsCb, obsOptions)
  // observer.observe(img)
  // // end observer

  // Image move!
  window.addEventListener('mousemove', (e) => {
    if (
      document.documentElement.scrollTop <
      section.getBoundingClientRect().height
    ) {
      gsap.to(img, { x: e.clientX, y: e.clientY, duration: 1 })
    } else {
      gsap.to(img, {
        x: section.getBoundingClientRect().width / 2,
        // y: section.getBoundingClientRect().height / 2,
        y: -800,
        duration: 1,
      })
    }
  })
  /////////////////////////////////
  /////////////////////////////////
  // Noel Delgado's Directional hover
  // const nodes = [].slice.call(document.querySelectorAll('.boxes'), 0)
  // const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' }
  // const classNames = ['in', 'out']
  //   .map((p) => Object.values(directions).map((d) => `${p}-${d}`))
  //   .reduce((a, b) => a.concat(b))

  // const getDirectionKey = (ev, node) => {
  //   const { width, height, top, left } = node.getBoundingClientRect()
  //   const l = ev.pageX - (left + window.pageXOffset)
  //   const t = ev.pageY - (top + window.pageYOffset)
  //   const x = l - (width / 2) * (width > height ? height / width : 1)
  //   const y = t - (height / 2) * (height > width ? width / height : 1)
  //   return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
  // }

  // class Item {
  //   constructor(element) {
  //     this.element = element
  //     this.element.addEventListener('mouseover', (ev) => this.update(ev, 'in'))
  //     this.element.addEventListener('mouseout', (ev) => this.update(ev, 'out'))
  //   }

  //   update(ev, prefix) {
  //     // this.element.classList.remove(...classNames)
  //     // this.element.classList.add(
  //     //   `${prefix}-${directions[getDirectionKey(ev, this.element)]}`
  //     // )
  //     img.classList.remove(...classNames)
  //     img.classList.add(
  //       `${prefix}-${directions[getDirectionKey(ev, this.element)]}`
  //     )
  //   }
  // }

  // nodes.forEach((node) => new Item(node))

  /////////////////////////////////
  /////////////////////////////////
  // My take
  const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' }
  const getDirectionKey = (ev, node) => {
    const { width, height, top, left } = node.getBoundingClientRect()
    const l = ev.pageX - (left + window.pageXOffset)
    const t = ev.pageY - (top + window.pageYOffset)
    const x = l - (width / 2) * (width > height ? height / width : 1)
    const y = t - (height / 2) * (height > width ? width / height : 1)
    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
  }

  const imgSideFront = document.querySelector('.app__header--img-side--front')
  const imgSideBack = document.querySelector('.app__header--img-side--back')
  const hoverSection1 = document.querySelector('.hover__grid--1')
  const hoverSection2 = document.querySelector('.hover__grid--2')
  const hoverSection3 = document.querySelector('.hover__grid--3')
  const hoverSection4 = document.querySelector('.hover__grid--4')
  const hoverSection5 = document.querySelector('.hover__grid--5')
  const hoverSection6 = document.querySelector('.hover__grid--6')
  const hoverSection7 = document.querySelector('.hover__grid--7')
  const hoverSection8 = document.querySelector('.hover__grid--8')

  // init
  gsap.set(imgSideBack, { rotateY: -180 })

  // hover section 1
  hoverSection1.addEventListener('mouseover', (e) => {
    let direction = directions[getDirectionKey(e, hoverSection1)]
    if (direction === 'right') {
      gsap.to(imgSideFront, { rotateY: 0, rotateX: 0, duration: 3 })
      gsap.to(imgSideBack, { rotateY: -180, rotateX: 0, duration: 3 })
    }
    if (direction === 'bottom') {
      gsap.set(imgSideFront, { rotateY: 0, rotateX: 0 })
      gsap.set(imgSideBack, { rotateY: -180, rotateX: 0 })
    }
  })
  hoverSection1.addEventListener('mouseout', (e) => {
    let direction = directions[getDirectionKey(e, hoverSection1)]
    if (direction === 'bottom') {
      // gsap.set(imgSideBack, { rotateX: 180 })
      gsap.set(imgSideFront, { rotateY: 0, rotateX: 0 })
      gsap.set(imgSideBack, { rotateY: 0, rotateX: 180 })

      imgSideBack.style.backgroundImage = `url('../img/bubble_5.png')`
    }
    if (direction === 'right') {
      gsap.set(imgSideBack, { rotateY: -180 })
      gsap.set(imgSideBack, { rotateX: 0 })
    }
  })

  // hover section 2
  hoverSection2.addEventListener('mouseover', (e) => {
    let direction = directions[getDirectionKey(e, hoverSection2)]
    if (direction === 'left') {
      // gsap.set(imgSideBack, { rotateX: 0 })
      gsap.to(imgSideFront, { rotateY: 180, duration: 3 })
      gsap.to(imgSideBack, { rotateY: 0, duration: 3 })
    }
    if (direction === 'right') {
      gsap.to(imgSideFront, { rotateY: 180, rotateX: 0, duration: 3 })
      gsap.to(imgSideBack, { rotateY: 0, rotateX: 0, duration: 3 })
    }
  })
  hoverSection2.addEventListener('mouseout', (e) => {
    let direction = directions[getDirectionKey(e, hoverSection2)]
    if (direction === 'right') {
      imgSideFront.style.backgroundImage = `url('../img/bubble_2.png')`
    }
    if (direction === 'left') {
      imgSideFront.style.backgroundImage = `url('../img/header-img.png')`
    }
  })

  // hover section 3
  hoverSection3.addEventListener('mouseover', (e) => {
    let direction = directions[getDirectionKey(e, hoverSection3)]
    if (direction === 'left') {
      gsap.to(imgSideFront, { rotateY: 360, duration: 3 })
      gsap.to(imgSideBack, { rotateY: 180, duration: 3 })
    }
  })
  hoverSection3.addEventListener('mouseout', (e) => {
    let direction = directions[getDirectionKey(e, hoverSection3)]
    if (direction === 'right') {
      imgSideBack.style.backgroundImage = `url('../img/bubble_3.png')`
    }
    if (direction === 'left') {
      imgSideBack.style.backgroundImage = `url('../img/bubble_1.png')`
    }
  })

  // hover section 4
  hoverSection4.addEventListener('mouseover', (e) => {
    let direction = directions[getDirectionKey(e, hoverSection4)]
    if (direction === 'left') {
      gsap.to(imgSideFront, { rotateY: 540, duration: 3 })
      gsap.to(imgSideBack, { rotateY: 360, duration: 3 })
    }
  })
  hoverSection4.addEventListener('mouseout', (e) => {
    let direction = directions[getDirectionKey(e, hoverSection4)]
    if (direction === 'left') {
      gsap.to(imgSideFront, { rotateY: 360, duration: 3 })
      gsap.to(imgSideBack, { rotateY: 180, duration: 3 })
    }
  })

  // hover section 5
  hoverSection5.addEventListener('mouseover', (e) => {
    let direction = directions[getDirectionKey(e, hoverSection5)]
    if (direction === 'top') {
      gsap.to(imgSideFront, { rotateX: -180, rotateY: 0, duration: 3 })
      gsap.to(imgSideBack, { rotateX: 0, rotateY: 0, duration: 3 })
    }
  })
  hoverSection5.addEventListener('mouseout', (e) => {
    let direction = directions[getDirectionKey(e, hoverSection5)]
    if (direction === 'top') {
      gsap.to(imgSideFront, { rotateX: 0, rotateY: 0, duration: 3 })
      gsap.to(imgSideBack, { rotateX: 180, rotateY: 0, duration: 3 })
    }
  })

  // hover section 6
  // hover section 7
  // hover section 8

  /////////////////////////////////
  /////////////////////////////////

  /////////////////////////////////
  /////////////////////////////////
  // // John Stewards's Directional hover
  // //Detect Closest Edge
  // function closestEdge(x, y, w, h) {
  //   var topEdgeDist = distMetric(x, y, w / 2, 0)
  //   var bottomEdgeDist = distMetric(x, y, w / 2, h)
  //   var leftEdgeDist = distMetric(x, y, 0, h / 2)
  //   var rightEdgeDist = distMetric(x, y, w, h / 2)
  //   var min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist)
  //   switch (min) {
  //     case leftEdgeDist:
  //       return 'left'
  //     case rightEdgeDist:
  //       return 'right'
  //     case topEdgeDist:
  //       return 'top'
  //     case bottomEdgeDist:
  //       return 'bottom'
  //   }
  // }
  // function distMetric(x, y, x2, y2) {
  //   var xDiff = x - x2
  //   var yDiff = y - y2
  //   return xDiff * xDiff + yDiff * yDiff
  // }
  // var boxes = document.querySelectorAll('.boxes')
  // for (var i = 0; i < boxes.length; i++) {
  //   boxes[i].onmouseenter = function (e) {
  //     var x = e.pageX - this.offsetLeft
  //     var y = e.pageY - this.offsetTop
  //     var edge = closestEdge(x, y, this.clientWidth, this.clientHeight)
  //     switch (edge) {
  //       case 'left':
  //         //tween overlay from the left
  //         console.log('mouseenter left')
  //         break
  //       case 'right':
  //         console.log('mouseenter right')
  //         break
  //       case 'top':
  //         console.log('mouseenter top')
  //         break
  //       case 'bottom':
  //         console.log('mouseenter bottom')
  //         break
  //     }
  //   }
  //   boxes[i].onmouseleave = function (e) {
  //     var x = e.pageX - this.offsetLeft
  //     var y = e.pageY - this.offsetTop
  //     var edge = closestEdge(x, y, this.clientWidth, this.clientHeight)
  //     switch (edge) {
  //       case 'left':
  //         console.log('mouseleave left')
  //         break
  //       case 'right':
  //         console.log('mouseleave right')
  //         break
  //       case 'top':
  //         console.log('mouseleave top')
  //         break
  //       case 'bottom':
  //         console.log('mouseleave bottom')
  //         break
  //     }
  //   }
  // }
  /////////////////////////////////
  /////////////////////////////////
  /////////////////////////////////
  /////////////////////////////////
  // // image rotate
  // const imgSideFront = document.querySelector('.app__header--img-side--front')
  // const imgSideBack = document.querySelector('.app__header--img-side--back')
  // const hoverSection1 = document.querySelector('.hover__grid--1')
  // const hoverSection2 = document.querySelector('.hover__grid--2')
  // const hoverSection3 = document.querySelector('.hover__grid--3')
  // const hoverSection4 = document.querySelector('.hover__grid--4')
  // hoverSection1.addEventListener('mouseover', () => {
  //   gsap.to(imgSideFront, { rotateY: 0, duration: 0.31 })
  //   gsap.to(imgSideBack, { rotateY: -180, duration: 0.31 })
  // })
  // hoverSection2.addEventListener('mouseover', () => {
  //   gsap.to(imgSideFront, { rotateY: 180, duration: 0.31 })
  //   gsap.to(imgSideBack, { rotateY: 0, duration: 0.31 })
  //   // img.classList.remove('third')
  // })
  // hoverSection3.addEventListener('mouseover', () => {
  //   gsap.to(imgSideFront, { rotateY: 360, duration: 0.31 })
  //   gsap.to(imgSideBack, { rotateY: 180, duration: 0.31 })
  //   // img.classList.add('third')
  // })
  // hoverSection4.addEventListener('mouseover', () => {
  //   gsap.to(imgSideFront, { rotateY: 540, duration: 0.31 })
  //   gsap.to(imgSideBack, { rotateY: 360, duration: 0.31 })
  // })
  // vertical
  // upperSection.addEventListener('mouseover', () => {
  //   gsap.to(imgSideFront, { rotateX: 0, duration: 0.31 })
  //   gsap.to(imgSideBack, { rotateX: -180, duration: 0.31 })
  // })
  // upperSection.addEventListener('mouseover', () => {
  //   gsap.to(imgSideFront, { rotateX: 180, duration: 0.31 })
  //   gsap.to(imgSideBack, { rotateX: 0, duration: 0.31 })
  // })
  /////////////////////////////////
  /////////////////////////////////
}
