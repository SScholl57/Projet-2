console.clear();
const name = "Chante Sloubi";
const job = "Barde";
let level = 1;
let experience = 0;
let experienceRequired = 100;
let monsterKillCount = 0;
let strength = 1;
let intelligence = 1;
let endurance = 1;
let charisma = 1;
let agility = 1;
let luck = 1;
let perception = 1;
let statPoint = 20;
let maxHitPoint = 30
let maxManaPoint = 10;

function RandomExp(min, max) {
    if(statPoint != 0){
        return
    }else{
    min = Math.ceil(1)
    max = Math.floor(6)
    return Math.floor(Math.random() * (max - min) + min)
}
}

function levelUp(){
    if(statPoint != 0)
        return

    if (level >= 99){  
        console.log(`Vous avez déjà atteint le niveau maximum.`)
        return
    }

    experience = experience + (Math.ceil(Math.random() * 10));
    console.log(`Votre expérience total est de ${experience}.`)
    updateExp()

    if(experience >= experienceRequired){
        level = level + 1;
        experience = experience - experienceRequired;
        experienceRequired = experienceRequired + (level * 10);
        let experienceRequiredDiv = document.getElementById("experienceRequiredDiv");
        experienceRequiredDiv.innerText = experienceRequired;
        console.log(`Le joueur ${name} atteint le niveau ${level} en tant que ${job}`); 
        console.log(`Votre expérience total est de ${experience}.`)
        statPoint = statPoint + 1;
        console.log(`Vous avez ${statPoint} points de stat à dépenser.`)
        maxHitPoint = maxHitPoint + endurance;
        console.log(`Vos PV maximum sont maintenant de ${maxHitPoint}.`)
        updateLvl()
        updatestr()
        updateend()
        updatehp()
        updateExp()
    }
}

function Dice20(){
    let dice = '';
    min = Math.ceil(1);
    max = Math.floor(21);
    dice = Math.floor(Math.random() * (max - min) + min);
    let diceDiv20 = document.getElementById("diceDiv20");
    let diceDiv = document.getElementById("diceDiv");
    diceDiv.innerText = dice;
    if(dice == 20){
        diceDiv20.innerText = "Critical Hit !";
        return
    }
    if (dice > 10){
        diceDiv20.innerText = "Hit !";
        return
    }
    diceDiv20.innerText = "Fail...";
}

function addstr(amount) {
    if (strength == 1 && amount == -1)
      return
  
    if (statPoint == 0 && amount == 1)
      return

    if (strength == 10 && amount == 1)
      return
  
    strength = Math.max(strength + amount, 1);
    statPoint = statPoint - amount
    updatestr();
}

function addint(amount) {
    if (intelligence == 1 && amount == -1)
      return
  
    if (statPoint == 0 && amount == 1)
      return

    if (intelligence == 10 && amount == 1)
      return
  
    intelligence = Math.max(intelligence + amount, 1);
    statPoint = statPoint - amount
    updateint();
}

function addend(amount) {
    if (endurance == 1 && amount == -1)
      return
  
    if (statPoint == 0 && amount == 1)
      return

    if (endurance == 10 && amount == 1)
      return
  
    endurance = Math.max(endurance + amount, 1);
    statPoint = statPoint - amount
    updateend();
}

function addcha(amount) {
    if (charisma == 1 && amount == -1)
      return
  
    if (statPoint == 0 && amount == 1)
      return
    
    if (charisma == 10 && amount == 1)
      return
  
    charisma = Math.max(charisma + amount, 1);
    statPoint = statPoint - amount
    updatecha();
}

function addagi(amount) {
    if (agility == 1 && amount == -1)
      return
  
    if (statPoint == 0 && amount == 1)
      return
    
    if (agility == 10 && amount == 1)
      return
  
    agility = Math.max(agility + amount, 1);
    statPoint = statPoint - amount
    updateagi();
}

