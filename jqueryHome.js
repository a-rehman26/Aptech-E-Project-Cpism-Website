// search navbar hide

$(document).ready(function () {

    $("#searchiconNavtop").click(function () {

        $("#searchHideNavDivID").fadeIn(function () {
            $("#searchHideNavDivID").css("display", "block")
        })
    })

    $("#closeNavHideSearch").click(function () {

        $("#closeNavHideSearch").fadeOut(function () {
            $("#searchHideNavDivID").css("display", "none")
        })
    })

});

// add to cart

$(document).ready(function () {
    $("#ddAddtocart").mouseenter(function () {
        $(".ddAddtocart").show(function () {
            $(".ddAddtocart").css("display", "block")
        })
    })

    $("#ddAddtocart").mouseleave(function () {
        $(".ddAddtocart").fadeOut(function () {
            $(".ddAddtocart").css("display", "none")
        })
    })

})