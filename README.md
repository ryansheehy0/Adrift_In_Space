# Adrift in Space

## Description
A space themed Sort the Court. You are an AI captain of an adrift space ship trying to survive and get back to your home planet.

You are an AI captain of an adrift space ship trying to keep your crew alive and get back to your home planet.

Maybe instead of you being a captain you are an AI.

## 3 supplies
- Crew
- Fuel
- Food

There is no need for water because all of the water gets recycled on the space ship.

## How 3 supplies interact
- Food goes down over time.
- Crew stays the same if you have Food.
- If no Food then Crew goes down over time.
- Fuel goes down over time and gets you closer to home.
- If Fuel is 0 you don't get closer to home. Stay in the same spot.

## How you loose
When you have 0 Crew.

## How you win
You get back to your home planet.

## Elements on the screen
- Login stuff in the left top
  - Popup to login or sign up
- 3 supply counters in the bottom left hand corner
- Left side your ship
- Right side the events with text box above them
- Top right distance form home counter
- Center has the 2 clickable options

## Future Features
  - Long term consequences
  - How 3 supplies interact with each other:
    - ^ in Crew = decrease in Food
    - ^ in Fuel = decrease in Crew(because it takes up space)
    - ^ in Food = decrease in Fuel
  - Random outcomes to options
  - Events happen in random order instead of one after another

## Resources
- [Background](https://deep-fold.itch.io/space-background-generator)
- Supplies
  - [Crew](https://www.flaticon.com/free-icon/team_6515003)
  - [Fuel](https://www.flaticon.com/free-icon/start-up_6514940)
  - [Food](https://www.flaticon.com/free-icon/pizza_12065322)
  - [Warning](https://www.flaticon.com/free-icon/caution_6514911)
- [Font](https://fonts.google.com/specimen/VT323)
- Events
  - [Pixel Art Maker](https://pixelartmaker.com/gallery)
    - [Asteroid](http://pixelartmaker.com/art/b02b88d8461a4fb)
    - [Purple Asteroid](http://pixelartmaker.com/art/634cc56c55a8cf2)
  - [Planets and other stuff](https://helianthus-games.itch.io/)
  - [Space Ships](https://foozlecc.itch.io/)
  - [Planet Generator](https://deep-fold.itch.io/pixel-planet-generator)
  - [Crystal Asteroid](https://www.pinclipart.com/maxpin/mihxbJ/)

## How to create a new event
Find the asset first then create event based upon the asset.
1. Make sure you have your own branch!!!
  - run `git checkout -b your_first_name`
  - run `git branch` to double check you are in your branch
1. Find pixel asset
1. Copy pixel asset into public/assets/events/
1. New handlebars event file in views/
  - Add img with custom tailwind to change size and position
  - Add script with all attributes.
    - id, data-eventname, and src
1. Create backend js file
  - eventname.js in controllers/events/


- Don't do yet.
1. Create new route in routes.js
1. Add event in the order in routes.js