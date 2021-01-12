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

    // Create Burger

    const newBurgerForm = document.querySelector(".new-burger-form")
    if (newBurgerForm) {
        newBurgerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const newBurger = {
                burger_name: document.querySelector(".new-burger").value
            };

            fetch("/api/burgers", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newBurger),
            }).then(() => {
                document.querySelector(".new-burger-form").value = ""

                console.log("New Burger")
                location.reload();
            })



        })
    }


    // // Delete Burger

    // const deleteBurger = document.querySelectorAll(".delete-burger")

    // deleteBurger.forEach((button) => {
    //     button.addEventListener("click", (e) => {
    //         const id = e.target.getAttribute("data-id")
    //         console.log(id)
    //         fetch(`/api/burgers/:${id}`, {
    //             method: "DELETE"
    //         }
    //         ).then((result) => {
    //             console.log(result.status)
    //             // location.reload()
    //         })
    //     })
    // })
})



