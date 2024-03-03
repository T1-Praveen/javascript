var numberOfButtons = document.querySelectorAll(".button").length; 

for (var j = 0; j < numberOfButtons; j++) { 
document.querySelectorAll(".button")[j].addEventListener("click", function() { 
	var buttonStyle = this.innerHTML; 
	sound(buttonStyle); 
	animation(buttonStyle); 
}); 
} 

document.addEventListener("keypress", function(event){
  sound(event.key);
  animation(event.key);
})

function sound(key) { 
  switch (key) { 
    case "a" || "A": 
    var sound1 = new Audio("sounds/clap.wav"); 
    sound1.play(); 
    break; 
  
    case "s": 
    var sound2 = new Audio("sounds/hihat.wav"); 
    sound2.play(); 
    break; 
  
    case "d": 
    var sound3 = new Audio('sounds/kick.wav'); 
    sound3.play(); 
    break; 
  
    case "f": 
    var sound4 = new Audio('sounds/openhat.wav'); 
    sound4.play(); 
    break; 

    case "g": 
    var sound5 = new Audio('sounds/boom.wav'); 
    sound5.play(); 
    break; 
  
    case "h": 
    var sound6 = new Audio('sounds/ride.wav'); 
    sound6.play(); 
    break; 
  
    case "j": 
    var sound5 = new Audio('sounds/snare.wav'); 
    sound5.play(); 
    break; 
  
    case "k": 
    var sound6 = new Audio('sounds/tom.wav'); 
    sound6.play(); 
    break; 
  
    case "l": 
    var sound7 = new Audio('sounds/tink.wav'); 
    sound7.play(); 
    break; 
  
    default: console.log(key); 
  } 
  } 
  
  function animation(currentKey) { 
    var activeButton = document.querySelector("." + currentKey); 
    
    activeButton.classList.add("animation"); 
    
    setTimeout(function() { 
      activeButton.classList.remove("animation"); 
    }, 100); 
    } 
    