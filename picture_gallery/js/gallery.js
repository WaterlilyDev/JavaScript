function upDate(preview_pic){
    // Get the div with id="image"
    let image_div = document.getElementById("image");
    //displaying the image hovered over
    image_div.style.backgroundImage = "url('" + preview_pic.src + "')";
    //displaying the text
    image_div.innerHTML = preview_pic.alt;     
      }
      
function unDo(){
   let image_div= document.getElementById("image");
   //displaying original background
   image_div.style.backgroundImage="";
   //displaying orginal text
   image_div.textContent="Hover over an image below to display here.";
}  
function set_tabIndex(){
   var image = document.querySelectorAll('flex');
   for(var i=0;i<ImageTrackList.length;i++){
      image[i].setAttribute('tabindex', i +1);
   }
document.addEventListener('DOMContent Loaded' ,set_tabIndex);
}