let computerScore = 0;
let playerScore = 0;
let flag = false;

function giveResult(choice)
{
    if(flag) return;

    let computerChoice = compChoice();

    console.log('Player: ' + choice);
    console.log('Computer: ' + computerChoice);

    switch(choice + computerChoice)
    {
        //tie cases
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
        case 'lizardlizard':
        case 'spockspock':
            console.log('Tie!');
            break;

        //Player win cases
        //player has rock
        case 'rockscissor':
            console.log('Rock crushes Scissors');
            console.log('Player Wins!');
            playerScore++;
            break;
        case 'rocklizard':
            console.log('Rock crushes Lizard');
            console.log('Player Wins!');
            playerScore++;
            break;

        //player has paper
        case 'paperrock':
            console.log('Paper covers Rock');
            console.log('Player Wins!');
            playerScore++;
            break;
        case 'paperspock':
            console.log('Paper disproves Spock');
            console.log('Player Wins!');
            playerScore++;
            break;

        //player has scissors
        case 'scissorpaper':
            console.log('Scissors cut Paper');
            console.log('Player Wins!');
            playerScore++;
            break;
        case 'scissorlizard':
            console.log('Scissors decapitate Lizard');
            console.log('Player Wins!');
            playerScore++;
            break;

        //player has lizard
        case 'lizardpaper':
            console.log('Lizard eats Paper');
            console.log('Player Wins!');
            playerScore++;
            break;
        case 'lizardspock':
            console.log('Lizard poisons Spock');
            console.log('Player Wins!');
            playerScore++;
            break;
        
        //player has spock
        case 'spockscissor':
            console.log('Spock smashes Scissors');
            console.log('Player Wins!');
            playerScore++;
            break;
        case 'spockrock':
            console.log('Spock vaporizes Rock');
            console.log('Player Wins!')
            playerScore++;
            break;
    }

    switch(computerChoice + choice) //Computer win cases
    {
        //computer has rock
        case 'rockscissor':
            console.log('Rock crushes Scissors');
            console.log('Computer Wins!');
            computerScore++;
            break;
        case 'rocklizard':
            console.log('Rock crushes Lizard');
            console.log('Computer Wins!');
            computerScore++;
            break;

        //computer has paper
        case 'paperrock':
            console.log('Paper covers Rock');
            console.log('Computer Wins!');
            computerScore++;
            break;
        case 'paperspock':
            console.log('Paper disproves Spock');
            console.log('Computer Wins!');
            computerScore++;
            break;

        //computer has scissors
        case 'scissorpaper':
            console.log('Scissors cut Paper');
            console.log('Computer Wins!');
            computerScore++;
            break;
        case 'scissorlizard':
            console.log('Scissors decapitate Lizard');
            console.log('Computer Wins!');
            computerScore++;
            break;

        //computer has lizard
        case 'lizardpaper':
            console.log('Lizard eats Paper');
            console.log('Computer Wins!');
            computerScore++;
            break;
        case 'lizardspock':
            console.log('Lizard poisons Spock');
            console.log('Computer Wins!');
            computerScore++;
            break;
        
        //computer has spock
        case 'spockscissor':
            console.log('Spock smashes Scissors');
            console.log('Computer Wins!');
            computerScore++;
            break;
        case 'spockrock':
            console.log('Spock vaporizes Rock');
            console.log('Computer Wins!')
            computerScore++;
            break;
    }

    console.log('Player Score is ' + playerScore);
    console.log('Computer Score is ' + computerScore);
    
    if(computerScore == 5)
    {
        console.log('Computer Wins Game!');
        flag = true;
        return;
    }
    if(playerScore == 5)
    {
        console.log('Player Wins Game!');
        flag = true;
        return;
    }
}

function compChoice()
{
    let choiceComp = Math.floor(Math.random()*5);
    switch(choiceComp)
    {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break;
        case 3:
            return 'lizard';
            break;
        case 4:
            return 'spock';
            break;
    }
}