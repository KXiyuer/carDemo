/**
 * Created by XPHLR on 2017/10/19.
 */


app.directive("moneyDirective", function () {
    return {
        templateUrl: "./App/View/temp/_money.html",
        controller: "moneyController",
        link: function (scope, ele, attr, controller) {
            $("a").on("click", function () {
                var index = $(this).index();
                $(this).addClass("on").siblings().removeClass("on");
                $(ele).eq(index).show().siblings().hide();
            });
        }
    }
});