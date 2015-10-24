module.exports = {
	separator : function (flg) {
				var msg='',sprtr='-';;
				if(flg==='L'){sprtr='•';}
				if(flg==='M'){sprtr='/';}
				if(flg==='S'){sprtr='-';}
				for (var i = 0; i < 100; i++) {
					msg +=sprtr;
				}
				console.log(msg);
			},
			c:function(msg){
				console.log(msg);
			}
};