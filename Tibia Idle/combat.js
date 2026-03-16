let combatLoop

let currentMonster

function addLog(text,type=""){

let log=document.getElementById("combatLog")

if(!log) return

let line=document.createElement("div")

line.innerText=text

if(type==="player") line.classList.add("log-player")
if(type==="monster") line.classList.add("log-monster")
if(type==="loot") line.classList.add("log-loot")

log.prepend(line)

}

function spawnMonster(area){

let monsters=area.monsters

currentMonster=JSON.parse(JSON.stringify(

monsters[Math.floor(Math.random()*monsters.length)]

))

document.getElementById("monsterName").innerText=currentMonster.name

}

function startCombat(area){

stopCombat()

spawnMonster(area)

combatLoop = setInterval(turn,1000)

}

function stopCombat(){

if(combatLoop){

clearInterval(combatLoop)

}

}

function turn(){

let playerDamage=player.atk

let monsterDamage=currentMonster.atk

currentMonster.hp-=playerDamage

addLog("Você acertou "+currentMonster.name+" por "+playerDamage,"player")

if(currentMonster.hp<=0){

addLog(currentMonster.name+" morreu","monster")

player.gold += currentMonster.gold
player.xp += currentMonster.xp

checkLevelUp()

addLog("Ganhou "+currentMonster.gold+" gold","loot")

saveGame()

spawnMonster(cities.thais.areas.sewers)

updatePlayerPanel()

}

player.hp-=monsterDamage

addLog(currentMonster.name+" acertou você por "+monsterDamage,"monster")

if(player.hp<=0){

addLog("Você morreu")

stopCombat()

player.hp=player.maxHp

}

updatePlayerPanel()

}