class Player{
    constructor(){}
    
    getCount(){
      var referrance= database.ref("playerCount")
      referrance.on("value",function(data){playerCount = data.val() })
    }
    
    update(name){
        var index = "player"+playerCount
     database.ref(index).set({name:name})
    }

    updateCount (count){
database.ref("/").update({
    playerCount:count
})
    }

}