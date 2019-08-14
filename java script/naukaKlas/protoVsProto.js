let cat = { 
    breed: 'munchkin'
    
}

let myCat = {
    name: 'Fluffykins'
}

Object.setPrototypeOf(myCat, cat);

function Dog(){
}

Dog.prototype.breed = "Bulldog";

function Giraffe(){
    
}