class ground{
    constructor(x,y,width,hight){
       var option={
           isStatic:true
        }
        this.body=bodies.rectangle(x,y,width,hight,option);
        this.width=width;
        this.height=hight;
        World.add(world, this.body);
         }
         display(){
             var pose=this.position;
             rectMode(CENTRE);
             fill("red");
             rect(pose.x, pose.y, this.width, this.height);
         }
    
}