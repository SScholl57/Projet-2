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
let racialStrength = 0;
let racialPerception = 0;
let racialEndurance = 0;
let racialCharisma = 0;
let racialIntelligence = 0;
let racialAgility = 0;
let racialLuck = 0;
let bonusStrength = racialStrength;
let bonusPerception = racialPerception;
let bonusEndurance = racialEndurance;
let bonusCharisma = racialCharisma;
let bonusIntelligence = racialIntelligence;
let bonusAgility = racialAgility;
let bonusLuck = racialLuck;
let fullStrength = 1;
let fullPerception = 1;
let fullEndurance = 1;
let fullCharisma = 1;
let fullIntelligence = 1;
let fullAgility = 1;
let fullLuck = 1;
let statPoint = 20;
let maxHitPoint = 30;
let actualHitPoint = 30;
let maxManaPoint = 10;
const raceSelector = document.getElementById('raceSelect');

raceSelector.addEventListener('input', onRaceSelectorChanged);

function onRaceSelectorChanged(){
  if(raceSelect.value === "Argonian"){
      racialStrength = 0;
      racialPerception = 0;
      racialEndurance = 0;
      racialCharisma = 0;
      racialIntelligence = 1;
      racialAgility = 1;
      racialLuck = 0;
      updateBonus()
      updateFull()
}
  if(raceSelect.value === "Breton"){
      racialStrength = 0;
      racialPerception = 0;
      racialEndurance = 0;
      racialCharisma = 1;
      racialIntelligence = 1;
      racialAgility = 0;
      racialLuck = 0;
      updateBonus()
      updateFull()
}
  if(raceSelect.value === "DarkElf"){
      racialStrength = 0;
      racialPerception = 1;
      racialEndurance = 0;
      racialCharisma = 0;
      racialIntelligence = 1;
      racialAgility = 0;
      racialLuck = 0;
      updateBonus()
      updateFull()
  }
  if(raceSelect.value === "HighElf"){
      racialStrength = 0;
      racialPerception = 0;
      racialEndurance = 0;
      racialCharisma = 0;
      racialIntelligence = 2;
      racialAgility = 0;
      racialLuck = 0;
      updateBonus()
      updateFull()
  }
  if(raceSelect.value === "Imperial"){
      racialStrength = 0;
      racialPerception = 0;
      racialEndurance = 0;
      racialCharisma = 2;
      racialIntelligence = 0;
      racialAgility = 0;
      racialLuck = 0;
      updateBonus()
      updateFull()
  }
  if(raceSelect.value === "Khajiit"){
      racialStrength = 0;
      racialPerception = 0;
      racialEndurance = 0;
      racialCharisma = 0;
      racialIntelligence = 0;
      racialAgility = 2;
      racialLuck = 0;
      updateBonus()
      updateFull()
  }
  if(raceSelect.value === "Nord"){
      racialStrength = 1;
      racialPerception = 0;
      racialEndurance = 0;
      racialCharisma = 0;
      racialIntelligence = 0;
      racialAgility = 1;
      racialLuck = 0;
      updateBonus()
      updateFull()
  }
  if(raceSelect.value === "Orc"){
      racialStrength = 2;
      racialPerception = 0;
      racialEndurance = 0;
      racialCharisma = 0;
      racialIntelligence = 0;
      racialAgility = 0;
      racialLuck = 0;
      updateBonus()
      updateFull()
  }
  if(raceSelect.value === "Redguard"){
    racialStrength = 1;
    racialPerception = 0;
    racialEndurance = 1;
    racialCharisma = 0;
    racialIntelligence = 0;
    racialAgility = 0;
    racialLuck = 0;
    updateBonus()
    updateFull()
  }
  if(raceSelect.value === "WoodElf"){
    racialStrength = 0;
    racialPerception = 1;
    racialEndurance = 0;
    racialCharisma = 0;
    racialIntelligence = 0;
    racialAgility = 1;
    racialLuck = 0;
    updateBonus()
    updateFull()
  }
}

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
        actualHitPoint = maxHitPoint;
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
    updateFull();
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
    updateFull();
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
    updateFull();
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
    updateFull();
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
    updateFull();
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
    updateFull();
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
    updateFull();
}



