/**
 * Created by Administrator on 2016/4/27.
 */
function check(){
    var phoneNum = document.getElementById("lphoneNum").value;
    $.ajax({
        url:"<%=basePath %>Ask/updateAnswer.do",
        type:"post",
        data:{"phone":phoneNum},
        dataType:"json",
        success:function(data){
        if(data == true){
          alert("该手机号尚未注册！")
        }
    }
})
}
