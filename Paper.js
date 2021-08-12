class Paper{
    constructor(x,y)
    {
        var options={
            restitution:0.3,
            density:1.2
        }
        this.image=loadImage("paper.png")
        this.radius=20
        this.body=Bodies.circle(x,y,20,options)
        
        World.add(world,this.body)
        
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,0,60,60)
        pop()
    }
}