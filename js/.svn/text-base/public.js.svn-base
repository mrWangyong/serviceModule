


var publicFun = {
	confirm: function() {
		layui.use('layer', function() {
			var layer = layui.layer;
			layer.confirm('确定要退出？', {
				btn: ['是', '否'] //按钮
			}, function() {
				window.location.href = "../index.html";
			}, function() {
				layer.close();
			});
		});
	},
	toast : function (msg){
		layui.use('layer', function() {
			var layer = layui.layer;
			layer.msg(msg, {
		    time: 2000, 
		  });
		});
	},
	close: function() {
		layui.use('layer', function() {
			var layer = layui.layer;
			layer.close();
		});
	},
	timestampToTime:function (timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        Y = date.getFullYear() + '-';
        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        D = date.getDate() + ' ';
        h = date.getHours() + ':';
        m = date.getMinutes() + ':';
        s = date.getSeconds();
        return Y+M+D+h+m+s;
   },
   isNotEmpty:function(str){
	   	if (str !== null || str !== undefined || str !== '') { 
			return true ;
		} else {
			return false ;
		}
   }
}