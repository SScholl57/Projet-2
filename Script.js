console.clear();
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
let classStrength = 0;
let classPerception = 0;
let classEndurance = 0;
let classCharisma = 0;
let classIntelligence = 0;
let classAgility = 0;
let classLuck = 0;
let bonusStrength = racialStrength + classStrength;
let bonusPerception = racialPerception + classPerception;
let bonusEndurance = racialEndurance + classEndurance;
let bonusCharisma = racialCharisma + classCharisma;
let bonusIntelligence = racialIntelligence + classIntelligence;
let bonusAgility = racialAgility + classAgility;
let bonusLuck = racialLuck + classLuck;
let fullStrength = 1;
let fullPerception = 1;
let fullEndurance = 1;
let fullCharisma = 1;
let fullIntelligence = 1;
let fullAgility = 1;
let fullLuck = 1;
let statPoint = 20;
let maxHitPoint = 10;
let actualHitPoint = 10;
let actualManaPoint = 10;
let maxManaPoint = 10;
const raceSelector = document.getElementById('raceSelect');

raceSelector.addEventListener('input', onRaceSelectorChanged);

function onRaceSelectorChanged(){
  racialStrength = 0;
  racialPerception = 0;
  racialEndurance = 0;
  racialCharisma = 0;
  racialIntelligence = 0;
  racialAgility = 0;
  racialLuck = 0;
  if(raceSelect.value === "Argonian"){
      racialIntelligence = 1;
      racialAgility = 1;
      document.getElementById("raceImg").src="Image/Argonien.png"
}
  if(raceSelect.value === "Breton"){
      racialCharisma = 1;
      racialIntelligence = 1;
      document.getElementById("raceImg").src="Image/Breton.png"
}
  if(raceSelect.value === "DarkElf"){
      racialPerception = 1;
      racialIntelligence = 1;
      document.getElementById("raceImg").src="Image/DarkElf.png"
  }
  if(raceSelect.value === "HighElf"){
      racialIntelligence = 2;
      document.getElementById("raceImg").src="Image/HighElf.png"
  }
  if(raceSelect.value === "Imperial"){
      racialCharisma = 2;
      document.getElementById("raceImg").src="Image/Imperial.png"
  }
  if(raceSelect.value === "Khajiit"){
      racialAgility = 2;
      document.getElementById("raceImg").src="Image/Khajiit.png"
  }
  if(raceSelect.value === "Nord"){
      racialStrength = 1;
      racialAgility = 1;
      document.getElementById("raceImg").src="Image/Nord.png"
  }
  if(raceSelect.value === "Orc"){
      racialStrength = 2;
      document.getElementById("raceImg").src="Image/Orc.png"
  }
  if(raceSelect.value === "Redguard"){
    racialStrength = 1;
    racialEndurance = 1;
    document.getElementById("raceImg").src="Image/Redguard.png"
  }
  if(raceSelect.value === "WoodElf"){
    racialPerception = 1;
    racialAgility = 1;
    document.getElementById("raceImg").src="Image/WoodElf.png"
  }
  updateBonus();
  updateFull();
  updatehp();
  updateMana();
}

const classSelector = document.getElementById('classSelect');

classSelector.addEventListener('input', onClassSelectorChanged);

