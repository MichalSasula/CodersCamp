const cat = {
    init: function(sound){
        this.sound = sound;
        return this;
    },
    makeSound: function() {
        console.log(this.sound);
    }
}

function objectCreate(proto){
    const obj = {};
    Object.setPrototypeOf(obj, proto);
    return obj; 
}

const mark = objectCreate(cat).init('mewuuUUF');
mark.makeSound();

const waffles = Object.create(cat).init('mrrroooow');
waffles.makeSound();

console.log('is mark a cat?', cat.isPrototypeOf(mark));