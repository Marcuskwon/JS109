

class Player {
  static rollDice() {
    return Math.floor((Math.random() * 11) + 2);
  }
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = Player.rollDice();
    this.intel = Player.rollDice();
  }
  
  heal(amount) {
    this.health = this.health + amount;
  }
  
  hurt(amount) {
    this.health = this.health - amount;
  }
}


class Warrior extends Player {
  constructor(name) {
    super(name);
    this.strength = this.strength + 2;
  }
}

class Magician extends Player {
  constructor(name) {
    super(name);
    this.intel = this.intel + 2;
  }
}

class Paladins extends Player {
  constructor(name) {
    super(name);
  }
}

class Bards extends Magician {
  constructor(name) {
    super(name);
    this.intel = this.intel + 2;
  }
  
  createPotion() {
    console.log('creating portion');
  }
}

let armorMethod = {
 attachArmor() {
   console.log('attaching armor');
 },
 
 removeArmor() {
   console.log('removing armor');
   }
};

let spellMethod = {
  castSpell(spell) {
    console.log(spell);
  }
};

Object.assign(Warrior.prototype, armorMethod);
Object.assign(Magician.prototype, spellMethod);
Object.assign(Paladins.prototype, armorMethod, spellMethod);

let warrior = new Warrior('marcus');
let magician = new Magician('olivia');
let bard = new Bards('zico');
let paladin = new Paladins('zico');

console.log(warrior.strength);
console.log(warrior.health); // log 100
warrior.heal(50)
console.log(warrior.health); // log 150
warrior.hurt(50);
console.log(warrior.health); // log 100

warrior.attachArmor();
warrior.removeArmor();

magician.castSpell('fire'); // log fire
bard.castSpell('fire'); // log fire
paladin.castSpell('fire'); // log fire
//warrior.castSpell('fire');; // error -> correct

bard.createPotion(); // log creating portion