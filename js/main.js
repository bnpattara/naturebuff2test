document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById('current-year')?.textContent = new Date().getFullYear()

  // Load header and footer on other pages
  if (document.getElementById("site-header")) {
    fetch("/header.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("site-header").innerHTML = html
        initMobileMenu()
      })
      .catch((error) => {
        console.error("Error loading header:", error)
      })
  }

  if (document.getElementById("site-footer")) {
    fetch("/footer.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("site-footer").innerHTML = html
        // Set current year in footer after loading
        const yearElement = document.getElementById("current-year")
        if (yearElement) {
          yearElement.textContent = new Date().getFullYear()
        }
      })
      .catch((error) => {
        console.error("Error loading footer:", error)
      })
  }

  if (document.getElementById("mobile-menu")) {
    fetch("/mobile-menu.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("mobile-menu").innerHTML = html
        initMobileMenu()
      })
      .catch((error) => {
        console.error("Error loading mobile menu:", error)
      })
  }

  // Initialize mobile menu if we're on the homepage
  initMobileMenu()

  // Hero carousel functionality
  initHeroCarousel()
})

function initMobileMenu() {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenuClose = document.querySelector(".mobile-menu-close")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active")
      document.body.style.overflow = "hidden"
    })
  }

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    })
  }
}

function initHeroCarousel() {
  const carousel = document.querySelector(".hero-carousel")
  if (!carousel) return

  const slides = carousel.querySelectorAll(".hero-slide")
  const dots = carousel.querySelectorAll(".carousel-dot")
  const prevButton = carousel.querySelector(".carousel-arrow.prev")
  const nextButton = carousel.querySelector(".carousel-arrow.next")

  let currentIndex = 0
  let interval
  const intervalTime = 5000

  function goToSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach((slide) => slide.classList.remove("active"))
    dots.forEach((dot) => dot.classList.remove("active"))

    // Add active class to current slide and dot
    slides[index].classList.add("active")
    dots[index].classList.add("active")

    currentIndex = index
  }

  function nextSlide() {
    goToSlide((currentIndex + 1) % slides.length)
  }

  function prevSlide() {
    goToSlide((currentIndex - 1 + slides.length) % slides.length)
  }

  // Set up click events for dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index)
      resetInterval()
    })
  })

  // Set up click events for prev/next buttons
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      prevSlide()
      resetInterval()
    })
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      nextSlide()
      resetInterval()
    })
  }

  // Start automatic rotation
  function startInterval() {
    interval = setInterval(nextSlide, intervalTime)
  }

  function resetInterval() {
    clearInterval(interval)
    startInterval()
  }

  startInterval()
}

