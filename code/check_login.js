console.log("开始检测用户是否登录");

var check_logout = true;
var is_login = document.getElementsByClassName("site-nav-status-login");

if(is_login.length > 0){
	check_logout =false;
}

// setInterval(
// 	function() {
// 	if (is_login.length > 0) {
// 		console.log("用户已经登录");
// 	}
// 	else{
// 		console.log("用户未登录")
// 	}
// }, 200);

if (is_login.length > 0) {
		console.log("用户已经登录");
}
else{
		console.log("用户未登录")
}

setInterval(function(){
if (is_login.length > 0) {
	var log_information = "用户已经登录";
}
else{
	var log_information = "用户未登录";
}
    console.log("弹窗")
    var div = document.createElement("div");
    $(document.body).append(div);
    div.innerHTML = '<c style="display:none;">登陆状态监测</c><server style="width:200px;float:left;">登录状态</server><div class="timer">'+log_information+'</div>';
    div.id = "mydiv";
    div.style = "font-family: '\5FAE\8F6F\96C5\9ED1',arial,'\5b8b\4f53';border-radius: 10px;background:rgba(60, 53, 48, 0.93);color:#FFe;font-size:20px;width:200px;font-weight:100;top:100px;left:10px;z-index:99999; position: fixed;padding-left:5px;";
   $("#mydiv div").on("mouseover", function() {
        $(this).addClass("bg");
    });
    $("#mydiv div").on("mouseout", function() {
        $(this).removeClass("bg");
    });

},1000)


if(check_logout == true){
window.onload=function(){
    // swal("未登录");//以下代码主要修改这里
    swal({
    title: "登录状态监测，您忘记登录",
    text: "用户必须登录才能利用此插件购买进行购买",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "谢谢提醒，稍后登录",
    closeOnConfirm: false
},
function(){
    swal("取消!", "您将无法购买", "成功");
});

}
}
else{
window.onload=function(){
    // swal("已经登录");//以下代码主要修改这里
    swal({
    title: "登录状态监测，您已经登录?",
    text: "用户必须登录才能利用此插件购买进行购买",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "OK",
    closeOnConfirm: false
},
function(){
    swal("取消!", "您将无法购买", "成功");
});

}
}



