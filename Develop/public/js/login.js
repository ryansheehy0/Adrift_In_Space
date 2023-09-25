async function sendLogin(username, password){
  return await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  })
}

function login(){
  // Get elements
  const loginOrOutBtn = document.querySelector("#loginOrOutBtn")

    // Login Box elements
    const loginBox = document.querySelector("#loginBox")
      const usernameField = loginBox.querySelector("#loginUsername")
      const passwordField = loginBox.querySelector("#loginPassword")
      const loginSubmit = loginBox.querySelector("#loginSubmit")
      const warning = loginBox.querySelector("#warning")

    // Sign up elements
    const signupLink = document.querySelector("#signupLink")
    const signupBox = document.querySelector("#signupBox")

  // Add event listeners
  loginSubmit.addEventListener("click", async (event) => {
    event.preventDefault() // Stop submission of form

    // Get username and password
    const username = usernameField.value
    const password = passwordField.value

    // Send username and password to /login
    const response = await sendLogin(username, password)

    // If the login didn't work
    if(!response.ok){
      warning.classList.remove("hidden")
      return
    }

    // If the login did work
    warning.classList.add("hidden")
    loginBox.classList.add("hidden")
    loginOrOutBtn.textContent = "Logout"
  })


  // When the sign up link is clicked
  signupLink.addEventListener("click", (event) => {
    // Stop submission of form
    event.preventDefault()
    // Hide warning message
    warning.classList.add("hidden")
    // Hide login box
    loginBox.classList.add("hidden")
    // Show signup box
    signupBox.classList.remove("hidden")
  })
}

login()