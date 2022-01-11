let playerIcon = document.querySelector('#playerIcon');
let compIcon = document.querySelector('#compIcon');
let playerScr = document.querySelector('#playerScore');
let compScr = document.querySelector('#compScore');
let bodyText = document.querySelector('#bodyText');
let bodySubText = document.querySelector('#bodySubText');

let computerScore = 0;
let playerScore = 0;
let flag = false;

function giveResult(choice)
{
    if(flag) return;

    let computerChoice = compChoice();

    playerIcon.innerText = convertEmoji(choice);
    compIcon.innerText = convertEmoji(computerChoice);

    switch(choice + computerChoice)
    {
        //tie cases
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
        case 'lizardlizard':
        case 'spockspock':
            bodyText.innerText = 'Tie!'
            bodySubText.innerText = capitalize(choice) + ' ties with ' + capitalize(computerChoice);
            break;

        //Player win cases
        //player has rock
        case 'rockscissor':
        case 'rocklizard':
            bodyText.innerText = 'Player Wins!';
            bodySubText.innerText = capitalize(choice) + ' crushes ' + capitalize(computerChoice);
            playerScore++;
            break;

        //player has paper
        case 'paperrock':
            bodySubText.innerText = 'Paper covers Rock';
            bodyText.innerText = 'Player Wins!';
            playerScore++;
            break;
        case 'paperspock':
            bodySubText.innerText = 'Paper disproves Rock';
            bodyText.innerText = 'Player Wins!';
            playerScore++;
            break;

        //player has scissors
        case 'scissorpaper':
            bodySubText.innerText = 'Scissors cut Paper';
            bodyText.innerText = 'Player Wins!';
            playerScore++;
            break;
        case 'scissorlizard':
            bodySubText.innerText = 'Scissors decapitate Lizard';
            bodyText.innerText = 'Player Wins!';
            playerScore++;
            break;

        //player has lizard
        case 'lizardpaper':
            bodySubText.innerText = 'Lizard eats Paper';
            bodyText.innerText = 'Player Wins!';
            playerScore++;
            break;
        case 'lizardspock':
            bodySubText.innerText = 'Lizard poisons Spock';
            bodyText.innerText = 'Player Wins!';
            playerScore++;
            break;
        
        //player has spock
        case 'spockscissor':
            bodySubText.innerText = 'Spock smashes Scissors';
            bodyText.innerText = 'Player Wins!';
            playerScore++;
            break;
        case 'spockrock':
            bodySubText.innerText = 'Spock vaporizes Rock';
            bodyText.innerText = 'Player Wins!';
            playerScore++;
            break;
    }

    switch(computerChoice + choice) //Computer win cases
    {
        //computer has rock

        case 'rockscissor':
        case 'rocklizard':
            bodyText.innerText = 'Computer Wins!';
            bodySubText.innerText = capitalize(computerChoice) + ' crushes ' + capitalize(choice);
            computerScore++;
            break;
        case 'rockscissor':
            bodySubText.innerText = 'Rock crushes Scissors';
            bodyText.innerText = 'Computer Wins!';
            computerScore++;
            break;
        case 'rocklizard':
            bodySubText.innerText = 'Rock crushes Lizard';
            bodyText.innerText = 'Computer Wins!';
            computerScore++;
            break;

        //computer has paper
        case 'paperrock':
            bodySubText.innerText = 'Paper covers Rock';
            bodyText.innerText = 'Computer Wins!';
            computerScore++;
            break;
        case 'paperspock':
            bodySubText.innerText = 'Paper disproves Spock';
            bodyText.innerText = 'Computer Wins!';
            computerScore++;
            break;

        //computer has scissors
        case 'scissorpaper':
            bodySubText.innerText = 'Scissors cut Paper';
            bodyText.innerText = 'Computer Wins!';
            computerScore++;
            break;
        case 'scissorlizard':
            bodySubText.innerText = 'Scissors decapitate Lizard';
            bodyText.innerText = 'Computer Wins!';
            computerScore++;
            break;

        //computer has lizard
        case 'lizardpaper':
            bodySubText.innerText = 'Lizard eats Paper';
            bodyText.innerText = 'Computer Wins!';
            computerScore++;
            break;
        case 'lizardspock':
            bodySubText.innerText = 'Lizard poisons Spock';
            bodyText.innerText = 'Computer Wins!';
            computerScore++;
            break;
        
        //computer has spock
        case 'spockscissor':
            bodySubText.innerText = 'Spock smashes Scissors';
            bodyText.innerText = 'Computer Wins!';
            computerScore++;
            break;
        case 'spockrock':
            bodySubText.innerText = 'Spock vaporizes Rock';
            bodyText.innerText = 'Computer Wins!';
            computerScore++;
            break;
    }

    playerScr.innerText = 'Player: ' + playerScore;
    compScr.innerText = 'Computer: ' + computerScore;
    
    if(computerScore == 5)
    {
        bodyText.innerText = 'Computer Wins Game!';
        //bodySubText.innerText = '';
        flag = true;
        return;
    }
    if(playerScore == 5)
    {
        bodyText.innerText = 'Player Wins Game!';
        //bodySubText.innerText = '';
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

function convertEmoji(text)
{
    switch(text)
    {
        case 'rock':
            return '✊';
            break;
        case 'paper':
            return '✋';
            break;
        case 'scissor':
            return '✌️';
            break;
        case 'lizard':
            return '🦎';
            break;
        case 'spock':
            return '🖖';
            break;
    }
}

function capitalize(string)
{
    return string[0].toUpperCase() + string.slice(1);
}