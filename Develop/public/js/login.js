function login(){
  // Get elements
  const loginBox = document.querySelector("#loginBox")
  const loginOrOutBtn = document.querySelector("#loginOrOutBtn")
  const usernameField = document.querySelector("#loginUsername")
  const passwordField = document.querySelector("#loginPassword")
  const loginSubmit = document.querySelector("#loginSubmit")
  const isWrongWarning = document.querySelector("#isWrongWarning")
  const signupLink = document.querySelector("#signupLink")

  // Add event listeners
  loginSubmit.addEventListener("click", async (event) => {
    event.preventDefault()

    let response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: usernameField.value,
        password: passwordField.value
      })
    })

    if(!response.ok){
      isWrongWarning.classList.remove("hidden")
      return
    }

    isWrongWarning.classList.add("hidden")
    loginBox.classList.add("hidden")
    loginOrOutBtn.textContent = "Logout"
  })


  signupLink
}

login()