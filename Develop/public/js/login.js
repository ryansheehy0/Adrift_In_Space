// Get elements
const usernameField = document.querySelector("#loginusername")
const passwordField = document.querySelector("#loginpassword")
const loginSubmit = document.querySelector("#loginsubmit")

// Add event listeners
loginSubmit.addEventListener("click", () => {
  
})


  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: usernameField.value,
      password: passwordField.value
    })
  })
  
  if(response.)