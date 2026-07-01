function upDate(previewPic) {

    // Check if event is working
    console.log("Mouse Over Event Triggered");

    // Display image details
    console.log("Alt Text:", previewPic.alt);
    console.log("Image Source:", previewPic.src);

    // Get the preview area
    let imageDiv = document.getElementById("image");

    // Change the text
    imageDiv.innerHTML = previewPic.alt;

    // Change the background image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {

    // Get the preview area
    let imageDiv = document.getElementById("image");

    // Reset background image
    imageDiv.style.backgroundImage = "url('')";

    // Reset text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}