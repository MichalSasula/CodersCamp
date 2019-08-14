// Klasyczny sposób
console.log('nowa wersja');

class Brick{
    constructor(x,y,graphic,width,height,type,live){
        Object.assign(this,{x,y,graphic,width,height,type,live});
    }
    print(){console.log('Wypisz detale')};
    init(){console.log('Dodano na planszę')};
    static statyczna(){console.log('uruchomiono metodę statyczną')}
}

class BrickBlue extends Brick{
    constructor(x,y,width,height,type){
        Object.assign(x,y,width,height,type);
        this.graphic = 'blue.png';
        this.live = 10;
    }
}

class BrickRed extends Brick{
    constructor(x,y,width,height,type){
        Object.assign(x,y,width,height,type);
        this.graphic = 'red.png';
        this.live = 15;
    }
}

class BrickGreen extends Brick{
    constructor(x,y,width,height,type){
        Object.assign(x,y,width,height,type);
        this.graphic = 'green.png';
        this.live = 20;
    }
}

class BrickAnim extends Brick{
    constructor(speed,...args){
            super(...args);
            this.speed = speed;
        }

    moveHorizontal(){console.log(`poruszam się poziomo z szybkością ${this.speed}`)}
}





//Stary sposób