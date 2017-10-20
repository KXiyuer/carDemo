/**
 * Created by XPHLR on 2017/10/19.
 */

app.controller("tabController", function ($scope) {

    new Swiper(".swiper-container", {
        autoplay: 3000,
        pagination: ".swiper-pagination"
    });
    
});