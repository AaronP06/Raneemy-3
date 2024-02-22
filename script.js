function doSomething(){
	var greeting = document.getElementById("txtName");
	
	if(greeting.value.trim()==""){
		alert("Type something, silly");
		greeting.value = "";
	}
	else if(greeting.value.toLowerCase().trim()=="iwillmarrymyperfectaaron"){
		myAlert("I LOVE YOU BABYYYYYY!!","happy.png");
	}
	else{
		alert("Wrong baby :(");
	}
}
function myAlert(msg, img){//arguments
	var divAlert = document.createElement("div");
	var myImage = document.createElement("img");
	divAlert.id = "divAlert";
	divAlert.style.position = "absolute";
	divAlert.style.width = "600px";
	divAlert.style.height = "300px";
	divAlert.style.fontsize ="26px";
	divAlert.style.backgroundColor = "pink";
	divAlert.style.border = "solid #fb6f92 5px";
	divAlert.align = "center";
	document.body.appendChild(divAlert);
	myImage.id = "myImage";
	myImage.style.position = "absolute";
	myImage.style.width = "70%";
	myImage.style.height = "80%";
	myImage.style.left = "100px";
	myImage.style.top = "30px";
	myImage.style.zIndex = "4";
	myImage.style.color = "green";
	myImage.src = img;
	divAlert.appendChild(myImage);
	divAlert.style.left = document.body.clientWidth/2 - divAlert.clientWidth/2 + "px" ;
	divAlert.style.top = "150px" ;
	divAlert.style.zIndex = "10"
	
	var divMsg = document.createElement("div");
	divMsg.id = "divMsg";
	divMsg.style.position = "relative";
	divMsg.style.width = "100%";
	divMsg.style.height = "80%"
	divMsg.style.fontsize = "20pt";
	divMsg.style.backgroundColor = "pink";
	divMsg.innerHTML = msg;
	divAlert.appendChild(divMsg);
	
	var btnClose = document.createElement("input")
	btnClose.id ="btnClose";
	btnClose.style.position = "absolute";
	btnClose.style.top ="275px";
	btnClose.style.left ="275px";
	btnClose.type = "button";
	btnClose.value = "Next Pageies";
	btnClose.setAttribute ("onclick","SendToNextPage('Last')");
	btnClose.style.fontsize = "15pt";
	btnClose.style.zIndex = "10";
	btnClose.focus();
	divAlert.appendChild(btnClose);
}
function closeAlert(){
	var divAlert = document.getElementById("divAlert")
	document.body.removeChild(divAlert);
	location.reload();

}
function SendToNextPage(page){
	window.open(page + ".html");
}