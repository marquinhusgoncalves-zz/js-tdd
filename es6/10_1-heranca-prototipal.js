// class
function Animal(kind, sound) {
    //constructor
    this.kind = kind;
    this.sound = sound;
}

Animal.prototype.hello = function() {
    console.log(`${this.sound} I'm a ${this.kind}!`);
}

const dog = new Animal('dog', 'auau');
const cat = new Animal('cat', 'miaw');
