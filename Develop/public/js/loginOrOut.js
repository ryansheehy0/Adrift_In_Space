function handleLoginOrOut(){
  // Get elements
  const loginOrOutBtn = document.querySelector("#loginOrOutBtn")
  const loginBox = document.querySelector("#loginBox")
    const loginIsWrongWarning = loginBox.querySelector("#isWrongWarning")
  const signupBox = document.querySelector("#signupBox")
    const signupIsWrongWarning = signupBox.querySelector("#isWrongWarning")

  // Add event listeners

  // If Login Or Out Button is clicked
  loginOrOutBtn.addEventListener("click", async (event) => {
    event.stopPropagation()

    // Switch based upon Login or Logout
    switch(loginOrOutBtn.textContent.trim()){
      // If button is login
      case "Login":
        // Show login box
        loginBox.classList.remove("hidden")
        break

      // If button is logout
      case "Logout":
        // Tell server to logout
        const response = await fetch("/logout", {
          method: "POST"
        })
        if(!response.ok) return
        // Change the button to login
        loginOrOutBtn.textContent = "Login"
        break
    }
  })

  // Hide login box or signup box if clicked outside of them
  document.addEventListener("click", (event) => {
    // If event.target is inside of login box or signup box then exit
    if(loginBox.contains(event.target) || signupBox.contains(event.target)) return

    // If login box is hidden and sign up box is hidden then return
    if([...loginBox.classList].includes("hidden") && [...signupBox.classList].includes("hidden")) return

    // If is outside of login and signup box
    // Prevent default event for login or Out button
    event.preventDefault()
    // Hide login box
    loginBox.classList.add("hidden")
    // Hide login warning
    loginIsWrongWarning.classList.add("hidden")
    // Hide sign up box
    signupBox.classList.add("hidden")
    // hide signup warning
    signupIsWrongWarning.classList.add("hidden")
  })
}

handleLoginOrOut()
