function Person(saying){
    this.saying = saying;

}

Person.prototype.talk = function(){
    console.log('I say: ', this.saying)
}

function spawn(constructor){
    var obj = {};
    Object.setPrototypeOf(obj,constructor.prototype);//można zamiast tej linijki i linijki wyżej użyć Object.create(...,...)
    // var argsArray = Array.from(arguments);
    var argsArray = Array.prototype.slice.apply(arguments);
    //console.log(argsArray);
    return constructor.apply(obj, argsArray.slice(1)) || obj;
}



var crockford = spawn(Person,'SEMICOLANS!!!1one1');
console.log('hello',crockford);

var crockford2 = new Person('Semicolans!!!1one1');
console.log('hello',crockford);
crockford.talk();

 