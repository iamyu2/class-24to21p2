
//
var grid = 50;
var width = 1366;
var grassHeight = 100;

//groups
var carGroup1, logGroup1;

//gamestate
var gameState = "play";

//animation
var carAnimation1, carAnimation2, logAnimation1, logAnimation2, playerAnimation, cityAnimation;


//sprites
var city;
var school;
var player;

//ni
var ni;
ni = "0";

function preload()
{
 
  //player
  playerAnimation = loadAnimation("Player-03.png");

  //cars
  carAnimation1 = loadAnimation("car1.png");
  carAnimation2 = loadAnimation("car2.png");

  //logs
  logAnimation1 = loadAnimation("log1.png");
  logAnimation2 = loadAnimation("log2.png");

  //city
  cityAnimation = loadAnimation("city1.png")

}

function setup()
{

  //canvas
  createCanvas(1366, 2700);

  //groups
  carGroup1 = new Group();
  logGroup1 = new Group();

  //grass and roads
  for(i = 0; i < 6; i++)
  {

    var bottomgrass1 = createSprite(683, height - 50 -(i*400), width, grassHeight);
    bottomgrass1.shapeColor = "gray";

    if(i % 2 === 0)
    {

      var road = createSprite(683, height - 150 -(i*400) - grassHeight, width, 300);
      road.shapeColor = "black";

    }

  }

  //player
  player = createSprite(683, 2650, 10, 10);
  player.addAnimation("Player", playerAnimation);
  player.scale = 0.05;

  //city
  city = createSprite(683, 500, 10, 10);
  city.addAnimation("City",cityAnimation);

}

function draw()
{

  //beckground
  background("skyblue");
  translate(0, -player.y + 700 - 150);

  //logs and cars
  logCar();

  //control for player
  if(keyDown("up")){player.y = player.y - 5}
  if(keyDown("down")){player.y = player.y + 5}
  if(keyDown("left")){player.x = player.x - 5}
  if(keyDown("right")){player.x = player.x + 5}

  //touthing movment1
  if(carGroup1.isTouching(player))
  {

    player.x = 683;
    player.y = 2650;

  }

  //touching movment2
  if(logGroup1.isTouching(player))
  {

    player.x = player.x - 3;

  }
  else if((player.y > height - 1500 && player.y < height - 1350) ||
          (player.y > height - 800 && player.y < height - 550) ||
          (player.y > height) ||
          (player.x < 0) ||
          (player.x > width))
  {

    player.x = 683;
    player.y = 2650;

  }

  //touching movment3
  if(city.isTouching(player))
  {

    gameState = "win"

  }
  
  //win
  if(gameState == "win")
  {

    stroke("Green");
    fill("Green");
    textSize(40);
    text("CONGATULATIONS! You made it", 683, 500);
    logGroup1.destroyEach();
    carGroup1.destroyEach();
    city.destroy();

  }

  //draw
  drawSprites();

}

function logCar()
{

  if(ni == "0")
  {
 
    //cars
    for(i = 0; i < 40; i++)
    {
  
      cars = new Car(2);
      carGroup1.add(cars.spt);
    
    }
    
    //logs
    for(i = 0; i < 40; i++)
    {
  
      logs = new Log(2);
      logGroup1.add(logs.spt);
  
    }

    //ni
    ni = "1";

  }

  else if(frameCount % 600 === 0)
  {

    //cars
    for(i = 0; i < 40; i++)
    {
  
      cars = new Car(2);
      carGroup1.add(cars.spt);
    
    }
    
    //logs
    for(i = 0; i < 40; i++)
    {
  
      logs = new Log(2);
      logGroup1.add(logs.spt);
  
    }

  }

}



