var counter = 0;
var begin;
var myImages = ["party.png","me.png","ring.png","baby.png","kiss.png","kuromigiggle.gif","dior.png","date.png","love.png"];
var myDesc = ["A Perfect Party For My Perfect Baby","A Handsome Husband (MEEEEEEE)","A Ring From Your Perfect Husband","A Mini Us &#129402;","A Million Kisses From Me","More Kuromi &#129325;&#129325;&#129325;","ALL THE DIOR","A Bunch Of Dates In Khobar	&#129325;","Last But Not Least I Want to Make You The Happiest Girl In The World &#129401;"];

function scrollImage(whichButton){
	var imageHolder = document.getElementById("images");
	var imageDesc = document.getElementById("divDescription");
    if(whichButton=="right"){
		counter ++;
	}
	else{
		counter--;
	}
	if(counter > myImages.length - 1){
		counter = 0;//this is a comment
	}
	if(counter < 0){
		counter = myImages.length -1;
	}
	imageHolder.src = "images/" + myImages[counter];
	imageDesc.innerHTML = myDesc[counter];
}
function startSlideshow(){
            var autoScroll = document.getElementById("autoScroll");
            if(autoScroll.checked==true){
                document.getElementById("Rbutton").disabled = true;
                document.getElementById("Lbutton").disabled = true;
                begin = setInterval(playSlideshow,2600);
           
            }else{
                document.getElementById("Rbutton").disabled = false;
                document.getElementById("Lbutton").disabled = false;
                clearInterval(begin);
        }
}
function playSlideshow(){
        var imageHolder = document.getElementById("images");
        var imageDesc = document.getElementById("divDescription");
        counter++;
        if (counter > myImages.length - 1){
        counter = 0;//this is a comment
        }
        imageHolder.src = "images/" + myImages[counter];
        imageDesc.innerHTML = myDesc[counter];
    
}
