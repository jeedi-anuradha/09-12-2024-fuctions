/**Define a function called greet that logs “Hello!” to the console. Call the function after defining it. 
function greet(){
    console.log('Hello!');
}
greet();

function  showMessage(){
    console.log('This is a message');
}
showMessage();

function logInfo(){
    console.log('Logging Information…');
}
logInfo(); 

function startGame(){
    console.log('Game Started!')
    endGame();
}
function endGame(){
    console.log('Game Over!');
}
startGame();*/

function beginTask(){
    console.log('Task Started');
    finishTask();
}
function finishTask(){
    console.log('Task Finished');
}
beginTask();