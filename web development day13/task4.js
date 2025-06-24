function main(){
   lr();
   move();
   pr();
   turnRight();
   lr();
   move();
   pr();
   turnRight();
   lr();
   turnRight();
}
function lr(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
}

function pr(){
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
}