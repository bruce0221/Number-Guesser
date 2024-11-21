let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget () {  // Generate target number
    return Math.floor(Math.random() * 10 );
}

function compareGuesses(userGuess, compareGuesses, targetNumber) {  //Find out which one is winner

    let userDifferent = Math.floor(Math.abs(targetNumber-userGuess));
    let computerDifferent = Math.floor(Math.abs(targetNumber-compareGuesses));

    if (userDifferent === computerDifferent) { 
        return true;
    } else if (userDifferent < computerDifferent) { 
        return true ;
    } else if (userDifferent > computerDifferent) { 
        return false ;
    }
}

function updateScore(winner) {  // add score for winner

    switch (winner) { 
        case 'human' : 
            humanScore += 1 ;
            break;

        case 'computer' :
            computerScore += 1 ;
            break;
    }
}

function advanceRound() { 
    currentRoundNumber += 1 ;
}



function outofRange (userGuess) { 
    if (userGuess < 0 || userGuess > 9) { 
        alert('This number is out of range!');
    }
}

