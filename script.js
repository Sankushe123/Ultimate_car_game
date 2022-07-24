var bluecar = document.getElementById("bluecar");
var racecar  = document.getElementById("racecar");
var result = document.getElementById("result");
const score = document.getElementById("score");
var game = document.getElementById("game");
var gumpsound = document.getElementById("jumpsound");
var over = document.getElementById("over");
var play = document.getElementById("play")
var counter = 0;

//blue car move
bluecar.addEventListener("animationiteration",function(){
    var random = ((Math.floor(Math.random()*3)) * 130)
    bluecar.style.left=random + "px";
    play.play();
    counter++;
})

//race car move

window.addEventListener("keydown",function(e){
    if(e.keyCode == '39')
    {
        var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
        if(racecarleft<260)
        {
            racecar.style.left = (racecarleft + 130) + "px";
        }
        jumpsound.play();
    }
    if(e.keyCode == '37')
    {
        var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
        if(racecarleft>0)
        {
            racecar.style.left = (racecarleft - 130) + "px";
        }
        jumpsound.play();
    }
    // if(e.keyCode == '38')
    // {
    //     var racecartop = parseInt(window.getComputedStyle(racecar).getPropertyValue("top"));
        
    //     racecar.style.top = (racecartop - 10) + "px";
        
    // }
    // if(e.keyCode == '40')
    // {
    //     var racecartop = parseInt(window.getComputedStyle(racecar).getPropertyValue("top"));
        
    //     racecar.style.top = (racecartop + 10) + "px";
        
    // }
})


//function game over

setInterval(function Gameover(){
    var bluecartop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"));
    var bluecarleft =parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"));
    var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
    // var racecartop = parseInt(window.getComputedStyle(racecar).getPropertyValue("top"));

    if((bluecarleft === racecarleft) && (bluecartop > 370) && (bluecartop < 450)){
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score  : ${counter}`;

        counter=0;
        over.play();
        play.pause();
    }

},10)