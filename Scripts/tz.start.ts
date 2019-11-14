/// <reference path="tz.layout.ts" />
module tz.start {
    export function loadPanel($panel, url: string) {
        $.ajax({
            url: 'Screens/' + url + '.htm',
            data: '',
            async: false,
            success: function (pageContent: string) {
                //build the control
                $panel.html(pageContent); // insert data to the jqMobile page (which is a div).
            },
            cache: false
        });
    }


    var $divMessage = $(".divCoreMessage");
    var $step1 = $(".step1");
    var $step2 = $(".step2");
    var $step3 = $(".step3");
    var $divMainContainer = $(".divMainContainer");

    function step1() {
        $step1.css({ "display": "none" });
        $step2.css({ "display": "none" });
        $step3.css({ "display": "none" });
        $divMessage.fadeIn(1);

        $step1.fadeIn(750);

        setTimeout(function () {
            step2();
        }, 3000);
    }


    function step2() {
        $step2.fadeIn(750);
        setTimeout(function () {
            step3();
        }, 1000);
    }

    function step3() {
        $step3.fadeIn(200);
        setTimeout(function () {
            $divMessage.css({ "display": "none" });
            $divMainContainer.fadeIn(750);

            tz.layout.positionContent();
        }, 1000);
    }

    function deliverCoreMessage() {
        //step1();
        setTimeout(function () {
            $divMainContainer.fadeIn(750);
            tz.layout.positionContent();
        }, 100);
    }

    /// <reference path="tz.routing.ts" />
    /// <reference path="jquery-1.9.d.ts" />
    function start() {
        deliverCoreMessage();
        loadPanel($("#divReadMoreContainer"), "menu");
    }
     

    
    $(window).ready(function () { start() });
}