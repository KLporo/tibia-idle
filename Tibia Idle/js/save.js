function saveGame(){

localStorage.setItem(
"tibiaIdleSave",
JSON.stringify(player)
)

}

function loadGame(){

let save = localStorage.getItem("tibiaIdleSave")

if(save){

player = JSON.parse(save)

}

}