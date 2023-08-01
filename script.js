// Add your code to this file
//Making background color dark blue
let back = document.querySelector("body");
back.style.backgroundColor = "darkblue";

//Underlining "Pokemon!"
let title = document.querySelector("h1");
title.style.textDecoration = "underline";

//Renaming substitle and center aligning
let subtitle = document.querySelector("h2");
subtitle.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";
subtitle.style.textAlign = "center";

//Changing starter image border to dots and changing color to yellow
let imgDiv = document.getElementById("starters_image_div");
imgDiv.style.border = "none";
let startersImage = document.querySelector("#starters_image_div img");
startersImage.style.border = "dotted";
startersImage.style.borderColor = "yellow";

//Adding yellow dotted border to pokemon images
let images = document.getElementsByClassName("pokemon_images");
for(let i = 0; i<images.length; i++)
{
    images[i].style.border = "dotted";
    images[i].style.borderColor = "yellow";
}

//Changing Pokemon names to yellow and adding exclamation point
let names = document.getElementsByClassName("pokemon_names");
for(let i = 0; i<names.length; i++)
{
    names[i].style.color = "yellow";
    names[i].innerHTML = names[i].innerHTML + "!";
}

//Changing footer to "All Star Code - DOM Project" and underlining and overlining and italicizing
let footer = document.querySelector("footer");
footer.innerHTML = "All Star Code - DOM Project";
footer.style.fontSize = "30px";
footer.style.textDecoration = "underline overline";
footer.style.fontStyle = "italic";

