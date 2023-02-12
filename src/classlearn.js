class anim{
    constructor(name,age){
        this.name=name;
        this.age =age;
}}


class humen extends anim{
    constructor(name,age){
        super(name,age);
    }
    
    say(world){
        console.log('说的了一次'+world);
    }
}


const jason = new humen('jason',35);
jason.say('apple')

const cat = new anim('a',5);

console.log(cat);