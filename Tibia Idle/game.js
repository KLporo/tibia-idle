function updatePlayerPanel(){

document.getElementById("playerPanel").innerHTML = `

<div>⭐ Level ${player.level}</div>

<div>XP ${player.xp}/${xpToNextLevel()}</div>

<div>❤️ ${player.hp}/${player.maxHp}</div>

<div>⚔ ${player.atk}</div>

<div>🛡 ${player.def}</div>

<div>💰 ${player.gold}</div>

`
}

function xpToNextLevel(){

return player.level * GAME_CONFIG.LEVEL_SYSTEM.xpPerLevel

}

function checkLevelUp(){

while(player.xp >= xpToNextLevel()){

player.xp -= xpToNextLevel()

player.level++

player.maxHp += GAME_CONFIG.LEVEL_SYSTEM.hpPerLevel

player.hp = player.maxHp

addLog("⭐ Level Up! Agora você é nível "+player.level,"loot")

saveGame()

}

}

function openMenu(){

document.getElementById("menuPanel").innerHTML = `

<button onclick="openBattle()">Batalhar</button>

<button onclick="openShop()">Loja</button>

<button onclick="openCity()">Cidade</button>

`

}

function openBattle(){

document.getElementById("gamePanel").innerHTML = `

<h2>Batalha</h2>

<p id="monsterName"></p>

<div class="hpBar">

<div id="monsterHpFill" class="hpFill"></div>

</div>

<button onclick="stopCombat()">Parar</button>

`

startCombat(cities.thais.areas.sewers)

}

function openShop(){

document.getElementById("gamePanel").innerHTML = `

<h2>Loja</h2>

<button onclick="buyPotion()">Poção (15)</button>

<button onclick="buyAttack()">+Ataque</button>

<button onclick="buyDefense()">+Defesa</button>

`

}

function openCity(){

document.getElementById("gamePanel").innerHTML = `

<h2>Cidade</h2>

<p>Thais</p>

`

}

window.onload = function(){

loadGame()

openMenu()

updatePlayerPanel()

}