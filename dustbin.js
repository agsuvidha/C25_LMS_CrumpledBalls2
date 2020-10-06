class dust{
    constructor(x,y,width,height){
        var opt={
            'isStatic' : true,
            
        }
    
    this.body = Bodies.rectangle(x,y,width,height,opt);
    this.image = loadImage("sprites/dustbingreen.png");
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    }
display(){
 var pos = this.body.position;
 rectMode(CENTER);
 imageMode(CENTER);
 fill("white");
 
 rect(pos.x,pos.y,this.width,this.height);
 image(this.image,1000,500,185,187); 
}
}