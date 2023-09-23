function handleLoginOrOut(){
  // Get elements
  const loginOrOutBtn = document.querySelector("#loginOrOutBtn")
  const loginBox = document.querySelector("#loginBox")

  // Add event listeners
  loginOrOutBtn.addEventListener("click", async (event) => {
    event.stopPropagation()
    switch(loginOrOutBtn.textContent.trim()){
      case "Login":
        loginBox.classList.remove("hidden")
        break
      case "Logout":
        const response = await fetch("/logout", {
          method: "POST"
        })
        if(!response.ok) return
        loginOrOutBtn.textContent = "Login"
        break
    }
  })

  document.addEventListener("click", (event) => {
    if(loginBox.contains(event.target)) return
    if([...loginBox.classList].includes("hidden")) return
    event.preventDefault()
    event.stopPropagation()
    loginBox.classList.add("hidden")
  })
}

handleLoginOrOut()
