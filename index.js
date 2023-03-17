
    $(".image").click(function() {
        removeActiveClasses()
       $(this).addClass("active")
    })

function removeActiveClasses(){
    $(".image").removeClass("active")
}