class Pendulum
{
constructor(x,y,radius)
{
var options=
{
    restitution:1.2,
    friction:3,
    density:5
}
this.body= Bodies.circle(x,y,radius,options);
this.radius=radius;
World.add(world, this.body);
}

display()
{
    ellipseMode(RADIUS);
    strokeWeight(4)
stroke("grey")
    fill ("grey");
   ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
}

}