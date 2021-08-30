function add()
{ 
   var img=document.createElement("img");
   img.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
   var src=document.getElementById("i");
   src.appendChild(img);
}