
function upDate(previewPic){
     // Get the div with id="image"
     let imageDiv = document.getElementById("image");

     // Update the background image URL to the source of the hovered thumbnail
     imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
 
     // Update the text inside the div to the alt text of the hovered thumbnail
     imageDiv.innerHTML = previewPic.alt;
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
     
       }
   
       function unDo(){
        // Get the div with id="image"
    let imageDiv = document.getElementById("image");

    // Revert the background image to its original state (e.g., none or default CSS styling)
    imageDiv.style.backgroundImage = "";

    // Revert the text to its original message
    imageDiv.innerHTML = "Hover over an image below to display here.";
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
           
       }