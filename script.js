// Projet : Faire une page interactive avec JS

// Fonctionnalité 1 :

/* -------------------------------------------------------------------------------------------------------- */

let footer = document.querySelector('footer');

function posterOnTheConsole()
{
    console.log("clique");
}

footer.addEventListener('click',posterOnTheConsole);
/* -------------------------------------------------------------------------------------------------------- */

// Fonctionnalité 1bis :

/* -------------------------------------------------------------------------------------------------------- */

let footerbis = document.querySelector('footer');
let counter = 1;

function posterOnTheConsoleBis()
{
    console.log(`clique ${counter}`);
    counter++;
}

footerbis.addEventListener('click',posterOnTheConsoleBis);

/* -------------------------------------------------------------------------------------------------------- */

// Fonctionnalité 2 :

/* -------------------------------------------------------------------------------------------------------- */
let menu = document.getElementById('navbarHeader')
let btn = document.querySelector('.navbar-toggler-icon');

function openOrCloseMenu() 
{
    menu.classList.toggle("collapse");
}

btn.addEventListener('click', openOrCloseMenu);

/* -------------------------------------------------------------------------------------------------------- */