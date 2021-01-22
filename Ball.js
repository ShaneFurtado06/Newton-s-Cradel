class Ball{

    constructor(x,y){
        var options={
            isStatic:false,
            'restitution':1,
            'friction':0,
            'density':0.8
        }

        this.body=Bodies.circle(x,y,40,options);
        this.x=x;
        this.y=y;

        World.add(world,this.body);
    }

    display(){
        var posX=this.body.position.x;
        var posY=this.body.position.y;

        push();
        translate(posX,posY);
        rectMode(CENTER);
        ellipseMode(RADIUS);
        strokeWeight(0);       
        fill("white");
        ellipse(0,0,40,40);

        pop();
    }

}