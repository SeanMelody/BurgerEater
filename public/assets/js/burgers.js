document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }


    // Update burgers

    const eatBurger = document.querySelectorAll(".devoured");

    if (eatBurger) {
        eatBurger.forEach((button) => {
            button.addEventListener("click", (e) => {
                console.log("button working");
            })
        })
    }



})