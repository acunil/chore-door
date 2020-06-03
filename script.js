// Door elements
var doorImage1 = document.getElementById("door1");
var doorImage2 = document.getElementById("door2");
var doorImage3 = document.getElementById("door3");

// Open door images
var botDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
var beachDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
var spaceDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

// global variables
var numClosedDoors = 3,
  openDoor1,
  openDoor2,
  openDoor3;

// randomly assign each door image to the global door variables
var randomChoreDoorGenerator = (() => {
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  let resultArray = shuffle([botDoorPath, beachDoorPath, spaceDoorPath]);
  openDoor1 = resultArray[0];
  openDoor2 = resultArray[1];
  openDoor3 = resultArray[2];
})();

// onclick make door img sources equal to newly randomized door images
doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
};

doorImage2.onclick = () => {
  doorImage2.src = openDoor2;
};

doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
};
