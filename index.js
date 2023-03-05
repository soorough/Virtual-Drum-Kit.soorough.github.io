//assigned sounds to buttons

var len = document.querySelectorAll(".drum").length;

for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);

    })
    
}

//key pressing fuctionality


document.addEventListener("keypress", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);

})

    function makeSound(key) {
        switch (key) {
            case "j":
                var kick = new Audio("sounds/kick.wav");
                kick.play();
                break;
            case "k":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "l":
                var hihat = new Audio("sounds/Hi-Hat.wav");
                hihat.play();
                break;
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "a":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "s":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "d":
                var tom3 = new Audio("sounds/tom-4.mp3");
                tom3.play();
                break;
            
            default:console.log(buttonInnerHTML);
                break;
        }
    }
    
    
function buttonAnimation(curKey) {
    var activeButton = document.querySelector("."+ curKey );
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
