let currentMonster
let combatLoop

function spawnMonster(area){

let pool = area.monsters

let random = pool[Math.floor(Math.random()*pool.length)]

currentMonster = structuredClone(monsters[random])

}

function startCombat(area){
	
stopCombat()

spawnMonster(area)

updateUI()

updatePlayerPanel()

combatLoop = setInterval(turn,1000)

}

function stopCombat(){

clearInterval(combatLoop)

}

function turn(){

let playerDamage = player.atk
let monsterDamage = currentMonster.atk

currentMonster.hp -= playerDamage

addLog("Você acertou " + currentMonster.name + " por " + playerDamage)

if(currentMonster.hp <= 0){

addLog(currentMonster.name + " morreu!")

player.xp += currentMonster.xp
player.gold += currentMonster.gold

addLog("Você ganhou " + currentMonster.xp + " XP e " + currentMonster.gold + " gold")

saveGame()

spawnMonster(currentArea)

addLog("Um novo " + currentMonster.name + " apareceu!")

updateUI()

updatePlayerPanel()

return
}

player.hp -= monsterDamage

addLog(currentMonster.name + " acertou você por " + monsterDamage)

if(player.hp <= 0){

addLog("Você morreu!")

stopCombat()

alert("Você morreu")

}

updateUI()

updatePlayerPanel()

}

function updateUI(){

document.getElementById("playerHp").innerText =
player.hp + " / " + player.maxHp

document.getElementById("monsterName").innerText =
currentMonster.name

document.getElementById("monsterHp").innerText =
currentMonster.hp

document.getElementById("playerXp").innerText =
player.xp

document.getElementById("playerGold").innerText =
player.gold

}

function addLog(text){

let log = document.getElementById("combatLog")

if(!log) return

let line = document.createElement("div")

line.innerText = text

log.prepend(line)

}

if(player.hp <= 0){

addLog("Você morreu!")

stopCombat()

player.hp = player.maxHp

saveGame()

updatePlayerPanel()

alert("Você morreu")

}