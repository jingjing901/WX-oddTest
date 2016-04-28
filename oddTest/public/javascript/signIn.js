/**
 * Created by Administrator on 2016/4/25.
 */
function checked() {
    var pw = document.getElementById("inputPassword").value;
    var rpw = document.getElementById("rinputPassword").value;
    var mobile = document.getElementById("phoneNum").value;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    var agreement = document.getElementById("agreement");
    var pwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
    $.ajax({
        //url:"<%=basePath %>Ask/updateAnswer.do",
        type:"post",
        data:{"phone":mobile},
        dataType:"json",
        success:function(data){
            if(data == false){
                alert("该手机号已注册！");
                mobile =="";
            }
        }
    })
    if (!myreg.test(mobile)) {
        alert('请输入有效的手机号码！');
        return false;
    }
    if(!pwReg.test(pw)){
        alert('密码格式不正确！');
    }
    if (pw == "") {
        alert("请输入密码!");
        return false;
    }else{
        if(rpw==""){
            alert("请输入确认密码!");
            return false;
        } else{
            if(pw!=rpw){
                alert("两次密码输入不一致!");
                return false;
            }
        }
    }
    if(agreement.checked){
       return true;
    }else{
        alert("请勾选同意《用户注册协议》！");
    }
}