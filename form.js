class Form{

constructor(){
this.input= createInput('Player Name')
this.button = createButton('Play');
this.greeting = createElement('h2');
this.reset = createButton('Reset');
this.reset2= createButton('ResetAlso');
this.title = createElement('h2');
}
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
}
display(){
    this.title.html("2 Player Space Asteroid Defense Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);
    this.reset2.position(displayWidth-20,20);
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });

      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      })

        this.reset2.mousePressed(()=>{
            player.updateReset();
      
          });


}

}