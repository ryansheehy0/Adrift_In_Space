// Get the options
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")

// Event listeners
option1.addEventListener("click", () => {
  if(document.location.href.includes("/asteroid/1")){
    document.location.href = "/"
    return
  }
  document.location.href = "/asteroid/1"
})

option2.addEventListener("click", () => {
  if(document.location.href.includes("/asteroid/2")){
    document.location.href = "/"
    return
  }
  document.location.href = "/asteroid/2"
})