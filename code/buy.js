console.log("注入提交订单页面.");
setInterval(
	function() {
	if ($("a:contains('提交订单')").length > 0) {
		console.log("点击了提交订单");
		$("a:contains('提交订单')").click();
		$("a:contains('提交订单')")[0].click();
	}
}, 250);

chrome.runtime.sendMessage({action: "action", function(resp) {
	console.log("sssS")
}});

// chrome.extension.sendRequest("action",function(response) {
// 	console.log("Ssss")
// });