function updatehp() {
    let maxHitPointDiv = document.getElementById("maxHitPointDiv");
    maxHitPointDiv.innerText = maxHitPoint;
    let actualHitPointDiv = document.getElementById("actualHitPointDiv");
    actualHitPointDiv.innerText = actualHitPoint;
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

function updateLvl() {
    let levelDiv = document.getElementById("levelDiv");
    levelDiv.innerText = level;
}

function updateBonus(){
    bonusStrength = racialStrength;
    bonusPerception = racialPerception;
    bonusEndurance = racialEndurance;
    bonusCharisma = racialCharisma;
    bonusIntelligence = racialIntelligence;
    bonusAgility = racialAgility;
    bonusLuck = racialLuck;
    let bonusStrengthDiv = document.getElementById("bonusStrengthDiv");
    bonusStrengthDiv.innerText = bonusStrength;
    let bonusPerceptionDiv = document.getElementById("bonusPerceptionDiv");
    bonusPerceptionDiv.innerText = bonusPerception;
    let bonusEnduranceDiv = document.getElementById("bonusEnduranceDiv");
    bonusEnduranceDiv.innerText = bonusEndurance;
    let bonusCharismaDiv = document.getElementById("bonusCharismaDiv");
    bonusCharismaDiv.innerText = bonusCharisma;
    let bonusIntelligenceDiv = document.getElementById("bonusIntelligenceDiv");
    bonusIntelligenceDiv.innerText = bonusIntelligence;
    let bonusAgilityDiv = document.getElementById("bonusAgilityDiv");
    bonusAgilityDiv.innerText = bonusAgility;
    let bonusLuckDiv = document.getElementById("bonusLuckDiv");
    bonusLuckDiv.innerText = bonusLuck;
}

function damageHealth() {
  if (actualHitPoint == 0) {
    console.log("Vous êtes déjà mort")
    return
  }

  actualHitPoint = actualHitPoint - (Math.ceil(Math.random() * 10))
  let actualHitPointDiv = document.getElementById("actualHitPointDiv");
  actualHitPointDiv.innerText = actualHitPoint;
  if (actualHitPoint < 0) {
    actualHitPoint = 0
    console.log("Vous êtes mort.")
    let actualHitPointDiv = document.getElementById("actualHitPointDiv");
    actualHitPointDiv.innerText = actualHitPoint;
  }
}

function healHealth() {
  if (actualHitPoint == maxHitPoint) {
    console.log("Vous êtes complètement guéri")
    return
  }

  actualHitPoint = actualHitPoint + (Math.ceil(Math.random() * 10))
  let actualHitPointDiv = document.getElementById("actualHitPointDiv");
  actualHitPointDiv.innerText = actualHitPoint;
  if (actualHitPoint > maxHitPoint) {
    actualHitPoint = maxHitPoint
    console.log("Vous êtes guéri.")
    let actualHitPointDiv = document.getElementById("actualHitPointDiv");
    actualHitPointDiv.innerText = actualHitPoint;
  }

}

function updateFull (){
  fullStrength = strength + bonusStrength;
  fullPerception = perception + bonusPerception;
  fullEndurance = endurance + bonusEndurance;
  fullCharisma = charisma + bonusCharisma;
  fullIntelligence = intelligence + bonusIntelligence;
  fullAgility = agility + bonusAgility;
  fullLuck = luck + bonusLuck;
  let fullStrengthDiv = document.getElementById("fullStrengthDiv");
  fullStrengthDiv.innerText = fullStrength;
  let fullPerceptionDiv = document.getElementById("fullPerceptionDiv");
  fullPerceptionDiv.innerText = fullPerception;
  let fullEnduranceDiv = document.getElementById("fullEnduranceDiv");
  fullEnduranceDiv.innerText = fullEndurance;
  let fullCharismaDiv = document.getElementById("fullCharismaDiv");
  fullCharismaDiv.innerText = fullCharisma;
  let fullIntelligenceDiv = document.getElementById("fullIntelligenceDiv");
  fullIntelligenceDiv.innerText = fullIntelligence;
  let fullAgilityDiv = document.getElementById("fullAgilityDiv");
  fullAgilityDiv.innerText = fullAgility;
  let fullLuckDiv = document.getElementById("fullLuckDiv");
  fullLuckDiv.innerText = fullLuck;
}

let levelDiv = document.getElementById("levelDiv");
levelDiv.innerText = level;
let maxHitPointDiv = document.getElementById("maxHitPointDiv");
maxHitPointDiv.innerText = maxHitPoint;
let actualHitPointDiv = document.getElementById("actualHitPointDiv");
actualHitPointDiv.innerText = actualHitPoint;
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
let bonusStrengthDiv = document.getElementById("bonusStrengthDiv");
bonusStrengthDiv.innerText = bonusStrength;
let bonusPerceptionDiv = document.getElementById("bonusPerceptionDiv");
bonusPerceptionDiv.innerText = bonusPerception;
let bonusEnduranceDiv = document.getElementById("bonusEnduranceDiv");
bonusEnduranceDiv.innerText = bonusEndurance;
let bonusCharismaDiv = document.getElementById("bonusCharismaDiv");
bonusCharismaDiv.innerText = bonusCharisma;
let bonusIntelligenceDiv = document.getElementById("bonusIntelligenceDiv");
bonusIntelligenceDiv.innerText = bonusIntelligence;
let bonusAgilityDiv = document.getElementById("bonusAgilityDiv");
bonusAgilityDiv.innerText = bonusAgility;
let bonusLuckDiv = document.getElementById("bonusLuckDiv");
bonusLuckDiv.innerText = bonusLuck;
let fullStrengthDiv = document.getElementById("fullStrengthDiv");
fullStrengthDiv.innerText = fullStrength;
let fullPerceptionDiv = document.getElementById("fullPerceptionDiv");
fullPerceptionDiv.innerText = fullPerception;
let fullEnduranceDiv = document.getElementById("fullEnduranceDiv");
fullEnduranceDiv.innerText = fullEndurance;
let fullCharismaDiv = document.getElementById("fullCharismaDiv");
fullCharismaDiv.innerText = fullCharisma;
let fullIntelligenceDiv = document.getElementById("fullIntelligenceDiv");
fullIntelligenceDiv.innerText = fullIntelligence;
let fullAgilityDiv = document.getElementById("fullAgilityDiv");
fullAgilityDiv.innerText = fullAgility;
let fullLuckDiv = document.getElementById("fullLuckDiv");
fullLuckDiv.innerText = fullLuck;