const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

// set the health on the screen.
adjustHealthBars(chosenMaxLife); 

function attackMonster(mode){
    let maxDamage
    if (mode === 'ATTACK'){
        maxDamage = ATTACK_VALUE;
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('You won !');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('Monster won !');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <=0){
        alert('Its a draw');
    }

}

function attackHandler(){
    attackHandler('ATTACK');
}

function strongAttackHandler(){
    attackHandler('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);