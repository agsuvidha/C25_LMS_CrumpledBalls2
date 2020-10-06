class paper{
     constructor(x,y,radius){
         var options={
             "isStatic" : false,
             "restitution" : 0.3,
             "friction" : 0.5,
             "density" : 1.2

            }
   this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
   this.image = loadImage("sprites/paper.png");  
    }
 
 display()
 {
 var crcl = this.body.position;
 fill('green');
 image(this.image, this.body.position.x,this.body.position.y , 70, 70 );
 }
}