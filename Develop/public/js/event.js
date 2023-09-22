// Get the options
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const scriptElement = document.querySelector("#script")
const eventName = scriptElement.getAttribute("data-eventname")

// Event listeners
option1.addEventListener("click", (event) => {
  if(event.target.textContent.trim() === "Continue"){
    document.location.href = "/"
    return
  }
  document.location.href = `/${eventName}/1`
})

option2.addEventListener("click", (event) => {
  if(event.target.textContent.trim() === "Continue"){
    document.location.href = "/"
    return
  }
  document.location.href = `/${eventName}/2`
})