class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        console.log(`${this.name} is attacking someone ${this.name}`)
        if( target instanceof Unit ) {
            target.resiliance -= this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
            console.log(`${this.name} ${this.text}`)
            if (this.stat == "resilience") {
                target.resilience += this.magnitude;
            } else if (this.stat == "power") {
                target.power += this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)

const hardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3)
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", 2)
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "resilience", 2)

console.log(redBeltNinja)
console.log(blackBeltNinja)

redBeltNinja.attack(blackBeltNinja)
console.log(redBeltNinja)
console.log(blackBeltNinja)


// console.log(hardAlgo)
// console.log(unhandledPromiseRejection)
// console.log(pairProgramming)

// hardAlgo.play(redBeltNinja)

// redBeltNinja.attack(blackBeltNinja)
// console.log(redBeltNinja)