const charecter = document.getElementById("char");
const bowDown = document.getElementById("uppart");
const block = document.getElementById("block");
const bird =  document.getElementById("bird");
const score_p = document.getElementById("score");
const lost_p = document.getElementById("lost");
let score = 0;


function jump(){
    if(charecter.classList != "animate"){
        charecter.classList.add("animate");
    };
    
    setTimeout(function(){
        charecter.classList.remove("animate");
    },500);  

}


function down(){
    if(charecter.classList != "upperAnimate"){
        charecter.classList.add("upperAnimate");
    };
    
    setTimeout(function(){
        charecter.classList.remove("upperAnimate");
    },2000);
}


    
    


var checkDead = setInterval(function(){
    var charecterTop = parseInt(window.getComputedStyle(charecter).getPropertyValue("top"));
    var charecterDown = parseInt(window.getComputedStyle(charecter).getPropertyValue("rotate"));

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var birdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));

    score_p.innerText++;
   
    if(blockLeft <20 && blockLeft>0 && charecterTop >=130){
        
        block.style.animation = "none";
        block.style.display = "none";
        bird.style.animation = "none";
        bird.style.display = "none";
        alert("your score is:-" + score_p.innerText);
        score_p.innerText ="score:-";
        lost_p.innerHTML = "you lost !!(by tree)" ;
    }else if(birdLeft <20 && birdLeft>0 && charecterDown < 45) {
        block.style.animation = "none";
        block.style.display = "none";
        bird.style.animation = "none";
        bird.style.display = "none";
        lost_p.innerHTML = "you lost !!(by bird) ";
    }else{

    }
    
},10);