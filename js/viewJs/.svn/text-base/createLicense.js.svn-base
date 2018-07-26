
function createLicense(){
	var licenseAppName = $("#licenseAppName").val();
	var licenseDeviceCount = $("#licenseDeviceCount").val();
	var licenseUseTimeLimit = $("#licenseUseTimeLimit").val();
	var licenseApplyCategory = $("#licenseApplyCategory").val();
	var licenseClientType = $("#licenseClientType").val();
	
	var licenseUserId = localStorage.getItem("userId"); 
	
	var data = {
		"licenseAppName" : licenseAppName ,
		"licenseDeviceCount" : licenseDeviceCount ,
		"licenseUseTimeLimit" : licenseUseTimeLimit ,
		"licenseApplyCategory" : licenseApplyCategory ,
		"licenseClientType" : licenseClientType ,
		"licenseUserId" : licenseUserId,
	}
	
	console.log(data);
	data = JSON.stringify(data);
	$.ajax({ 
		url: serviceApi.createLicense, 
		dataType : "json",
		headers: {
	        "Content-Type" : "application/json; charset=utf-8"
	   	},
		type : "post",
		data : data ,
		success: function(res){
			console.log(res);
			if (res.resultCode == 200) {
				var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
				parent.layer.close(index); // 关闭layer
			}else {
				publicFun.toast(res.message);
			}
  		},
  	});
}
