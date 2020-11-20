class Form{
    constructor(){}

display(){
   
var title = createElement("h1")
title.html("F1 Racing Game")
title.position(490,100)
var input = createInput("PlayerName")    
var button = createButton("Start")
input.position(450,200)
button.position(480,300)

button.mousePressed(function(){
    input.hide()
    button.hide()

    var name = input.value()
    playerCount+=1
    player.update(name)
    player.updateCount(playerCount)
    var greeting = createElement("h3")
    greeting.html("HI! Welcome "+name)
    greeting.position(490,300)

})

}

}




