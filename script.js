function upDate(previewPic){

    console.log("Image selected");

    console.log(previewPic.alt);
    console.log(previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage =
    "url('" + previewPic.src + "')";
}

function undo(){

    document.getElementById("image").style.backgroundImage="url('')";

    document.getElementById("image").innerHTML=
    "Hover over or focus on an image below to display here.";
}

function addTabIndex(){

    console.log("Page Loaded");

    let images=document.querySelectorAll("img");

    for(let i=0;i<images.length;i++){

        images[i].setAttribute("tabindex","0");

    }
}