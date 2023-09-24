async function sendSignup(username, password){
  return await fetch("/signup", {
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

function signup(){
  // Get elements
  const signupBox = document.querySelector("#signupBox")
    const usernameField = signupBox.querySelector("#username")
    const passwordField = signupBox.querySelector("#password")
    const signupSubmit = signupBox.querySelector("#submit")
    const isWrongWarning = signupBox.querySelector("#isWrongWarning")

  const loginOrOutBtn = document.querySelector("#loginOrOutBtn")

  // Add event listeners
  signupSubmit.addEventListener("click", async (event) => {
    // Stop submission of form
    event.preventDefault()

    // Get username and password
    const username = usernameField.value
    const password = passwordField.value

    // Check if username and password are set
    const isInfoSet = username != "" && password != ""
    if(!isInfoSet){
      // show warning message
      isWrongWarning.classList.remove("hidden")
      return
    }

    // Send username and password to /signup
    const response = await sendSignup(username, password)

    // If the sign up didn't work
    if(!response.ok){
      // show warning message
      isWrongWarning.classList.remove("hidden")
      return
    }

    // If the sign up did work
      // Hide warning message
      isWrongWarning.classList.add("hidden")
      // hide signup box
      signupBox.classList.add("hidden")
      // change loginOrOut Btn to Logout
      loginOrOutBtn.textContent = "Logout"
  })


  // When the login link is clicked
  loginLink.addEventListener("click", (event) => {
    // Stop submission of form
    event.preventDefault()
    // Hide warning message
    isWrongWarning.classList.add("hidden")
    // Hide signup box
    signupBox.classList.add("hidden")
    // Show login box
    loginBox.classList.remove("hidden")
  })
}

signup()