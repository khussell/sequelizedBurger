




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



    $(".remake").on("click", function () {
        var id = $(this).data("id")
        var data = {
            id: id,
            isDevoured: false,
        }
        $.ajax({
            method: "PUT",
            url: "/api/burgers",
            data: data
        }).then(function () {
            location.reload(true)
        })

    })


    $(".delete").on("click", function() {
        var data = {
            id: $(this).data("deleteid")
        }
        $.ajax({
            method: "DELETE",
            url: "/api/burgers",
            data: data
        }).then(function(){
            location.reload()
        })
    })

})