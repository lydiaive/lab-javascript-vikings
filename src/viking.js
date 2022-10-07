// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } return `${this.name} has received ${damage} points of damage`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return "A Saxon has died in combat"
        } return `A Saxon has received ${damage} points of damage`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    } 
    addViking(viking) {
        this.vikingArmy.push(viking)
    } 
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let randomSaxIndex = Math.floor(this.saxonArmy.length * Math.random())
        let randomSaxon = this.saxonArmy[randomSaxIndex];
        let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
        let result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxIndex,1)
        }
        return result;
    } 
    saxonAttack() {
        let randomVikIndex = Math.floor(this.vikingArmy.length * Math.random())
        let randomViking = this.vikingArmy[randomVikIndex];
        let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())]
        let result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikIndex,1)
        }
        return result;
    }
    showStatus() {
        if (this.saxonArmy.length ===0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length ===0)  {
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
/* let war1 = new War;
let viking1 = new Viking("John", 30, 30)
let saxon1 = new Saxon(30, 30)
console.log(war1.addViking(viking1));
console.log(war1.addSaxon(saxon1));
console.log(war1.saxonAttack());
console.log(war1.showStatus()) */


