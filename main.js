function getAttackDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let currentMonster = monster;
let currentPlayer = player
document.querySelector('#fight').addEventListener('click', playerBattle())

function playerBattle(){
  if(player.hitPoints > 0){
     monster.hitPoints -=  getAttackDamage(player.attackMin, player.attackMax) 
    }  
    
    else (monster.hitPoints > 0){
      player.hitPoints -= getAttackDamage(monster.attackMin, attackMax)
    } if(monster.hitPoints <= 0){
        boss.hitPoints -= getAttackDamage(player.attackMin, player.attackMax)
    }

    while(boss.hitPoints > 0){
        player.hitPoints -= getAttackDamage(boss.attackMin, boss.attackMax)
    }


}