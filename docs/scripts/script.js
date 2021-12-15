$(document).ready(function() {
    var dt = new Date();
    document.getElementById('date').innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)) +" . "+ (("0"+dt.getDate()).slice(-2)) +" . "+ (dt.getFullYear());

    document.getElementById('time').innerHTML = ((dt.getHours())) + " : " + (("0" + dt.getMinutes()).slice(-2));

    $(".tab").dialog({
        autoOpen: false,
        closeText: "",
        width: 1000,
        maxHeight: 600,
        position: {collision: "none"}
    });

    $(".tab.design").dialog({width: 600});
    $(".tab.art").dialog({width: 500});
    $(".tab#calendar").dialog({width: 800});
    $(".tab#moma, .tab#playlist").dialog({width: 500, height: 700});
 
    function opentab(id) {
        var button = ".folder" + id;
        var tab = ".tab" + id;
        $(button).click(function() {
            $(tab).dialog("open");
        });
    };

    $(".tab").click(function() {
        $(this).dialog("moveToTop");
    });

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