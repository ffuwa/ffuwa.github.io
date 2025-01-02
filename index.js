var chr = document.getElementById("chr");
var block = document.getElementById("block");
function jump(){
	if(chr.classList != "animate"){
		chr.classList.add("animate");
	}
	setTimeout(function(){
		chr.classList.remove("animate");
	},500);
}

var checkDead = setInterval(function(){
	var chrTop = parseInt(window.getComputedStyle(chr).getPropertyValue("top"));
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	if(blockLeft<20 && blockLeft>0 && chrTop>=130){
		block.style.animation="none"
		block.style.display="none"
		alert("haah du dog....... pinsamt")
	}
},10);