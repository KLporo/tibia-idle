function buyPotion(){

if(player.gold >= GAME_CONFIG.SHOP.potionPrice){

player.gold -= GAME_CONFIG.SHOP.potionPrice

player.hp = Math.min(player.hp + 30, player.maxHp)

addLog("Você usou uma poção","loot")

saveGame()

updatePlayerPanel()

}

}

function buyAttack(){

if(player.gold >= GAME_CONFIG.SHOP.attackPrice){

player.gold -= GAME_CONFIG.SHOP.attackPrice

player.atk++

saveGame()

updatePlayerPanel()

}

}

function buyDefense(){

if(player.gold >= GAME_CONFIG.SHOP.defensePrice){

player.gold -= GAME_CONFIG.SHOP.defensePrice

player.def++

saveGame()

updatePlayerPanel()

}

}