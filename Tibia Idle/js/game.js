let currentArea
let GameState = {

MENU: "menu",
BATTLE: "battle",
SHOP: "shop",
CITY: "city"

}

let currentState = GameState.MENU

window.onload = function(){

loadGame()

updatePlayerPanel()

}

function changeState(newState){

currentState = newState

if(newState === GameState.BATTLE){
openBattle()
}

if(newState === GameState.SHOP){
openShop()
}

if(newState === GameState.CITY){
openCity()
}

}

function openBattle(){

stopCombat()

let area = cities.thais.areas.sewers

currentArea = area

document.getElementById("game").innerHTML = `

<h2>Batalhando em ${area.name}</h2>

<p>Jogador HP: <span id="playerHp"></span></p>

<p>Monstro: <span id="monsterName"></span></p>

<p>Monstro HP: <span id="monsterHp"></span></p>

<p>XP: <span id="playerXp"></span></p>

<p>Gold: <span id="playerGold"></span></p>

<button onclick="stopCombat()">Parar</button>

<h3>Log de Combate</h3>

<div id="combatLog"></div>

`

startCombat(area)

document.getElementById("combatLog").innerHTML = ""

}

function openShop(){

stopCombat()

document.getElementById("game").innerHTML = `
<h2>Loja</h2>

<p>Gold: ${player.gold}</p>

<button onclick="buyAttack()">+1 Ataque (20)</button>
<button onclick="buyDefense()">+1 Defesa (20)</button>
<button onclick="buyHealth()">+10 Vida (30)</button>
<button onclick="buyPotion()">Poção de Vida (15)</button>
`

}

function openCity(){

stopCombat()

document.getElementById("game").innerHTML = `
<h2>Cidade</h2>

<p>Atual: Thais</p>
`

}

function updatePlayerPanel(){

document.getElementById("ui_hp").innerText =
player.hp + " / " + player.maxHp

document.getElementById("ui_atk").innerText =
player.atk

document.getElementById("ui_def").innerText =
player.def

document.getElementById("ui_gold").innerText =
player.gold

}
