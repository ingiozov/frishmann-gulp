import gsap from 'gsap'

export const progressBar = () => {
  const jobsSection = document.querySelector('#jobs')
  const jobsProgress = document.querySelector('.progress-bar-jobs')

  const servicesSection = document.querySelector('#services')
  const servicesProgress = document.querySelector('.progress-bar-services')

  const companySection = document.querySelector('#company')
  const companyProgress = document.querySelector('.progress-bar-company')

  const contactsSection = document.querySelector('#contacts')
  const contactsProgress = document.querySelector('.progress-bar-contacts')

  gsap.to(jobsProgress, {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      markers: true,
      trigger: jobsSection,
      // start: 'top top',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
    },
  })

  gsap.to(servicesProgress, {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      markers: true,
      trigger: servicesSection,
      // start: 'top top',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
    },
  })

  gsap.to(companyProgress, {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      markers: true,
      trigger: companySection,
      // start: 'top top',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
    },
  })

  gsap.to(contactsProgress, {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      markers: true,
      trigger: contactsSection,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
    },
  })
}
