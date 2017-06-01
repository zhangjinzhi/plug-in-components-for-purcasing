//点击打开聚划算主页
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        url: "https://ju.taobao.com"
    });
});

//注入淘宝或天猫购买页面
var injection = function() {
    setTimeout(function() {
        chrome.tabs.executeScript(null, { file: "tm.js" });
    }, 5000);
}


chrome.webRequest.onBeforeSendHeaders.addListener(function(request) {
    for (var i = 0; i < request.requestHeaders.length; i++) {
        if (request.requestHeaders[i].name == "Referer") {
            if (request.requestHeaders[i].value.match(/ju\.taobao\.com/) && (request.url.match(/detail\.tmall\.com\/item\.htm/) || request.url.match(/detail\.tmall\.hk\/item\.htm/))) {
                console.log("说明是从聚划算跳转过来的页面");
                injection();
                break;
            }
        }
    }
    return {
        requestHeaders: request.requestHeaders
    }
}, {
    urls: ["http://*/*", "https://*/*"]
}, ["blocking", "requestHeaders"]);




var cachedate = new Date().toString();



var getsitetime = function(callback) {
    //获取服务器时间
    return callback(cachedate);

}


//每秒获取服务器时间并且缓存,提供给所有标签页使用,减轻负担和延时
setInterval(function() {
    $.ajax({
        type: "HEAD",
        url: "https://www.baidu.com", //百度时间
        cache: false
    }).done(function(data, status, header) {
        var date = new Date(header.getResponseHeader('date'));
        cachedate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }).fail(function(header, status, errorThrown) {
        throw errorThrown;
    })
}, 1000);



chrome.extension.onRequest.addListener( //背景监听扩展发送过来的信息
    function(request, sender, sendResponse) {
        if (request == "getsitetime")
            getsitetime(function(x) {
                sendResponse(x);
            })


    });


chrome.runtime.onMessage.addListener(function(message, sender, sendResponseCallback)
{
    if(message.name == "action")
    {
         sendResponseCallback({cookie: document.cookie});
     alert("has cookie");

    }
    else if(message.browserkey)
    {
     alert("no cookie");
    }
    sendResponse({code: 200})

});


/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension")
  if (request.action == "action") {
    console.log("content已经把信息传da")
    chrome.cookies.getAll({
      url: sender.tab.url
    }, function(cookies) {
      cookies.forEach(function(cookie) {
        if(cookie.httpOnly) {
          console.log(cookie)
        }
      })
    })
    sendResponse({code: 200})
  }
})
*/
// chrome.extension.onRequest.addListener( //背景监听扩展发送过来的信息
//     function(request, sender, sendResponse) {
//         if (request == "action"){
//             console.log("rrr");
//             sendResponse(x);
//             }

//     });

// chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//   console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension")
//   if (request.action == "action") {
//     chrome.cookies.getAll({
//       url: sender.tab.url
//     }, function(cookies) {
//       cookies.forEach(function(cookie) {
//         cookiesStore[cookie.name] = cookie.value
//         if(cookie.httpOnly) {
//           console.log(cookie)
//         }
//       })
//     })
//     sendResponse({code: 200})
//   }
// });