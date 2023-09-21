// Get the options
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")

option1.addEventListener("click", () => {
  console.log("option 1")
  fetch("/asteroid?1", {
    method: "POST",
  })
})

option2.addEventListener("click", () => {
  fetch("/asteroid?2", {
    method: "POST",
  })
})