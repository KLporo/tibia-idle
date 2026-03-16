function saveGame(){

localStorage.setItem("tibiaIdleSave",JSON.stringify(player))

}

function loadGame(){

let data = localStorage.getItem("tibiaIdleSave")

if(data){

let savedPlayer = JSON.parse(data)

Object.assign(player,savedPlayer)

}

}