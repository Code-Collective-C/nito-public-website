/// <reference path="tz.browserInfo.ts" />
/// <reference path="path.d.ts" />
/// <reference path="jquerymobile.d.ts" />
/// <reference path="jquery-1.9.d.ts" />
module tz.routing {
    export function go(url: string) {
        if (url.substring(0, 2) !== "#/") {
            url = "#/" + url;
        }
        else if (url.substring(0, 1) !== "#") {
            url = "#" + url;
        }

        var b;
        b = url;
        window.location = b;
    }

    class Route {
        //file name excluding extension
        routeNames: string[];
        file: string;
        action: string;
        id: string;
        title: string;

        constructor(file: string, aditionalRouteNames: string[], title: string, action?: string, id?: string) {
            this.file = file;
            this.action = action;
            this.id = id;
            this.title = title;

            aditionalRouteNames.push(this.file);
            this.routeNames = aditionalRouteNames;
        }

        go() {
            var $divContentContainer = $("#divContentContainer");
            var $divBanner = $(".divBanner");
            $divContentContainer.css({ "display": "none" });
            $divBanner.css({ "display": "none" });

            if (this.title != "")
                document.title = this.title + " - Nito Energy";
            else
                document.title = "Nito Energy";

            var url: string = 'Screens/' + this.file + '.htm';

            var loaded = false;
            //show loading after 500ms only if the page hasn't loaded yet.
            //setTimeout(function () {
            //    if (!loaded) {
            //        $(".divLoading").css({ "display": "" });
            //    }
            //}, 300);


            if ($(window).width() < 600) {
                $(".divReadMoreContainer").css({ 'margin-top': '150px' });
            }
            $(".divLoading").fadeIn(1);

            updateMenu(this.file);

            var file = this.file;

            $.ajax({
                url: 'Screens/' + this.file + '.htm',
                data: '',
                success: function (pageContent: string) {
                    loaded = true;

                    //$(".divLoading").css({ "display": "none" });

                    //build the control
                    pageContent = pageContent;
                    $divContentContainer.html(pageContent);

                    //show content div
                    $(".divLoading").fadeOut(200);
                    setTimeout(function () {
                        $divContentContainer.fadeIn(750);
                        $(".divReadMoreContainer").css({ 'margin-top': '15px' });
                       // updateBanner(file);
                        $('html').scrollTop(0);
                        $('body').scrollTop(0);
                    }, 200);


                },
                cache: false
            });


        }
    }

    //function updateBanner(file: string) {
    //    var banners = [
    //        "People", //0
    //        "Hands", //1
    //        "Cloud", //2
    //        "HandShake", //3
    //        "Chess", //4
    //        "Together", //5
    //        "Growth", //6
    //        "Main" //7
    //    ]

    //    var num = 0;

    //    switch (file) {
    //        case "company":
    //            num = 0;
    //            break;
    //        case "associations":
    //            num = 1;
    //            break;
    //        case "contact":
    //            num = 2;
    //            break;
    //        case "offers":
    //            num = 3;
    //            break;
    //        case "products":
    //            num = 4;
    //            break;
    //        case "pricing":
    //            num = 5;
    //            break;
                
    //        default:
    //            num = Math.floor(Math.random() * banners.length);
    //    }

    //    var banner = banners[num];

    //    $(banners).each(function (index, b) { $(".divBanner").removeClass("bannerImage" + b) });
    //    $(".divBanner").addClass("bannerImage" + banner);

    //    $(".divBanner").css({ "background-image": "url('content/images/banner." + banner + ".colour.jpg')" });
    //    $(".divBanner").fadeIn(750);
    //}

    function updateMenu(file: string) {
        if (file == "building2") file = "building";


        //text
        $("#divMenu").children("a").css({ 'font-weight': 'normal' });
        var selectorString: string = "#a" + file;
        $("#divMenu").children(selectorString).css({ 'font-weight': 'bold' });


        //border - color: rgb(239, 239, 239);
        //line
        $("#divMenu").children("hr").css({ 'border-color': 'rgb(239, 239, 239)' });
        selectorString = "#hr" + file;
        $("#divMenu").children(selectorString).css({ 'border-color': 'rgb(200, 210, 220)' });
    }

    function configureRoutes() {
        var routes = [
            new Route("company", [], "About us"),
             new Route("associations", [], "Associations"),
             new Route("products", [], "Products"),
             new Route("offers", [], "Our offering"),
             new Route("pricing", [], "Pricing"),
             new Route("contact", [], "Contact us")

        ];

        $.each(routes, function (index, element) {
            var route: Route = element;
            $.each(route.routeNames, function (rIndex, rElement) {
                Path.map('#/' + rElement).to(function () { route.go(); });
            });
        });

        Path.map('').to(function () {
            routes[0].go();
        });

        Path.rescue(function () {
            routes[0].go();
        });

        Path.root('');
    }

    $(function () {
        configureRoutes();
        Path.listen();

        if (window.location.href.indexOf("#/") <= 0) {
            tz.routing.go("overview");
        }
    });


}

