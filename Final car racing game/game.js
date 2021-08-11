class Game{
    constructor(){

    }
    getState(){
        var gameStateref = database.ref("gameState")
        gameStateref.on("value", function(data){
            gameState=data.val()
        })
    }
    start(){
        form = new Form()
        form.display()
        player = new Player()
        car1 = createSprite(200,300,20,50);
        car2 = createSprite(300,300,20,50);
        car1.addImage("firstCar" ,car1Img)
        car2.addImage("secondCar" ,car2Img)

    }
}
// .ref() is used to refer to the database nodes or it taes us to database
// .on() is used to read the values from the nodes
// data.val() is used to bring the values that is read by .on() to the game 
// and it also keeps updating the nodes of the database