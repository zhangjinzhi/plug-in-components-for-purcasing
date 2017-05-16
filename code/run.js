//聚划算注入页面
setInterval(function() {
    if ($("span:contains('马上抢')").length > 0) {
        $("span:contains('马上抢')").click();

    }
}, 250);