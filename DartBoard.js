 class DartBoard extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("DartBoard.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
    hitstatus = 0;
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
     hitstatus = 1;
   }
  }

score(){
       if (this.Visiblity < 0 && this.Visiblity > -10){
         score = score + 100;
         scorestatus = 1;
       }
     }
   }
