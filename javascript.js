const choices = ['rock', 'paper', 'scissors'];

let getComputerChoice = () =>{
    const randomIndex = Math.floor(Math.random() * choices.length);

     return choices[randomIndex];

};

