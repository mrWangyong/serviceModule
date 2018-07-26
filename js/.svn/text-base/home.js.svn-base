
//菜单点击事件
$("#nav li").click(function() {
	
	$("#nav li").removeClass("layui-this");
	$(this).addClass("layui-this");
	
	var id = $(this).attr("id") ;
	
	var url = "../html/"+id+".html";
	console.log(url);
	
	$("#content").load(url);
	window.location.hash = "#"+id ;
});
//修改密码 
function editPassword(){
	/*$("#content").load("../html/editPsw.html");*/
}
//退出系统
function exit (){
	publicFun.confirm();
	//window.location.href = "../index.html";
}


//刷新页面
function reloadHash(hash){
	var res = "";
	switch(hash) {
		case "#licenseList":
			res = "licenseList";
			break;
		case "#createLicense":
			res = "createLicense";
			break;
		case "#user":
			res = "user";
			break;
		default:
	     	res="licenseList";
	}
	
	var url = "../html/"+res+".html";
				
	$('#licenseList').addClass("layui-this");
	$("#content").load(url);
	$("#nav li").removeClass("layui-this");
	$('#'+res).addClass("layui-this");
}
