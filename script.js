// Projet : Faire une page interactive avec JS

// Fonctionnalité 1 :

/* -------------------------------------------------------------------------------------------------------- */

let footer = document.querySelector("footer");

function posterOnTheConsole()
{
    console.log("clique");
}

footer.addEventListener("click",posterOnTheConsole);
/* -------------------------------------------------------------------------------------------------------- */

// Fonctionnalité 1bis :

/* -------------------------------------------------------------------------------------------------------- */

let footerbis = document.querySelector("footer");
let counter = 1;

function posterOnTheConsoleBis()
{
    console.log(`clique ${counter}`);
    counter++;
}

footerbis.addEventListener("click",posterOnTheConsoleBis);

/* -------------------------------------------------------------------------------------------------------- */

// Fonctionnalité 2 :

/* -------------------------------------------------------------------------------------------------------- */

let menu = document.getElementById("navbarHeader");
let btn = document.querySelector(".navbar-toggler-icon");

function openOrCloseMenu() 
{
    menu.classList.toggle("collapse");
}

btn.addEventListener("click", openOrCloseMenu);

/* -------------------------------------------------------------------------------------------------------- */

// Fonctionnalité 3 :

/* -------------------------------------------------------------------------------------------------------- */

let text = document.getElementById("text-1");
let edit = document.getElementById("edit-1");

function colorRed() 
{
    text.style.color = "red";
}

edit.addEventListener("click", colorRed);

/* -------------------------------------------------------------------------------------------------------- */

// Fonctionnalité 4 :

/* -------------------------------------------------------------------------------------------------------- */

let text2 = document.getElementById("text-2");
let edit2 = document.getElementById("edit-2");

function colorGreen() 
{
    if (text2.style.color === "green")
    {
        text2.style.color = "";
    }
    else
    {
        text2.style.color = "green";
    }
}

edit2.addEventListener("click", colorGreen);

/* -------------------------------------------------------------------------------------------------------- */

// Fonctionnalité 5 :

/* -------------------------------------------------------------------------------------------------------- */

let navbar = document.querySelector("header");
let css;

function atomic()
{
    if (css === false)
    {
        css = document.getElementById("boostrapcss").disabled = true;
    }
    else
    {
        css = document.getElementById("boostrapcss").disabled = false;
    }
}

navbar.addEventListener("dblclick",atomic);

/* -------------------------------------------------------------------------------------------------------- */