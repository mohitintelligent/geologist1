class sand {
    constructor(x,y,radius){
        var option={
        'density':1,
        'friction': 5.0,
        'restitution':1.3
        }
        this.body=Bodies.circle(x,y,radius,option);
        this.x=x;
        this.y=y;
        this.radius=radius;
        
    }
    display(){
        var pose=this.position;
        var angle = this.body.angle;
        push();
        translate(pose.x,pose.y);
        fill("grey");
        rotate(angle); 
        ellipseMode(CENTER);
        ellipse(pose.x, pose.y, this.radius);
        pop();
    }
}