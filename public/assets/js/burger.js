$.get("/")




$(document).ready(function () {

    $("#submitBurger").on("click", function () {
        event.preventDefault()

        var newBurger = { name: $("#whatBurger").val().trim() }
        console.log(newBurger);
        $("#whatBurger").val("")

        $.post('/api/burgers', newBurger).then(function () {
            console.log("posted " + newBurger)

            location.reload()
        })

    })









    $(".devour").on("click", function () {
        var devoured = $(this).data("devoured")
        var id = $(this).data("id")
        var eater = { eaterName: $("#input" + id).val().trim() }


        $.post("/api/eaters", eater).then(function (data) {
            var eaterId = {
                EaterId: data.id,
                id: id,
                isDevoured: true
            }

            console.log(eaterId)
            $.ajax({
                method: "PUT",
                url: "/api/burgers",
                data: eaterId
            })
                .then(function () {
                    location.reload();
                });

        })





    })
})