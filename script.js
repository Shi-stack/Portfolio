function hamburgerMenu(){
  const toggle= document.querySelector('.hamburger');
  const sidebar= document.querySelector('.sidebar');
  toggle.classList.toggle('active');
  sidebar.classList.toggle('active');
}


/**********************************  Image Slider JS goes here  ************************************* */
/**************************************************************************************************** */

var i = 0; 
var image = new Array();   
// LIST OF IMAGES 
image[0] = "images/img-1.jpeg"; 
image[1] = "images/img-2.jpeg"; 
image[2] = "images/img-3.jpeg"; 
image[3] = "images/img-4.jpeg"; 
image[4] = "images/img-5.jpeg"; 
image[5] = "images/img-6.jpeg";   

var k = image.length-1;    

var caption = new Array(); 
// LIST OF CAPTIONS 
caption[0] = "Project-01"; 
caption[1] = "Project-02"; 
caption[2] = "Project-03";
caption[3] = "Project-04"; 
caption[4] = "Project-05"; 
caption[5] = "Project-06";  
 


var link= new Array();   
// LIST OF LINKS 
link[0] = "https://shi-stack.github.io/toggle-js/"; 
link[1] = "https://shi-stack.github.io/random-images/"; 
link[2] = "https://shi-cpnt262-a3.herokuapp.com/";   

function swapImage(){ 
var el = document.getElementById("mydiv"); 
el.innerHTML=caption[i]; 
var img = document.getElementById("slide"); 
img.src= image[i]; 
var a = document.getElementById("link"); 
a.href= link[i]; 

if(i < k ) { i++;}  
else  { i = 0; } 
setTimeout("swapImage()",5000); 
} 
function addLoadEvent(func) { 
var oldonload = window.onload; 
if (typeof window.onload != 'function') { 
window.onload = func; 
} else  { 
window.onload = function() { 
if (oldonload) { 
oldonload(); 
} 
func(); 
} 
} 
} 
addLoadEvent(function() { 
swapImage(); 
});  