document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        // Let user know that everything loaded correctly
        // console.info("Loaded and ready to eat");
    }


    // Update Burgers Eaten/Not Eaten
    // Const to get the devoured Class
    const eatBurger = document.querySelectorAll(".devoured");

    // If statement to set the buttons!
    if (eatBurger) {
        // Hit each button
        eatBurger.forEach((button) => {
            button.addEventListener("click", (e) => {
                // Target the data id.
                const id = e.target.getAttribute("data-id");
                // If not eaten target the data-not-devoured id
                const notDevoured = e.target.getAttribute("data-not-devoured");
                // Set the burger to Not Devoured
                const notYetDevoured = {
                    devoured: notDevoured,
                };
                // Fetch PUT request to get the right burger using the ID
                fetch(`/api/burgers/${id}`, {
                    method: "PUT",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(notYetDevoured),
                }).then((response) => {
                    if (response.ok) {
                        // Reload the page
                        location.reload('/');
                    } else {
                        // Else console log that I done messed up
                        console.log('Whoops! Burger.js line 38');
                    }
                })

            })
        })
    }

    // Create Burger Code
    // Const to get the new burger form input
    const newBurgerForm = document.querySelector(".new-burger-form")
    if (newBurgerForm) {
        // Listen for the event using submit
        newBurgerForm.addEventListener("submit", (e) => {
            // Gotta prevent that default behavior
            e.preventDefault();

            // Set a variable for the new burger
            const newBurger = {
                burger_name: document.querySelector(".new-burger").value
            };

            // Fetch POST request to send the new burger data
            fetch("/api/burgers", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newBurger),
            }).then(() => {
                // Set the form to blank for another burger!
                document.querySelector(".new-burger-form").value = ""
                // Reload the page!
                location.reload();
            })
        })
    }


    // Delete Burger Code

    // Const to select the class
    const deleteBurger = document.querySelectorAll(".delete-burger")

    // For each to give each burger an event listener
    deleteBurger.forEach((button) => {
        button.addEventListener("click", (e) => {
            // target the id for the button pressed
            const id = e.target.getAttribute("data-id")
            // Fetch request to delete the burger
            fetch(`/api/burgers/${id}`, {
                method: "DELETE"
            }
            )
            // Reload the page
            location.reload()
        })
    })

    // End of DOM event listener
})





