jQuery(document).ready( function($) {

		id5 =  $('.id5').offset();


} );

jQuery(document).scroll( function(){
		var scr = $(document).scrollTop();

		if(scr > id5.top){
			alert('More Then 200 px');
		}


});

