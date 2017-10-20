/**
 * Created by XPHLR on 2017/10/19.
 */

app.directive("tabDirective", function () {
    return {
        templateUrl: "./App/View/temp/_tab.html",
        controller: "tabController",
        link: function (scope, ele, attr, controller) {
            $("a").on("click", function () {
                var index = $(this).index();
                $(this).addClass("on").siblings().removeClass("on");
                $(ele).eq(index).show().siblings().hide();
            });
        }
    }
});