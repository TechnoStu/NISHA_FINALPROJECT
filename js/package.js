var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg1");
var img3= document.getElementById("myImg2");
var img4= document.getElementById("myImg3")
var img5= document.getElementById("myImg4")
var img6= document.getElementById("myImg5")
var img7= document.getElementById("myImg6")
var img8= document.getElementById("myImg7")
var img9= document.getElementById("myImg8")
var img10= document.getElementById("myImg9")
var img11= document.getElementById("myImg10")
var img12= document.getElementById("myImg11")
var img13= document.getElementById("myImg12")
var img14= document.getElementById("myImg13")
var img15= document.getElementById("myImg14")
var img16= document.getElementById("myImg15")
var img17= document.getElementById("myImg16")
var img18= document.getElementById("myImg17")

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}

img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}
img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}
img9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}
img10.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}
img11.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}
img12.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}
img13.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}
img14.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}
img15.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}
img16.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}
img17.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}
img18.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}