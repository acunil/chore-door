// Global Variables

// While true, game continues. When false, game ends.
var currentlyPlaying = true;

// Constant for number of doors in the game
const NumOfDoors = 3;

// Door elements in DOM
const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const startButton = document.getElementById("start");

// Open door images
const DoorImages = {
  botDoorPath:
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg",
  beachDoorPath:
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg",
  spaceDoorPath:
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg",
  closedDoorPath:
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg",
};

// Number of doors in game
var numClosedDoors = NumOfDoors;

// Object to reference image when doors are opened
var openDoor = {
  0: null,
  1: null,
  2: null,
};

// Randomly assign each door image to the global door variables
var randomChoreDoorGenerator = () => {
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  let resultArray = shuffle(["botDoorPath", "beachDoorPath", "spaceDoorPath"]);

  for (let i = 0; i < resultArray.length; i++) {
    openDoor[i] = DoorImages[resultArray[i]];
  }
};

// function to check if opened door is bot and therefore lose
function isBot(door) {
  return door.src === DoorImages.botDoorPath;
}

// function to check if a door has not yet been opened
function isShut(door) {
  return door.src === DoorImages.closedDoorPath;
}

// function to check if win condition has been met
function playDoor(door) {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver("win");
  } else if (isBot(door)) {
    gameOver();
  }
}

// onclick make unpoened door img sources equal to randomized door images and progress win condition
doorImage1.onclick = () => {
  if (isShut(doorImage1) && currentlyPlaying) {
    doorImage1.src = openDoor[0];
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (isShut(doorImage2) && currentlyPlaying) {
    doorImage2.src = openDoor[1];
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (isShut(doorImage3) && currentlyPlaying) {
    doorImage3.src = openDoor[2];
    playDoor(doorImage3);
  }
};

// function to determine win condition and format page
function gameOver(status) {
  if (status) {
    startButton.innerHTML = "You win! Play again";
  } else {
    startButton.innerHTML = "Game over. Play again?";
  }
  currentlyPlaying = false;
}

// function to reset game state to start
function startRound() {
  doorImage1.src = DoorImages.closedDoorPath;
  doorImage2.src = DoorImages.closedDoorPath;
  doorImage3.src = DoorImages.closedDoorPath;
  numClosedDoors = NumOfDoors;
  startButton.innerHTML = "Good Luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

// Restarts the game when button is clicked
startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
};

startRound();
