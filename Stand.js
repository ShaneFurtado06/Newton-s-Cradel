class Stand{

    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,400,20,options);
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }

    display(){
        var posX=this.body.position.x;
        var posY=this.body.position.y;

        rectMode(CENTER);
        stroke ("black")
        fill("white");
        rect(posX,posY,400,20);
    }

}