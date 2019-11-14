module tz.layout {

    /// <reference path="jquery-1.9.d.ts" />
    export function positionContent() {
        if ($(window).width() > 600) {
            var containerWidth = $(".divMainContainer").width();
            var readMoreWidth = $(".divReadMoreContainer").width();
            $(".divContent").width(containerWidth - readMoreWidth - 65);
            $("#spReadMore").css({ "display": "none" });
        } else {
            var titleWidth = $(".roundBorderTitle").width();
            $(".divContent").width("auto");
            $("#spReadMore").css({ "display": "" });
        }

        var loadingWidth = $(".divMainContainer").width();
        $(".divLoading").width(loadingWidth);
    }

    $(window).resize(function () { positionContent() });
    $(window).ready(function () { positionContent() });
    window.addEventListener('orientationchange', function () { positionContent() });
}