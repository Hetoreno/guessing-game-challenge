//Generate a random number
//Give the user the ability to guess
//If they guess and they are wrong, ask them again with a hint
//If they win- say that they won

function guessGame(){
    
    let randNum =Math.floor(Math.random()* 11);
    let number;
    
    do{
            number = prompt(`Guess a number that I'm thinking? :}`);
            
            if (number == randNum){
                alert(`You\'re correct! :D` );
            } else {
                alert(`You\'re wrong :(`);
                alert(`HINT: it\'s between 0-10 ;}`)
            }
        }while(number != randNum);
    }

guessGame();