# Adrift in Space

## Description
A space themed Sort the Court. You are the captain of an adrift space ship trying to survive and get back to your home planet.
You are an AI captain of an adrift space ship trying to survive and get back to your home planet.

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

## Ideas for encounters:

| Name                   | Option 1             | Option 2                     |
|------------------------|----------------------|------------------------------|
| Asteroid               | Go left              | Go right                     |
| Asteroid Belt          | Go threw             | Go around                    |
| Space Squid            | Harvest ink for fuel | Hint for food                |
| Pirate Ship            | Fight                | Bargain                      |
| Black Hole             | Go around            | No time! Straight ahead      |
| Moon Colony            | Touch down and trade | They could be a cult. Fight. |
| Derelict Space Station | Plunder for supplies | Shoot it apart               |
| Ancient Alien Monolith | Scan                 | Ignore                       |

## Future Features
  - Long term consequences
  - How 3 supplies interact with each other:
    - ^ in Crew = decrease in Food
    - ^ in Fuel = decrease in Crew(because it takes up space)
    - ^ in Food = decrease in Fuel
  - Random outcomes to options
  - Events happen in random order instead of one after another

## Resources
- [Main Ship Icons]()
- [Background]()
- [Home Planet]()
- Supplies
  - [Crew](https://www.flaticon.com/free-icon/team_6515003)
  - [Energy](https://www.flaticon.com/free-icon/thunder_365861)
  - [Fuel](https://www.flaticon.com/free-icon/start-up_6514940)
  - [Food](https://www.flaticon.com/free-icon/pizza_12065322)
  - [Water](https://www.flaticon.com/free-icon/humidity_365868)
  - [Warning](https://www.flaticon.com/free-icon/caution_6514911)
- [Font](https://fonts.google.com/specimen/VT323)
- Events
  - [Asteroid belt](https://clipground.com/images/asteroid-belt-clipart-17.png)

## How to create a new event
- event_name.handlebars in views/
- event_name.js in controllers/events