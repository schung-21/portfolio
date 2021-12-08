$(document).ready(function() {
    $(".tab").dialog({
        autoOpen: false,
        closeText: "",
        width: 1000,
        maxHeight: 600
    });

    $(".tab.design").dialog({width: 600});
    $(".tab.art").dialog({width: 500});
    $(".tab#calendar").dialog({width: 800});

    function opentab(id) {
        var button = ".folder" + id;
        var tab = ".tab" + id;
        $(button).click(function() {
            $(tab).dialog("open");
        });
    };
    opentab(".design");
    opentab(".art");
    opentab(".about");

    opentab("#wa");
    opentab("#mca");
    opentab("#be");
    opentab("#jam");

    opentab("#calendar");
    opentab("#ds");
    opentab("#moma");
    opentab("#playlist");

    opentab("#ab");
    opentab("#graham");
    opentab("#rc");
});