function buyAttack(){

if(player.gold >= 20){

player.gold -= 20
player.baseAtk++

saveGame()

}

}

function buyDefense(){

if(player.gold >= 20){

player.gold -= 20
player.baseDef++

saveGame()

}

}

function buyHealth(){

if(player.gold >= 30){

player.gold -= 30
player.baseHp += 10

saveGame()

}

}

function buyPotion(){

if(player.gold >= 15){

player.gold -= 15

player.hp = Math.min(player.hp + 30, player.maxHp)

addLog("Você bebeu uma poção e recuperou vida")

saveGame()

updatePlayerPanel()

}

}