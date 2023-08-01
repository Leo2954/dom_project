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


//Changing Pokemon names to yellow and adding exclamation point
let names = document.getElementsByClassName("pokemon_names");
for(let i = 0; i<names.length; i++)
{
    names[i].style.color = "yellow";
    names[i].innerHTML = names[i].innerHTML + "!";
}