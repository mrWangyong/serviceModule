

$.ajax({ 
	url: serviceApi.login, 
	dataType : "json",
	headers: {
        "Content-Type" : "application/json; charset=utf-8"
   	},
	type : "post",
	data : data ,
	success: function(res){
		console.log(res);
		if (res.resultCode == 200) {
			localStorage.username = username ;
			localStorage.userId = res.userId ;
			window.location.href = "html/home.html#licenseList";
		}else {
			alert(res.message);
		}
		
	},
});