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
                const id = e.target.getAttribute("data-id");
                const notDevoured = e.target.getAttribute("data-not-devoured");
                console.log(id);
                const newDevoured = {
                    devoured: notDevoured,
                };

                fetch(`/api/burgers/${id}`, {
                    method: "PUT",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newDevoured),
                }).then((response) => {
                    if (response.ok) {
                        console.log(`Burger Eaten: ${newDevoured}`)
                        location.reload('/');
                    } else {
                        alert('something went wrong!');
                    }
                })

            })
        })
    }



})