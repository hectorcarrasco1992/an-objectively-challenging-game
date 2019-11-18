function getAttackDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let currentMonster = monster;
let currentPlayer = player
// document.querySelector('#fight').addEventListener('click', getAttackDamage(monster.attackMin, monster.attackMax))

function playerBattle(){
  monster.hitPoints -=  getAttackDamage(player.attackMin, player.attackMax) 

}