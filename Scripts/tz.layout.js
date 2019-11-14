var tz;
(function (tz) {
    (function (layout) {
        function positionContent() {
            if($(window).width() > 600) {
                var containerWidth = $(".divMainContainer").width();
                var readMoreWidth = $(".divReadMoreContainer").width();
                $(".divContent").width(containerWidth - readMoreWidth - 65);
                $("#spReadMore").css({
                    "display": "none"
                });
            } else {
                var titleWidth = $(".roundBorderTitle").width();
                $(".divContent").width("auto");
                $("#spReadMore").css({
                    "display": ""
                });
            }
            var loadingWidth = $(".divMainContainer").width();
            $(".divLoading").width(loadingWidth);
        }
        layout.positionContent = positionContent;
        $(window).resize(function () {
            positionContent();
        });
        $(window).ready(function () {
            positionContent();
        });
        window.addEventListener('orientationchange', function () {
            positionContent();
        });
    })(tz.layout || (tz.layout = {}));
    var layout = tz.layout;
})(tz || (tz = {}));
//@ sourceMappingURL=tz.layout.js.map
