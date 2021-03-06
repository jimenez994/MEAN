class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed =3;
        this.strength = 3;
    }
    sayName(){
        console.log(`I am the great ${this.name}`);
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
        console.log(`this Sake is good, gain 10 health -> ${this.health} `);
    }

}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        console.log(this.health);
    }

}

const ninja1 = new Ninja('Mike');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const sensei1 = new Sensei('Max');
sensei1.showStats();
sensei1.speakWisdom();



// ,In addition, a Sensei should have a new attribute called wisdom
// , and the default should be 10. Finally, add the speakWisdom() method.speakWisdom() should call the drinkSake() method from the Ninja class,
//  before console.logging a wise message.