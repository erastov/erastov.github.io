$(document).ready(function() {
	var visibility = false;

	$("#nick").hover(function(){
		$("#nick").html("I AM NOT JUST PAGE ;)");
	})
	$("#nick").mouseout(function(){

		$("#nick").html("I AM JUST PAGE.");
 	});

	var temp;
 	$(".material-icons").click(function(){
 		if(visibility) {
 			$("#name").html(temp);
 			$("#nick").hover(function(){
				$("#nick").html("I AM NOT JUST PAGE ;)");
			})
			$("#nick").mouseout(function(){

				$("#nick").html("I AM JUST PAGE.");
		 	});

 			$("#subname").html("DON'T CLICK ON THE CROSS!!!");

 			$(".material-icons").html("clear");
 			visibility = false;
 		}
 		else{
 			temp = $("#name").html();
 			$("#name").html("<a href='https://t.me/defaultdefault' style='text-decoration: none'>@defauldefault</a>");
 			$("#subname").html("<a href='https://github.com/erastov'>profile</a>");
 			$("#subname").append(" - <a href='https://github.com/erastov/erastov.github.io'>repo</a>")
 			$("#subname").append(" - <a href='https://github.com/sofiazakharova/SofiaZakharova.github.io/wiki'>wiki</a>")
 			$(".material-icons").html("brightness_1");
 			visibility = true;
 		}
 	})


});
