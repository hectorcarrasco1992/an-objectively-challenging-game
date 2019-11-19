function getAttackDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let currentMonster = monster;
let currentPlayer = player
document.querySelector('#fight').addEventListener('click', playerBattle())

function playerBattle(){
  while(player.hitPoints > 0){
     monster.hitPoints -=  getAttackDamage(player.attackMin, player.attackMax) 
    }  
    
    while(monster.hitPoints > 0){
      player.hitPoints -= getAttackDamage(monster.attackMin, attackMax)
    } 

}