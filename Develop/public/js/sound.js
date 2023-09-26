// Load the mp3 file
const sound = new Howl({
  src: ["/assets/sound/disasterpeace_background_music.mp3"],
  autoplay: true,
  loop: true,
  volume: 0.3
})

// Set variables
const url = new URL(document.location.href)
const parts = url.pathname.split("/")
const pathName = parts[1]


if(pathName === "intro"){
  // Play the song
  sound.play()

  // Continually store the location of the background song
  setInterval(() => {
    localStorage.setItem("musicLocation", JSON.stringify(sound.seek()))
  }, 1)
}else{
  // Get the location
  const musicLocation = localStorage.getItem("musicLocation")
  // Set the location fo the music
  sound.seek(musicLocation)
  // Continually store the location of the background song
  setInterval(() => {
    localStorage.setItem("musicLocation", JSON.stringify(sound.seek()))
  }, 1)
}