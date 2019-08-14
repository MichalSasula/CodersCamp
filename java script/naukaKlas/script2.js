console.log('stara wersja')

const Brick = function(x,y,graphic,width, height,type,live){
    Object.assign(this,{x,y,graphic,width,height,type,live})
    this.statyczna = function(){console.log('uruchomiono metodę statyczną')}
}

Brick.statyczna2 = function(){console.log('uruchomiono drugą metodę statyczną')}

Brick.prototype.print = function(){console.log('Drukuję detale')};
Brick.prototype.init = function(){console.log('Dodano na planszę')};

const BrickBlue = function(x,y,width,height,type)
{
    Object.assign(this,{x,y,width,height,type})
    this.graphic = 'blue.pgn';
    this.live = 10;
}

BrickBlue.prototype = Object.create(Brick.prototype);
BrickBlue.constructor = BrickBlue;



const BrickRed = function (...args){
    Brick.call(this, args);
    this.graphic = 'red.pgn';
    this.live = 15;
}

BrickRed.prototype = Object.create(Brick.prototype);
BrickRed.constructor = BrickRed;

const BrickGreen = function(x,y,width,height,type){
    Object.assign(this,{x,y,width,heig,type});
    this.graphic = 'green.pgn';
    this.live = 20;
}

BrickGreen.prototype = Object.create(Brick.prototype);
BrickGreen.constructor = BrickGreen;

const BrickAnim = function(speed,...args) {
    Brick.call(this,...args);
    this.speed = speed;
}

BrickAnim.prototype = Object.create(Brick.prototype);
BrickAnim.constructor = BrickAnim;