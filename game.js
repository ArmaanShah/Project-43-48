class Game{
constructor(){

  this.title2 = createElement('h2');

}
asteroidRand(){
  if(World.frameCount%40==0){
    var asteroid=createSprite(0,randomNumber(0,displayHeight),50,50);
    
    asteroid.addImage(Asteroid);
    asteroid.velocityX=3;
    asteroid.lifetime=100;
    
   }
   }
getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
}
    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      
    }
    rocket1=createSprite(50,displayHeight-130,50,50);
    rocket1.addImage(Rocket);

    rocket2=createSprite(450,displayHeight-130,50,50);
    rocket2.addImage(Rocket);
    rocket1.scale=.2;
rocket2.scale=.2;
rockets=[rocket1,rocket2];

  }
play(){
    form.hide();

    Player.getPlayerInfo();

    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance +=10
        player.update();

      }


      if(allPlayers !== undefined){
        background(rgb(0,0,0));


        
        if(frameCount%30==0){
          var asteroid=createSprite(0,random(0,displayHeight-200),50,50);
          
          asteroid.addImage(Asteroid);
          asteroid.velocityX=5;
          asteroid.lifetime=displayWidth/5;
          asteroid.scale= .1
          asteroidGroup.add(asteroid);
         }
      }
      for (var i = 0; i < displayHeight; i=i+20) {
        stroke("white")

        line(displayWidth/2,i,displayWidth/2,i+10);
      }

//index of the array
var index = 0;

//x and y position of the cars
var x = 50 ;
var y;

for(var plr in allPlayers){
  //add 1 to the index for every loop
  index = index + 1 ;
 
  //position the cars a little away from each other in x direction
  x = x + 450;
  //use data form the database to display the cars in y direction
  y = displayHeight - allPlayers[plr].distance-150;
  rockets[index-1].x = x;
  rockets[index-1].y = y;
  if(index===player.index){
if(asteroidGroup.isTouching(rockets[index-1])){
  player.updateDistance()
player.distance=0;
}

  }
}
this.title2.style('color', "white");

this.title2.html("THE END ");
    this.title2.position(displayWidth/2 - 50, 0);


if(player.distance > 840){
//gameState=2;
  player.score=player.score+1;
  player.rank=player.rank+1;
  Player.updatePlayerRank(player.rank);
  player.updateDistance();
player.distance=0;
console.log(player.distance)

}

fill("white");
text(player.score, 725,800)
drawSprites()



}
end(){
//if(player.score=5){
//gameState=2;



}
}