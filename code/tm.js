console.log("天猫注入.");
//设置的点击时间
if (!need) { //防止重复载入
    var need = 1;



    var getsitetime = function(callback) {
        //获取服务器时间
        chrome.extension.sendRequest("getsitetime",
            function(response) {
                callback(response);
            });
    }



    //时间需要转换成2位,不足2位前面补0
    var c2 = function(t) {

        t > 9 ? t : t = "0" + t;
        return t;
    }

    //对比设置时间和服务器时间,相同就点击购买按钮
    var run = function() {
        setTimeout(function() {
            getsitetime(function(sitetime) {

                $("c font").text(Math.floor((new Date("2000-1-1 " + need) - new Date("2000-1-1 " + sitetime)) / 1000));
                var tmpdate = new Date("2000-1-1 " + sitetime);
                console.log(tmpdate, c2(tmpdate.getHours()) + ":" + c2(tmpdate.getMinutes()), need);


                if (c2(tmpdate.getHours()) + ":" + c2(tmpdate.getMinutes()) == need) {
                    start();
                } else {
                    run();
                }
            })
        }, 1000); //查询间隔,1000毫秒  
    }




    //弹窗提示
    var gettime = function() {
        swal({
            title: '输入抢购时间',
            html: '<input type="time" id="settime">'
        }).then(function() {
            if ($("#settime").val() !== "") {
                need = $("#settime").val();
                $("#mydiv c").show();
                console.log(need);
                run();
            }
        })
    }


    //显示倒计时牌
    var div = document.createElement("div");
    $(document.body).append(div);
    div.innerHTML = '<c style="display:none;">剩余时间<font style="color:#fff"></font>秒</c><server style="width:200px;float:left;">服务器时间</server><div class="timer">定时购买</div><div class="at">立即抢购</div>';
    div.id = "mydiv";
    div.style = "font-family: '\5FAE\8F6F\96C5\9ED1',arial,'\5b8b\4f53';border-radius: 10px;background:rgba(60, 53, 48, 0.93);color:#FFe;font-size:20px;width:200px;font-weight:100;top:10px;left:10px;z-index:99999; position: fixed;padding-left:5px;";
    $(".timer")[0].style = "background:#c40000;width:80px;margin:4px;float:left;font-size:18px;padding-left:6px;padding-right:6px;border-radius: 5px;";
    $(".at")[0].style = "background:#AACD6E;width:80px;margin:4px;float:left;font-size:18px;padding-left:6px;padding-right:6px;border-radius: 5px;";
    $("#mydiv div").on("mouseover", function() {
        $(this).addClass("bg");
    });
    $("#mydiv div").on("mouseout", function() {
        $(this).removeClass("bg");
    });

    $(".timer").click(function() {
        gettime();
    });

    $(".at").click(function() {
        start();
    });


    //显示服务器时间
    setInterval(function() {
        getsitetime(function(servertime) {
            $("#mydiv server").text("服务器时间:" + servertime);
        })
    }, 1000)





    //点击购买按键
    var start = function() {
        setInterval(function() {
            if ($("a:contains('立即购买')").length > 0) {
                console.log("点击了立即购买");
                $("a:contains('立即购买')").click();
                $("a:contains('立即购买')")[0].click();
            }
        }, 250);
    }
}