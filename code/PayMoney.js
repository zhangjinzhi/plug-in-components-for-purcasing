console.log("开始自动支付");

var PayPasswordInput = document.getElementById("payPassword_rsainput");
var PaySubmitBtn = document.getElementById("J_authSubmit");

// if(!PayPasswordInput || !PaySubmitBtn)
// {
//    window.onload=function(){
//     swal("支付出现问题");//样式的变化通过修改这里
// }
// }

// var sixDigitPassword = document.getElementsByClassName("sixDigitPassword").childNodes.length;
// console.log(sixDigitPassword);

PayPasswordInput.value = "199411";
PaySubmitBtn.click();
console.log("完成自动支付");

// export default {
//   onInteractive: function() {
//     window.addEventListener("load", function() {
//       let jdPayPasswordInput = document.querySelector(elements.jdPayPasswordInput)
//       let jdPaySubmitBtn = document.querySelector(elements.jdPaySubmitBtn)
//       if(!jdPayPasswordInput || !jdPaySubmitBtn) {
//         alert(`element not exist: payPasswordInput--${jdPayPasswordInput}, jdPaySubmitBtn--${jdPaySubmitBtn}`)
//         return
//       }
//       jdPayPasswordInput.value = ""
//       jdPaySubmitBtn.click()
//     })
//   },
//   onComplete: function() {

//   }
// }
