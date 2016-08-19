// VINALLA JAVASCRIPT LOOP 
// FOR MARKING LIST ITEMS AS DONE

// var listItem = document.querySelectorAll("li");
// var deleteButton =  document.querySelectorAll(".delete");
// for(var i = 0; i < listItem.length; i++) {
// 	listItem[i].addEventListener("click", function(){
// 		this.classList.toggle("done");
// 	});
// }

// jQuery MARKING LIST ITEMS AS DONE
$("ul").on("click", "li", function(){
	$(this).toggleClass('done');
})

$("ul").on("click", ".delete", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	e.stopPropagation();
})

$("input[type='text']").on("keypress", function(e){
	if(e.which === 13) {
		var newItem = $(this).val();
		$("ul").append("<li><span class=\"delete\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> " + newItem + "</li>");
		$(this).val("");
	}
})

$(".fa-plus-circle").on("click", function(){
	$("input[type='text']").fadeToggle(200);
})