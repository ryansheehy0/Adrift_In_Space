const sound = new Howl({
  src: ["/assets/sound/disasterpeace_background_music.mp3"],
  autoplay: true,
  loop: true,
  volume: 0.3
})

sound.play()