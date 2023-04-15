var tag=document.getElementsByClassName("head");


for(i=0;i<=2;i++){
tag[i].addEventListener("click", function(e){
	 let targetEle=e.target.parentNode.getElementsByClassName("cnt")[0];
	 targetEle.classList.toggle("hidden");
	 e.target.getElementsByClassName("icon-wrapper")[0].classList.toggle("hidden");
	 e.target.getElementsByClassName("hello")[0].classList.toggle("hidden");
 });
 }