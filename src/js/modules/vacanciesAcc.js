import gsap from 'gsap'

export const vacanciesAcc = () => {
  ///////////////////////////
  // take 1
  // const menus = gsap.utils.toArray('.vacancies__item--header')
  // let openMenu
  // menus.forEach((menu) => {
  //   let box = menu.parentNode.querySelector('.vacancies__item--body'),
  //     isOpen = false
  //   menu.open = () => {
  //     if (!isOpen) {
  //       isOpen = true
  //       openMenu && openMenu.close()
  //       openMenu = menu
  //       gsap.to(box, {
  //         height: 'auto',
  //         duration: 0.5,
  //         ease: 'power1.inOut',
  //         overwrite: true,
  //       })
  //     }
  //   }
  //   menu.close = () => {
  //     if (isOpen) {
  //       isOpen = false
  //       openMenu = null
  //       gsap.to(box, {
  //         height: 0,
  //         duration: 0.5,
  //         ease: 'power1.inOut',
  //         overwrite: true,
  //       })
  //     }
  //   }
  //   menu.addEventListener('click', () => (isOpen ? menu.close() : menu.open()))
  // })
  // end take 1
  ////////////////////////
  // my take
  const accItems = document.querySelectorAll('.vacancies__acc--item')
  accItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('open')
      const body = item.querySelector('.vacancies__item--body')
      if (item.classList.contains('open')) {
        body.style.maxHeight = body.scrollHeight + 'px'
        body.style.opacity = 1
      } else {
        body.style.maxHeight = 0
        body.style.opacity = 0
      }
    })
  })
}
