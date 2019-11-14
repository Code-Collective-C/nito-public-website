var tz;
(function (tz) {
    (function (routing) {
        function go(url) {
            if(url.substring(0, 2) !== "#/") {
                url = "#/" + url;
            } else if(url.substring(0, 1) !== "#") {
                url = "#" + url;
            }
            var b;
            b = url;
            window.location = b;
        }
        routing.go = go;
        var Route = (function () {
            function Route(file, aditionalRouteNames, title, action, id) {
                this.file = file;
                this.action = action;
                this.id = id;
                this.title = title;
                aditionalRouteNames.push(this.file);
                this.routeNames = aditionalRouteNames;
            }
            Route.prototype.go = function () {
                var $divContentContainer = $("#divContentContainer");
                var $divBanner = $(".divBanner");
                $divContentContainer.css({
                    "display": "none"
                });
                $divBanner.css({
                    "display": "none"
                });
                if(this.title != "") {
                    document.title = this.title + " - Nito Energy";
                } else {
                    document.title = "Nito Energy";
                }
                var url = 'Screens/' + this.file + '.htm';
                var loaded = false;
                if($(window).width() < 600) {
                    $(".divReadMoreContainer").css({
                        'margin-top': '150px'
                    });
                }
                $(".divLoading").fadeIn(1);
                updateMenu(this.file);
                var file = this.file;
                $.ajax({
                    url: 'Screens/' + this.file + '.htm',
                    data: '',
                    success: function (pageContent) {
                        loaded = true;
                        pageContent = pageContent;
                        $divContentContainer.html(pageContent);
                        $(".divLoading").fadeOut(200);
                        setTimeout(function () {
                            $divContentContainer.fadeIn(750);
                            $(".divReadMoreContainer").css({
                                'margin-top': '15px'
                            });
                            $('html').scrollTop(0);
                            $('body').scrollTop(0);
                        }, 200);
                    },
                    cache: false
                });
            };
            return Route;
        })();        
        function updateMenu(file) {
            if(file == "building2") {
                file = "building";
            }
            $("#divMenu").children("a").css({
                'font-weight': 'normal'
            });
            var selectorString = "#a" + file;
            $("#divMenu").children(selectorString).css({
                'font-weight': 'bold'
            });
            $("#divMenu").children("hr").css({
                'border-color': 'rgb(239, 239, 239)'
            });
            selectorString = "#hr" + file;
            $("#divMenu").children(selectorString).css({
                'border-color': 'rgb(200, 210, 220)'
            });
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
                var route = element;
                $.each(route.routeNames, function (rIndex, rElement) {
                    Path.map('#/' + rElement).to(function () {
                        route.go();
                    });
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
            if(window.location.href.indexOf("#/") <= 0) {
                tz.routing.go("overview");
            }
        });
    })(tz.routing || (tz.routing = {}));
    var routing = tz.routing;
})(tz || (tz = {}));
