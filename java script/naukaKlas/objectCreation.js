function talk(){
    //console.log(this)
    console.log(this.sound);
}

let animal = {talk, sound: 'jestem zwierzeciem'}
let cat = {sound: 'meow!'}
let dog = {sound: 'woof!'}
Object.setPrototypeOf(cat, animal);
Object.setPrototypeOf(dog,animal);
animal.talk = function() {console.log('i am little teapot'+this.sound)};

let prarieDog = {
    howl: function() {console.log(this.sound.toUpperCase())}
}

Object.setPrototypeOf(prarieDog, dog);