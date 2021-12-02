var charecter = document.getElementById("uppart");
var block = document.getElementById("block");
function down(){
    if(charecter.classList != "upperAnimate"){
        charecter.classList.add("upperAnimate");
    };
    
    setTimeout(function(){
        charecter.classList.remove("upperAnimate");
    },500);
}