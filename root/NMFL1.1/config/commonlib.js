module.exports = {
	processLog:[],
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
			},
		    exhibitProcessLog:function(){
              
		    },
			getBufferSize:function(){
			
			return 1024*1000;
					
			}
};