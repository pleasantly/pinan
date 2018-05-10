$(document).ready(function () {
    $(".moe2").mouseenter(function () {
        $(".xiah").slideDown(220);
    });
    $(".moe2").mouseleave(function () {
        $(".xiah").slideUp(220);
    });
    // $.ajax({
    //     url:'http://192.168.18.212:3000/meituan',
    //     type:'get',
    //     success:function (e) {
    //         console.log(e)
    //     },
    // })
});

