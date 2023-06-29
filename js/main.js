'use strict';

document.addEventListener("DOMContentLoaded", () => {

    /***********************************************************************************/
    /* *********************************** DONNEES *************************************/
    /***********************************************************************************/

    const decompters = document.querySelector("#billboard span");

    const launchRocket = document.getElementById("rocket");

    const firingStart = document.getElementById("firing-button");

    const firingStop = document.getElementById("cancel-button");
    
    const firingReset = document.getElementById("refresh-button");


    let secondes = 10;
    let timeOutId = 500;
    let interval;

    /***********************************************************************************/
    /* ********************************** FONCTIONS ************************************/
    /***********************************************************************************/

    let decomptersBeforeLaunch = () => {

        interval = setInterval(() => {

            firingStart.classList.add("disabled");
            secondes = parseInt(secondes);

            if (secondes > 0) {
                secondes--;
            }
            else if (secondes === 0) {
                rocket.src = "images/rocket3.gif";
                rocket.classList.add("tookOff");
            }

            secondes = (secondes < 10) ? "0" + secondes : secondes;

            decompters.innerText = (`${secondes}`);

            launchRocket.src = "images/rocket2.gif";


        }, timeOutId);

    };


    /************************************************************************************/
    /* ******************************** CODE PRINCIPAL **********************************/
    /************************************************************************************/

    firingStart.addEventListener("click", () => {
        decomptersBeforeLaunch();
    });

    firingStop.addEventListener("click", () => {
        clearInterval(interval);
        firingStart.classList.remove("disabled");
    });

    firingReset.addEventListener("click", () => {
        firingStart.removeEventListener("click", decomptersBeforeLaunch);
        clearInterval(interval);
        secondes = 0;
        rocket.src = "images/rocket1.png";
    });


});