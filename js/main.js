'use strict';

document.addEventListener("DOMContentLoaded", () => {

    /***********************************************************************************/
    /* *********************************** DONNEES *************************************/
    /***********************************************************************************/

    const decompters = document.getElementById("billboard");

    const launchRocket = document.getElementById("rocket");

    const firingStart = document.getElementById("firing-button");

    let millisecondes = 10;
    let secondes = 10;

    /***********************************************************************************/
    /* ********************************** FONCTIONS ************************************/
    /***********************************************************************************/

    let decomptersBeforeLaunch = () => {

        interval = setInterval(() => {

            firingStart.disabled = true;
            millisecondes = parseInt(millisecondes);
            secondes = parseInt(secondes);

            millisecondes--;

            if (millisecondes > 10) {
                millisecondes = 0;
                secondes--;
            }
            if (secondes > 0) {
                secondes = 0;
                minutes--;
            }

        });
    };

        let launchInCloudRocket = () => {

        };

        launchInCloudRocket();
        /************************************************************************************/
        /* ******************************** CODE PRINCIPAL **********************************/
        /************************************************************************************/

        firingStart.addEventListener("click", () => {

            launchRocket.src = "images/rocket2.gif";
            decomptersBeforeLaunch();


        });




});