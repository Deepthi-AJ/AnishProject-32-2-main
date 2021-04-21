const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var totalCh = 3;
var balanceCh = totalCh;
var playerState = "onSling";
var score = 0;
var level = 1;
var gamerState = 1;
scoreDis = []; // Displaying the score
lvlDis = []; // Displaying the level
totalDis = []; // Displaying the total score
var scorestatus = 0, hitstatus = 0;


function preload() {
}

function setup(){
    var canvas = createCanvas(1530,715); // Create a canvas with x = 1530, y = 715
    engine = Engine.create();
    world = engine.world;

    //Creating the objects
    ground = new Ground(765,height,1530,20);
    platform = new Ground(250, 270, 100, 240);
    platform2 = new Ground(900,130,50,10);
    platform3 = new Ground(950,120,10,100);
    dartBoard = new DartBoard(900,100);

    this.shuriken = new Shuriken(200,50);
    // ninja = new Ninja(shuriken.body,{x:150, y:100}); //

    // console.log("level in setup =",level);

    // for level 1
     ninja = new Ninja(shuriken.body,{x:200, y:50}, 200, 15);
 

    // for level 2
   // ninja = new Ninja(shuriken.body,{x:200, y:50}, 300, 30);
}

function draw(){
    // console.log("level in draw =",level);
    
    // for level 1
    // ninja = new Ninja(this.shuriken.body,{x:200, y:50}, 200, 15);

    background(0); // Background is black (To show night background)

    Engine.update(engine);

    textSize(50) //Big text
    text("score = " + score, 900,50); //Text for score
    text("level = " + level, 900,300); //Text for level

    

     if(level === 2){ // If level is 2 then object's positions are changed
        
    //     // shuriken = new Shuriken(150,100);
    //     // platform = new Ground(150,460,100,240);
    //     // platform2 = new Ground(900,130,50,10);
    //     // platform3 = new Ground(950,120,10,100);
    //     ninja = new Ninja(shuriken.body,{x:150, y:100}, 300, 50);

     ninja.changePosition(300,30);
    //   
     }

    //Displaying the scores
    ninja.display();    
    ground.display();

    platform2.display();
    platform3.display();

    dartBoard.display();
    dartBoard.score();

    shuriken.display();
    platform.display();
    // console.log("Level = ", level); //To see the level in consoles
    // console.log(gamerState); //

}

function mouseDragged(){
        Matter.Body.setPosition(shuriken.body, {x: mouseX , y: mouseY}); //When dragged the x and y is changed to mouseX and mouse
}

function mouseReleased(){
    ninja.fly(); // In Ninja.js 
    playerState = "launched";
}

function keyPressed(){
    if(scorestatus===1 || hitstatus === 0){

        if(keyCode === 32 ){
            shuriken.trajectory = [];
            Matter.Body.setPosition(shuriken.body, {x:  200, y: 50});
            dartBoard = new DartBoard(900,100);
            ninja.attach(shuriken.body);
            gamerState = gamerState + 1;
            totalCh = balanceCh - 1;
        }

        if(gamerState === 3 || gamerState === 6 || gamerState === 9 || gamerState === 12){
            level = level + 1;
            
        }

        scorestatus = 0;
    }
}