class Log
{

  constructor(speed)
  {

    this.x = random([100,300,500,700,900]);
    this.y = height-random([550,650,750,1350,1450,1550]);
    this.width = 1500;
    this.height = 800;
    this.speed = speed;
    this.spt = createSprite(this.x,this.y,this.width,this.height);
    this.spt.velocityX = this.speed;
    var x = Math.round(random(1,2))
    if(x == 1)
    {

      this.spt.addAnimation("log1s", logAnimation1)

    }
    else if(x == 2)
    {

      this.spt.addAnimation("log2s", logAnimation2)

    }
    this.spt.scale=0.1;

  }

}
