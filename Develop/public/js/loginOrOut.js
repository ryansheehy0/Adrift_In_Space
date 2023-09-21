// Get elements
const loginOrOutBtn = document.querySelector("#loginOrOutBtn")
const loginBox = document.querySelector("#loginBox")

// Variables
let isLoginBoxHidden = true

// Add event listeners
loginOrOutBtn.addEventListener("click", (event) => {
  event.stopPropagation()
  switch(loginOrOutBtn.textContent.trim()){
    case "Login":
      loginBox.classList.remove("hidden")
      isLoginBoxHidden = false
      break
    case "Logout":
      break
  }
})

document.addEventListener("click", (event) => {
  if(loginBox.contains(event.target)) return
  if(isLoginBoxHidden) return
  event.preventDefault()
  event.stopPropagation()
  loginBox.classList.add("hidden")
})