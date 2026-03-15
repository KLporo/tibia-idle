function saveGame(){

const saveData = {

player: player,
city: currentCity,
area: currentArea

}

localStorage.setItem("tibiaIdleSave", JSON.stringify(saveData))

}

function loadGame(){

const savedData = localStorage.getItem("tibiaIdleSave")

if(savedData){

const data = JSON.parse(savedData)

Object.assign(player, data.player)

currentCity = data.city
currentArea = data.area

}

}
