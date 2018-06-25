// initial prompt
var initialPrompt = window.confirm('Get ready to choose your own adventure!')

// If the user clicks "Cancel" in the prompt
if (initialPrompt === true) {
  var randomNumber = Math.random()
  // window.alert(randomNumber)
  if (randomNumber > 0.7) {
    window.alert('You are a successful priate. Everything goes right for him. You go on to have many more adventures.')
  } else if (randomNumber > 0.5) {
    window.alert('You are a a pirate running from his past. You live out the rest of your days on a deserted island.')
  } else {
    // prompt to choose plan 1, 2, or 3
    var planPrompt = window.prompt('You are a failed pirate. Your crew is on the virge of death. Choose a plan! \n( 1 2 3)')
    // handle null and undefined
    if (planPrompt === null || planPrompt === undefined) {
      planPrompt = ''
    }
    // trim whitespace and normalize
    planPrompt = planPrompt.trim().toLowerCase()
    if (isNaN(parseInt(planPrompt))) {
      window.alert('That is not a number.')
    } else if (parseInt(planPrompt) === 1) {
      window.alert('You picked plan 1. You sail west to find an island full of supplies!')
    } else if (parseInt(planPrompt) === 2) {
      window.alert('You picked plan 2. You sail east to find nothing but open sea. You and your crew starve to death.')
    } else if (parseInt(planPrompt) === 3) {
      window.alert('You picked plan 3. You sail north only to be confronted by a dragon! The dragon burns you and your crew alive for dinner.')
    } else {
      window.alert('That\'s not a choice!')
    }
  }
} else {
  window.alert('I guess you don\'t like adventure, that\'s okay.')
}
