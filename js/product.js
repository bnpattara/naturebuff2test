document.addEventListener("DOMContentLoaded", () => {
  // Product gallery
  initProductGallery()

  // Product tabs
  initProductTabs()

  // Quantity selector
  initQuantitySelector()

  // Option buttons
  initOptionButtons()

  // Image zoom modal
  initImageZoomModal()
})

function initProductGallery() {
  const mainImage = document.getElementById("main-product-image")
  const thumbnailButtons = document.querySelectorAll(".thumbnail-button")
  const prevButton = document.querySelector(".gallery-prev-button")
  const nextButton = document.querySelector(".gallery-next-button")

  if (!mainImage || !thumbnailButtons.length) return

  let currentIndex = 0

  // Set up thumbnail click events
  thumbnailButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const imageSrc = button.getAttribute("data-image")
      const imageAlt = button.getAttribute("data-alt")

      mainImage.src = imageSrc
      mainImage.alt = imageAlt

      // Update active thumbnail
      thumbnailButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      currentIndex = index
    })
  })

  // Set up prev/next buttons
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + thumbnailButtons.length) % thumbnailButtons.length
      thumbnailButtons[currentIndex].click()
    })
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % thumbnailButtons.length
      thumbnailButtons[currentIndex].click()
    })
  }
}

function initProductTabs() {
  const tabButtons = document.querySelectorAll(".tab-button")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab")

      // Remove active class from all buttons and tabs
      document.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove("active")
      })

      document.querySelectorAll(".tab-content").forEach((tab) => {
        tab.classList.remove("active")
      })

      // Add active class to clicked button and corresponding tab
      button.classList.add("active")
      document.getElementById(`${tabId}-tab`).classList.add("active")
    })
  })
}

function initQuantitySelector() {
  const decreaseButton = document.querySelector(".quantity-button.decrease")
  const increaseButton = document.querySelector(".quantity-button.increase")
  const quantityInput = document.querySelector(".quantity-input")

  if (!decreaseButton || !increaseButton || !quantityInput) return

  decreaseButton.addEventListener("click", () => {
    const currentValue = Number.parseInt(quantityInput.value)
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1
    }
  })

  increaseButton.addEventListener("click", () => {
    const currentValue = Number.parseInt(quantityInput.value)
    quantityInput.value = currentValue + 1
  })
}

function initOptionButtons() {
  const optionButtons = document.querySelectorAll(".option-button")

  optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Find all buttons in the same group
      const parent = button.parentElement
      const siblings = parent.querySelectorAll(".option-button")

      // Remove selected class from all buttons in group
      siblings.forEach((btn) => {
        btn.classList.remove("selected")
      })

      // Add selected class to clicked button
      button.classList.add("selected")
    })
  })
}

function initImageZoomModal() {
  const zoomButton = document.querySelector(".gallery-zoom-button")
  const modal = document.getElementById("image-zoom-modal")
  const modalClose = document.querySelector(".modal-close")
  const zoomedImage = document.getElementById("zoomed-image")
  const mainImage = document.getElementById("main-product-image")

  if (!zoomButton || !modal || !modalClose || !zoomedImage || !mainImage) return

  zoomButton.addEventListener("click", () => {
    zoomedImage.src = mainImage.src
    zoomedImage.alt = mainImage.alt
    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active")
    document.body.style.overflow = ""
  })

  // Close modal when clicking outside the content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active")
      document.body.style.overflow = ""
    }
  })
}

