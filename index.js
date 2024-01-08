// PART 1

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"]
};
// let's create a loop that logs each item in Robin's inventory.
for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i]);
  }
//   Let's give Robin a companion to travel with – a furry friend they call "Leo"


const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat"
    }
  };
//   let's give Robin's feline friend a friend of his own
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
      }
    }
  };
//   Let's give Robin the following method:
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
      }
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(${this.name} rolled a ${result}.);
    }
  };
  
  
//   let's test this method by calling adventurer.roll() a few times.
  
  adventurer.roll();
  adventurer.roll();
  adventurer.roll();
  const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
      }
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(${this.name} rolled a ${result}.);
    }
  };
  
  
  les test this method by calling adventurer.roll() a few times.
  
  adventurer.roll();
  adventurer.roll();
  adventurer.roll();
//   PART 3
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
// PART 4

class Character {
  static MAX_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = Character.MAX_HEALTH;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(${this.name} rolled a ${result}.);
  }
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];

  constructor(name, role) {
    super(name);
    this.role = role;
  }
}

const robin = new Adventurer("Robin", "Fighter");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo", "Cat");
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory = ["small hat", "sunglasses"];
// PART 5

class Healer extends Adventurer {
  constructor(name) {
    super(name, "Healer");
  }
}

class HealerFactory {
  constructor() {
    this.healers = [];
  }

  createHealer(name) {
    const healer = new Healer(name);
    this.healers.push(healer);
    return healer;
  }

  findHealerByName(name) {
    return this.healers.find(healer => healer.name === name);
  }
}

const healerFactory = new HealerFactory();
const healer1 = healerFactory.createHealer("Alice");
const healer2 = healerFactory.createHealer("Bob");

const foundHealer = healerFactory.findHealerByName("Alice");
console.log(foundHealer);
// PART 6
class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];

  constructor(name, role) {
    super(name);
    this.role = role;
  }

  duel(opponent) {
    while (this.health > 50 && opponent.health > 50) {
      const roll1 = this.roll();
      const roll2 = opponent.roll();
      if (roll1 > roll2) {
        opponent.health -= 1;
      } else {
        this.health -= 1;
      }
      console.log(${this.name} rolled a ${roll1}. ${opponent.name} rolled a ${roll2}.);
      console.log(${this.name}'s health: ${this.health}. ${opponent.name}'s health: ${opponent.health}.);
    }
    const winner = this.health > 50 ? this.name : opponent.name;
    console.log(The winner of the duel is ${winner}!);
  }
}

const robin = new Adventurer("Robin", "Fighter");
const opponent = new Adventurer("Opponent", "Wizard");
robin.duel(opponent);
// PART 7

const robin = new Character("Paul");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("dele");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Djigne");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small




  

  

