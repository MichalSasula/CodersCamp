const cat = {
    makeSound: function() {
        console.log(this.sound);
    }
}

const mark = Object.create(cat);
mark.sound = 'mewuuUUF';
mark.makeSound();

const waffles = Object.create(cat);
waffles.sound = 'mrrroooow';
waffles.makeSound();

console.log('is mark a cat?', cat.isPrototypeOf(mark));