$(function () {
    function monitor() {
        var winH = window.innerHeight || document.documentElement.clientHeight; //获取浏览器窗口高度
        var winST = $(window).scrollTop(); //获取scrollTop
        var docH = $(document).height(); //获取文档高度
        var arr = [winH, winST, docH];
        return arr;
    }
    monitor();
    $(window).scroll(function () { //页面滑动时
        var winSTbefore = 0; //声明一个变量，用于装触发scroll事件的上一个scrollTop
        var arr = monitor();
        var winH = arr[0]; //声明winH 浏览器窗口高度
        var winST = arr[1]; //声明winST scrollTop
        var docH = arr[2]; //声明docH 文档高度
        if (winST <= winH / 10) {
            $('.commentBox').removeClass('navbarhide'); //在首屏时显示导航条
        } else if (winST + winH >= docH) {
            $('.commentBox').removeClass('navbarhide'); //到达底部时显示
        } else if (winST > winSTbefore) {
            $('.commentBox').addClass('navbarhide'); //向下滑动时隐藏
        } else if (winST < winSTbefore) {
            $('.commentBox').removeClass('navbarhide'); //向上滑动时显示
        }
        winSTbefore = winST; //更新winSTbefore的值
    })
    var lis = $(".listBar2"),
        Report = $(".reportResTitle")
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            let text = this.innerHTML;
            console.log(text)
            $(this).toggleClass('active');
            if ($('lis').is('.active')) {
                console.log(lis)
            }
        }
    }
    for (var i = 0; i < Report.length; i++) {
        Report[i].onclick = function () {
            let text = this.innerHTML;
            console.log(text)
            $(this).toggleClass('reportx');
            if ($('Report').is('.reportx')) {
                console.log(lis)
            }
        }
    }

})
$(function () {
    // 评价弹窗
    $('#likeBtn1').click(function () {
        $('.likeViewContent').show()
    })
    $('.offView ,.BtnNo').click(function () {
        $('.likeViewContent').hide()
    })

    $('#likeBtn2').click(function () {
        $('.NolikeViewContent').show()
    })
    $('.offView ,.BtnYes').click(function () {
        $('.NolikeViewContent').hide()
    })
    $('.Replyuse')
    // moreBtn
    $('.reviewLike').on('click', 'i', function (e) {
        $('.ReplyContent').show()
        $('.ReplyboxContent').hide()
    })
    $('#cancel').click(function () {
        $('.ReplyContent').hide()
        $('.commentBox').show()
    })
    $('#Subcancel').click(function(){
        $('.SubContent').hide()
    })
    // 举报
    $('#makeknown , #Submakeknown').click(function () {
        $('.jblikeViewContent').show()
        $('.ReplyContent ,.SubContent').hide()
    })
    // 回复
    $('#Replyuse').click(function () {
        $('.ReplyContent').hide()
        $('.ReplyboxContent').show()
    })
    $('.ReportViewImg , .repNo').click(function () {
        $('.jblikeViewContent').hide()
    })
    // 二级评论
    $('#cancelinfo').click(function(){
        $('.ReplyContent').hide()
    })
    // 子评论点击
    $('#newsinfo > .reviewTow > .reviewLike2').click(function(){
        $('.SubContent').show()
    })
    // 评论框的点击事件
    $(".reviewText").click(function () {

        $('.commentBox').hide()
        $(".ReplyboxContent").show()
    })
    $('.commentContent > .commentBoder').click(function () {

        $('.ReplyboxContent').hide()
        $('.commentBox').show()
    })
    $("#fabuwenzhang").click(function () {
        // let message = $("<div class="reviewInfo">" + "<p>评论内容评论内容评论内容，评论内容评论内容评论内容评论内
        // 容。 评论内容评论内容评论内容，评论内容评论内容评论内容评论内容</p>" + "</div>");
        // tableContent += '<div class="tab-pane fade active in" id="nav-pills-tab-1" style="height:48%;overflow-y:auto">';
        //    let message = '<div class="reviewImg"><img src="./images/usephoto.png" alt=""></div>'
        // 父评论
        let message = $('.ReplyTest').val()
        let news = '<div class="commentBoder"><div class="review"><div class="reviewImg"><img src="./images/usephoto.png" alt=""></div><div class="reviewTitle"><p>张三说币</p><i>8小时前</i> </div><div class="reviewLike"><i id="moreBtn">···</i></div></div> <div class="reviewInfo"><p> ' + message + '</p></div></div>'
        // 子评论
        let newmessgae = '<div id="newsinfo"><div class="reviewTow"><div class="reviewImg"><img src = "./images/usephoto.png"alt = "" ></div><div class = "reviewTitle2" ><p>萧十一郎</p><i>8 小时前</i></div></div><div class = "reviewInfo" ><p>回复:<i class = "useName">小明小明: </i>' + message + '</p></div></div>'

    })
})