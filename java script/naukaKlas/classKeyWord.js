class Mammal{
    constructor(sound){
        this.sound = sound;
    }

    talk(){
        return this.sound;
    }


}


class Dog extends Mammal{
    constructor(){
        super('Woffeliwofffff');

    }
}

let fluffykins = new Dog('woof!');
let y = fluffykins.sound;
//console.log(y);

let x = Dog.prototype.talk.bind({sound: 'ROAR'})();
console.log(x);

console.log(Dog.prototype.isPrototypeOf(fluffykins));