function onClassSelectorChanged () {
  classStrength = 0;
  classPerception = 0;
  classEndurance = 0;
  classCharisma = 0;
  classIntelligence = 0;
  classAgility = 0;
  classLuck = 0;
  if(classSelect.value === "Acrobat"){
    classEndurance = 1;
    classAgility = 1;
  }
  if(classSelect.value === "Agent"){
    classPerception = 1;
    classAgility = 1;
  }
  if(classSelect.value === "Archer"){
    classStrength = 1;
    classAgility = 1;
  }
  if(classSelect.value === "Assassin"){
    classIntelligence = 1;
    classAgility = 1;
  }
  if(classSelect.value === "Barbarian"){
    classStrength = 2;
  }
  if(classSelect.value === "Bard"){
    classCharisma = 1;
    classIntelligence = 1;
  }
  if(classSelect.value === "Battlemage"){
    classStrength = 1;
    classIntelligence = 1;
  }
  if(classSelect.value === "Crusader"){
    classEndurance = 1;
    classIntelligence = 1;
  }
  if(classSelect.value === "Healer"){
    classIntelligence = 2;
  }
  if(classSelect.value === "Knight"){
    classStrength = 1;
    classCharisma = 1;
  }
  if(classSelect.value === "Mage"){
    classIntelligence = 2;
  }
  if(classSelect.value === "Monk"){
    classEndurance = 1;
    classAgility = 1;
  }
  if(classSelect.value === "Nightblade"){
    classIntelligence = 1;
    classAgility = 1;
  }
  if(classSelect.value === "Pilgrim"){
    classPerception = 1;
    classCharisma = 1;
  }
  if(classSelect.value === "Rogue"){
    classCharisma = 1;
    classAgility = 1;
  }
  if(classSelect.value === "Scout"){
    classEndurance = 1;
    classAgility = 1;
  }
  if(classSelect.value === "Sorcerer"){
    classEndurance = 1;
    classIntelligence = 1;
  }
  if(classSelect.value === "Spellsword"){
    classStrength = 1;
    classIntelligence = 1;
  }
  if(classSelect.value === "Thief"){
    classAgility = 2;
  }
  if(classSelect.value === "Warrior"){
    classStrength = 1;
    classEndurance = 1;
  }
  if(classSelect.value === "Witchhunter"){
    classIntelligence = 1;
    classAgility = 1;
  }
  updateBonus()
  updateFull()
  updatehp();
  updateMana();
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
    const expInput = document.getElementById('InputExp').valueAsNumber;
    if(isNaN(expInput))
        return

    if(statPoint != 0)
        return

    if (level >= 99){  
        console.log(`Vous avez déjà atteint le niveau maximum.`)
        return
    }

    experience = experience + expInput;
    updateExp()

    while(experience >= experienceRequired){
        level = level + 1;
        experience = experience - experienceRequired;
        experienceRequired = experienceRequired + (level * 10);
        let experienceRequiredDiv = document.getElementById("experienceRequiredDiv");
        experienceRequiredDiv.innerText = experienceRequired;
        statPoint = statPoint + 1;
        maxHitPoint = maxHitPoint + fullEndurance;
        actualHitPoint = maxHitPoint;
        updateLvl()
        updatestat()
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
    updatestat();
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
    updatestat();
    updateFull();
    updateMana();
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
    updatestat();
    updateFull();
    updatehp();
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
    updatestat();
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
    updatestat();
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
    updatestat();
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
    updatestat();
    updateFull();
}



function updatehp() {
    if (level == 1){
      maxHitPoint = fullEndurance * 10;
      actualHitPoint = maxHitPoint;
    }
    let maxHitPointDiv = document.getElementById("maxHitPointDiv");
    maxHitPointDiv.innerText = maxHitPoint;
    let actualHitPointDiv = document.getElementById("actualHitPointDiv");
    actualHitPointDiv.innerText = actualHitPoint;
}

function updateMana() {
  actualManaPoint = maxManaPoint;
  let actualManaPointDiv = document.getElementById("actualManaPointDiv");
  actualManaPointDiv.innerText = actualManaPoint;
}

function updatestat() {
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
    bonusStrength = racialStrength + classStrength;
    bonusPerception = racialPerception + classPerception;
    bonusEndurance = racialEndurance + classEndurance;
    bonusCharisma = racialCharisma + classCharisma;
    bonusIntelligence = racialIntelligence + classIntelligence;
    bonusAgility = racialAgility + classAgility;
    bonusLuck = racialLuck + classLuck;
}

function damageHealth() {
  const hpInput = document.getElementById('InputHp').valueAsNumber;
  if(isNaN(hpInput))
  return

  if (actualHitPoint == 0) {
    console.log("Vous êtes déjà mort")
    return
  }

  actualHitPoint = actualHitPoint - hpInput
  let actualHitPointDiv = document.getElementById("actualHitPointDiv");
  actualHitPointDiv.innerText = actualHitPoint;
  if (actualHitPoint <= 0) {
    actualHitPoint = 0
    console.log("Vous êtes mort.")
    let actualHitPointDiv = document.getElementById("actualHitPointDiv");
    actualHitPointDiv.innerText = actualHitPoint;
  }
}

function healHealth() {
  const hpInput = document.getElementById('InputHp').valueAsNumber;
  if(isNaN(hpInput))
  return

  if (actualHitPoint == maxHitPoint) {
    console.log("Vous êtes complètement guéri")
    return
  }

  actualHitPoint = actualHitPoint +  hpInput
  let actualHitPointDiv = document.getElementById("actualHitPointDiv");
  actualHitPointDiv.innerText = actualHitPoint;
  if (actualHitPoint >= maxHitPoint) {
    actualHitPoint = maxHitPoint
    console.log("Vous êtes guéri.")
    let actualHitPointDiv = document.getElementById("actualHitPointDiv");
    actualHitPointDiv.innerText = actualHitPoint;
  }
}


function costMana() {
  const manaInput = document.getElementById('InputMana').valueAsNumber;
  if(isNaN(manaInput))
  return

  if (actualManaPoint == 0) {
    console.log("Vous n'avez plus de mana")
    return
  }

  actualManaPoint = actualManaPoint - manaInput
  let actualManaPointDiv = document.getElementById("actualManaPointDiv");
  actualManaPointDiv.innerText = actualManaPoint;
  if (actualManaPoint <= 0) {
    actualManaPoint = 0
    console.log("Vous avez vidé votre mana.")
    let actualManaPointDiv = document.getElementById("actualManaPointDiv");
    actualManaPointDiv.innerText = actualManaPoint;
  }
}

function regenMana() {
  const manaInput = document.getElementById('InputMana').valueAsNumber;
  if(isNaN(manaInput))
  return

  if (actualManaPoint == maxManaPoint) {
    console.log("Votre mana est déjà à son maximum")
    return
  }

  actualManaPoint = actualManaPoint +  manaInput
  let actualManaPointDiv = document.getElementById("actualManaPointDiv");
  actualManaPointDiv.innerText = actualManaPoint;
  if (actualManaPoint >= maxManaPoint) {
    actualManaPoint = maxManaPoint
    console.log("Votre mana à atteint son maximum.")
    let actualManaPointDiv = document.getElementById("actualManaPointDiv");
    actualManaPointDiv.innerText = actualManaPoint;
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
  maxManaPoint = (fullIntelligence * 10)
  let maxManaPointDiv = document.getElementById("maxManaPointDiv");
  maxManaPointDiv.innerText = maxManaPoint;
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
let actualManaPointDiv = document.getElementById("actualManaPointDiv");
actualManaPointDiv.innerText = actualManaPoint;
let maxManaPointDiv = document.getElementById("maxManaPointDiv");
maxManaPointDiv.innerText = maxManaPoint;
let statPointDiv = document.getElementById("statPointDiv");
statPointDiv.innerText = statPoint;
let experienceRequiredDiv = document.getElementById("experienceRequiredDiv");
experienceRequiredDiv.innerText = experienceRequired;
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