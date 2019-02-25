// Projet : Faire une page interactive avec JS

// Fonctionnalité 1 :

/* -------------------------------------------------------------------------------------------------------- */

let footer = document.querySelector('footer');

footer.addEventListener('click',posterOnTheConsole);

function posterOnTheConsole()
{
    console.log("clique");
}

/* -------------------------------------------------------------------------------------------------------- */

// Fonctionnalité 1bis :

/* -------------------------------------------------------------------------------------------------------- */

let footerbis = document.querySelector('footer');
let counter = 1;

footerbis.addEventListener('click',posterOnTheConsoleBis);

function posterOnTheConsoleBis()
{
    console.log(`clique ${counter}`);
    counter++;
}

/* -------------------------------------------------------------------------------------------------------- */