
$(document).ready(function(){

    $("#submitBurger").on("click", function(){
        event.preventDefault()
    
        var newBurger = {name: $("#whatBurger").val().trim()}
        console.log(newBurger);
        
        $.post('/api/burgers', newBurger).then(function(){
            console.log("posted " + newBurger)
            location.reload()
        })

    })
})