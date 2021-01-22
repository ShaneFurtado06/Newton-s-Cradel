//Newton's Cradel

//Matter.js variables:
const Body=Matter.Body;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;
const Render=Matter.Render;


//Game variables

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
   
    engine=Engine.create();
    world=engine.world;

    //Balls
    b1=new Ball(window.innerWidth-900,window.innerHeight-100);
    b2=new Ball(window.innerWidth-820,window.innerHeight-100);
    b3=new Ball(window.innerWidth-740,window.innerHeight-100);
    b4=new Ball(window.innerWidth-660,window.innerHeight-100);
    b5=new Ball(window.innerWidth-580,window.innerHeight-100);    

    //Stand
    stand=new Stand(window.innerWidth-750,window.innerHeight-window.innerHeight+20);

    //Chains
    chain1=new Chain(b1.body,stand.body,-160, 0); 
    chain2=new Chain(b2.body,stand.body,-80, 0);
    chain3=new Chain(b3.body,stand.body,0, 0);
    chain4=new Chain(b4.body,stand.body,80, 0); 
    chain5=new Chain(b5.body,stand.body,160, 0);

}

function draw(){
    background("black");
    Engine.update(engine);

    //Balls
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();

    //Stand
    stand.display();

    //Chains
    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();

    textSize(40);
    fill("red");
    text("Newton's Cradel",window.innerWidth-350,window.innerHeight-200);
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(b1.body,b1.body.position,{x:-80,y:-75});
    }
}