function addper(amount) {
    if (perception == 1 && amount == -1)
      return
  
    if (statPoint == 0 && amount == 1)
      return
    
    if (perception == 10 && amount == 1)
      return
  
    perception = Math.max(perception + amount, 1);
    statPoint = statPoint - amount
    updateper();
}

function addluc(amount) {
    if (luck == 1 && amount == -1)
      return
  
    if (statPoint == 0 && amount == 1)
      return
  
    if (luck == 10 && amount == 1)
      return

    luck = Math.max(luck + amount, 1);
    statPoint = statPoint - amount
    updateluc();
}



function updatehp() {
    let maxHitPointDiv = document.getElementById("maxHitPointDiv");
    maxHitPointDiv.innerText = maxHitPoint;
}

function updatestr() {
    let strengthDiv = document.getElementById("strengthDiv");
    strengthDiv.innerText = strength;
    let statPointDiv = document.getElementById("statPointDiv");
    statPointDiv.innerText = statPoint;
}

function updateper() {
    let perceptionDiv = document.getElementById("perceptionDiv");
    perceptionDiv.innerText = perception;
    let statPointDiv = document.getElementById("statPointDiv");
    statPointDiv.innerText = statPoint;
}

function updateend() {
    let enduranceDiv = document.getElementById("enduranceDiv");
    enduranceDiv.innerText = endurance;
    let statPointDiv = document.getElementById("statPointDiv");
    statPointDiv.innerText = statPoint;
}

function updatecha() {
    let charismaDiv = document.getElementById("charismaDiv");
    charismaDiv.innerText = charisma;
    let statPointDiv = document.getElementById("statPointDiv");
    statPointDiv.innerText = statPoint;
}

function updateint() {
    let intelligenceDiv = document.getElementById("intelligenceDiv");
    intelligenceDiv.innerText = intelligence;
    let statPointDiv = document.getElementById("statPointDiv");
    statPointDiv.innerText = statPoint;
    maxManaPoint = (intelligence * 10)
    let maxManaPointDiv = document.getElementById("maxManaPointDiv");
    maxManaPointDiv.innerText = maxManaPoint;
}

function updateagi() {
    let agilityDiv = document.getElementById("agilityDiv");
    agilityDiv.innerText = agility;
    let statPointDiv = document.getElementById("statPointDiv");
    statPointDiv.innerText = statPoint;
}

function updateluc() {
    let luckDiv = document.getElementById("luckDiv");
    luckDiv.innerText = luck;
    let statPointDiv = document.getElementById("statPointDiv");
    statPointDiv.innerText = statPoint;
}

function updateExp() {
    let experienceDiv = document.getElementById("experienceDiv");
    experienceDiv.innerText = experience;
}

function updateLvl () {
    let levelDiv = document.getElementById("levelDiv");
    levelDiv.innerText = level;
}

let levelDiv = document.getElementById("levelDiv");
levelDiv.innerText = level;
let maxHitPointDiv = document.getElementById("maxHitPointDiv");
maxHitPointDiv.innerText = maxHitPoint;
let maxManaPointDiv = document.getElementById("maxManaPointDiv");
maxManaPointDiv.innerText = maxManaPoint;
let strengthDiv = document.getElementById("strengthDiv");
strengthDiv.innerText = strength;
let perceptionDiv = document.getElementById("perceptionDiv");
perceptionDiv.innerText = perception;
let enduranceDiv = document.getElementById("enduranceDiv");
enduranceDiv.innerText = endurance;
let charismaDiv = document.getElementById("charismaDiv");
charismaDiv.innerText = charisma;
let intelligenceDiv = document.getElementById("intelligenceDiv");
intelligenceDiv.innerText = intelligence;
let agilityDiv = document.getElementById("agilityDiv");
agilityDiv.innerText = agility;
let luckDiv = document.getElementById("luckDiv");
luckDiv.innerText = luck;
let statPointDiv = document.getElementById("statPointDiv");
statPointDiv.innerText = statPoint;
let experienceRequiredDiv = document.getElementById("experienceRequiredDiv");
experienceRequiredDiv.innerText = experienceRequired;