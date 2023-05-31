import './style.css'
// Define the Team class to represent a team with a name and score
class Team {
  name: string
  score: number

  constructor(name: string) {
    this.name = name
    this.score = 0
  }
}

// Create instances of the Team class for the two teams
const team1 = new Team('Team 1')
const team2 = new Team('Team 2')

// Function to update the scoreboard display
function updateScoreboard() {
  const team1ScoreElement = document.getElementById('team1-score')!
  const team2ScoreElement = document.getElementById('team2-score')!
  const team1NameElement = document.getElementById('team1-name')!
  const team2NameElement = document.getElementById('team2-name')!

  // Update the score display for each team
  team1ScoreElement.innerText = team1.score.toString()
  team2ScoreElement.innerText = team2.score.toString()
  team1NameElement.innerText = team1.name
  team2NameElement.innerText = team2.name
}

// Function to handle name changes
function handleNameChange(event: Event, team: Team) {
  const inputElement = event.target as HTMLInputElement
  if (inputElement) {
    team.name = inputElement.value
    updateScoreboard()
  }
}

// Function to handle score updates
function handleScoreUpdate(_event: Event, team: Team, value: number) {
  if (team.score + value >= 0 && team.score + value <= 21) {
    team.score += value 
    updateScoreboard()
  }
}

// Add event listeners to the input fields
const team1NameInput = document.getElementById('team1-name-input')
if (team1NameInput) {
  team1NameInput.addEventListener('input', (event) => {
    handleNameChange(event, team1)
  })
}

const team2NameInput = document.getElementById('team2-name-input')
if (team2NameInput) {
  team2NameInput.addEventListener('input', (event) => {
    handleNameChange(event, team2)
  })
}

// Add event listeners to the score buttons
const team1ScoreButton = document.getElementById('team1-score-button')
if (team1ScoreButton) {
  team1ScoreButton.addEventListener('click', (event) => {
    handleScoreUpdate(event, team1, 1)
  })
}

const team2ScoreButton = document.getElementById('team2-score-button')
if (team2ScoreButton) {
  team2ScoreButton.addEventListener('click', (event) => {
    handleScoreUpdate(event, team2, 1)
  })
}

// Initialize the scoreboard display
updateScoreboard()
