define(['fixedTop', 'focus', 'jquery', 'load'], function (fixedTop, focus, $, load) {
    new fixedTop({
        el: ".logo-con",
        logo: ".logo-small"
    });
    // $.ajax({
    //     url: "../../../src/app/js/data.json",
    //     type: "get",
    //     success: function(data) {
    //         new focus({
    //             el: ".text",
    //             list: ".list",
    //             data: data
    //         })
    //     }
    // })
    $.ajax({
        url: "./app/js/load.json",
        type: "get",
        success: function (res) {
                new load(res)
        }
    })
});