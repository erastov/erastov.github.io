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

 			$("#subname").html("OF THE FULLSTACK DEVELOPER");

 			$(".material-icons").html("airplanemode_active");
 			visibility = false;
 		}
 		else{
 			temp = $("#name").html();
 			$("#name").html("+7 915 226 0738");
 			$("#subname").html("f.erastov@qiwi.com");
 			$(".material-icons").html("airplanemode_inactive");
 			visibility = true;
 		}
 	})


});