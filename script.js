// define our variables
let toggleMenu = document.querySelector(".mobile-menu");
let headerStatus = document.querySelector(".header");

// when user clicks on "menu", open and close the mobile navigation
toggleMenu.addEventListener( "click", () => {
    if (headerStatus.classList.contains("open")) {
        headerStatus.classList.remove("open");
    }
    else{
        headerStatus.classList.add("open");
    }
},
false,
);

function checkFilters() {

    let checked = [];

    $('input[type="checkbox"] + label').css("opacity", 1);
    $('input[type="checkbox"]:not(:checked) + label').css("opacity", 0.5);

    if ($("#filter .filter-type input:checkbox:checked").length > 0) {

        $('#filter .filter-type input[type="checkbox"]:checked').each(function () {
        checked.push( "[" + $(this).attr("name") + "]");
        });
    } else{
    $('input[type="checkbox"] + label').css("opacity", 1);
    }

    if (checked.length == 0 || checked == null) {
        $("#i > *").css("opacity", 1).css("pointer-events", "auto");
        return;
    }

    $(checked).each(function (i, e) {
        $("#i > *" + e).css("opacity", 1).css("pointer-events", "auto");
    });

    };

    // CHECKBOX 
    $("#filter .filter-type input[type='checkbox']").change(function () {  
    $("#i > *").css("opacity", 0).css("pointer-events", "none");
    checkFilters();
});
  