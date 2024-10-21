let dice = [];
let numberOfDice = 1;
let uno;
let dos;
let tres;
let win;

let score = 0;

function preload() {
  win = loadSound("libraries/crowd_small_chil_ec049202_9klCwI6.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberOfDice; i++) {
    dice[i] = new Die(150); // argument is the size of the die
  }
  uno = new Die;
  dos = new Die;
  tres = new Die;//tyring to set up different dice and connect them to background color
  //didnt work tho, or I don't know which property function to utilize
}

function draw() {
 // background("uno.shakeDice", "tres.shakeDice", "dos.shakeDice");
background("darkolivegreen");
  textSize(40);
  text(score, 100, 200);
  text('hit 2550 and you win!', 500, 100);
  
  // loop over the array and place+display each die
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i]; // 'die' is a temporary variable for the current array item
    die.place(die.size*1.2*i+die.size, die.size*2); // place the die neatly in the row
    die.display(); // actually draw it on screen
  }

}

function mouseClicked() {
  // loop over the array of dice...
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    // if the cursor is over the current die, freeze/unfreeze that die
    if (die.isTouched(mouseX,mouseY)) {
      die.toggleFreeze();
    }
    
  }
}

// for computers...
function keyPressed() {
  shakeDice();
}

// for phones...
function deviceShaken() {
  shakeDice();
}

// loop over the array of dice and try to roll each one in turn
// (note that a die won't actually roll if it's frozen)
// also, output the list of values to the console
function shakeDice() {
  let list = "values: ";
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    die.roll();
    list = list + die.value + " ";
    score = score + " ";

    if (score == 2550){
      win.play();
    }

  }
  console.log(list);
}