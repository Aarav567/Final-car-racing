class Form{
    constructor(){
   
        this.Input = createInput("").attribute("placeholder","enter your name")
        this.PlayButton = createButton("Play")
        this.titleImg = createImg("assets/title.png","Car racing")
        this.Greeting = createElement("h2")
    }
    setElementsPosition(){
        this.Input.position(width/2-110, height/2-80)
        this.PlayButton.position(width/2-90, height/2-20)
        this.titleImg.position(120,50)
        this.Greeting.position(width/2-300, height/2-100)
    }
    setElementsStyle(){
        this.Input.class("customInput")
        this.PlayButton.class("customButton")
        this.titleImg.class("gameTitle")
        this.Greeting.class("greeting")
    }
    hide(){
        this.Input.hide()
        this.PlayButton.hide()
        this.titleImg.hide()
        this.Greeting.hide()
    }
    handleMousePressed(){
        this.PlayButton.mousePressed(()=>{
            this.PlayButton.hide()
            this.Input.hide()
            var message = `
            hello  ${this.Input.value()}
            </br >  wait for another player to join;  `
            this.Greeting.html(message)
            playercount += 1
        });
    }
    
    display(){
      this.setElementsPosition()
      this.setElementsStyle()
      this.handleMousePressed()

    }
}