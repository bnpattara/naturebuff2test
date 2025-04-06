document.addEventListener("DOMContentLoaded", () => {
  // Filter toggle for mobile
  const filterToggle = document.getElementById("filter-toggle")
  const shopSidebar = document.getElementById("shop-sidebar")

  if (filterToggle && shopSidebar) {
    filterToggle.addEventListener("click", () => {
      shopSidebar.classList.add("active")
      document.body.style.overflow = "hidden"

      // Add close button to sidebar
      if (!document.querySelector(".sidebar-close")) {
        const closeButton = document.createElement("button")
        closeButton.className = "sidebar-close"
        closeButton.innerHTML = `
          <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2"/>
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2"/>
          </svg>
        `
        closeButton.style.position = "absolute"
        closeButton.style.top = "1rem"
        closeButton.style.right = "1rem"
        closeButton.style.background = "none"
        closeButton.style.border = "none"
        closeButton.style.cursor = "pointer"

        closeButton.addEventListener("click", () => {
          shopSidebar.classList.remove("active")
          document.body.style.overflow = ""
        })

        shopSidebar.appendChild(closeButton)
      }
    })
  }

  // Sort functionality
  const sortSelect = document.getElementById("sort-select")
  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      // In a real implementation, this would sort the products
      console.log("Sort by:", this.value)
    })
  }

  // Filter functionality
  const filterOptions = document.querySelectorAll(".filter-option input")
  filterOptions.forEach((option) => {
    option.addEventListener("change", function () {
      // In a real implementation, this would filter the products
      console.log("Filter changed:", this.name, this.value, this.checked)
    })
  })
})

