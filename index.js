function ty() {
  //判断内容
  let text = document.getElementById("myInput").value; //读取内容
  if (text == "") {
    setTimeout("alert('密钥不能为空')", 160);
  } else if (text == "CZQ") {
    setTimeout(window.open("https://yimengqiandong.github.io/CZQ/")); //打开qiandong
  } else if (text == "CYX") {
    //显示邮箱
    setTimeout("cyx()", 160);
  } else if (text == "CWX") {
    setTimeout('alert("我的微信是：yimengqiandong(添加微信请注明身份)")', 100);
  } else if (text == "GAME") {
    setTimeout(
      'alert("即将跳转到小游戏,（尚未完善BUG非常多，自己去探索吧）！！！")',
      100
    );
    setTimeout('window.open("GAME.html");', 200);
  } else if (text == "CLASS") {
    setTimeout('window.open("class.html");', 100);
  } else if (text == "TX") {
    setTimeout('window.open("txguide.html");', 100);
  } else {
    setTimeout('alert("该密钥输入错误或不存在！")', 160);
    document.getElementById("myInput").value = "";
  }
}

function cyx() {
  alert("我的邮箱是：chc1718345936626@163.com");
}

//CZQ，CYX，CWX，GAME,CLASS
