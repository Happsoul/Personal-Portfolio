var container = document.getElementById("imagePopup");
var popupImage = document.getElementById("popupImage");
var imagePressed = false;

function showImage(imageSrc) {
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imageSrc;
     
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "block";
    document.body.style.overflow = "hidden";
  }

// function to hide the image when we click on cross button
function closeImage() {
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "none";
  document.body.style.overflow = "auto";
}

popupImage.onclick = function() { // detect image click
    imagePressed = true;
};

container.onclick = function() {
    if (!imagePressed) { // what to do if image is not pressed
        closeImage();
        console.log("Container pressed");
        return;
    }

    // this basically runs when image is pressed
    imagePressed = false;
};