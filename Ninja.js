class Ninja{

    // imageX = 200;
    // imageY = 15;

     constructor(bodyA, pointB, imgX, imgY){
 
        this.imageX = imgX;
        this.imageY = imgY;
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 10
        }
        this.image = loadImage('download.png');
        this.pointB = pointB
        this.ninja = Constraint.create(options);
        World.add(world, this.ninja);
    }
    
    attach(body){
        this.ninja.bodyA = body;
    }
    
    fly(){
        this.ninja.bodyA = null;
    }

    changePosition(imgX,imgY){
        this.imageX = imgX;
        this.imageY = imgY;
    }

    display(){
        image(this.image,this.imageX,this.imageY);
        if(this.ninja.bodyA){
            var pointA = this.ninja.bodyA.position;
            var pointB = this.pointB;
        }
    }
    
}
