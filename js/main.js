jQuery(document).ready(function($){

	var reasons = new Array();
	var reason_no = 0;
	
	$.ajax({
		type: "GET",
		url: "/reasons.txt",
		dataType: "text",
		success: function(data) {processData(data, init_reasons);}
	});
	
	function processData(data, callback){
		var allTextLines = data.split(/\r\n|\n/);
		reasons = shuffle(allTextLines);
		callback(reasons);
	}
	
	function init_reasons(reasons){
		console.log(reasons);
		$('#reason').html(reasons[reason_no]);
	}
	
	function shuffle(array) {
		var tmp, current, top = array.length;
		
		if(top) while(--top) {
			current = Math.floor(Math.random() * (top + 1));
			tmp = array[current];
			array[current] = array[top];
			array[top] = tmp;
		}
		
		return array;
	}
	
	$('#more').click(function(e){
	
		reason_no++;
		
		if(reasons.length == reason_no){			
			
			$('#reason').attr('class', 'bouncy');
			
			//Working here.
			
			//$("#reason").throwable({gravity:{x:0,y:+2}});
			$("#reason").throwable({containment:[0,0,100,100], drag:true,gravity:{x:0,y:+2},bounce:2,damping:0, containment:"parent", impulse: {f: 10, p:{x:5,y:5}}});
			$('#reason').removeAttr('id');
			
			$("h1").after('That\'s all we have right now. Got more? Why not fork us on Github? =]');
		}else if(reasons.length >= reason_no){
			
			$('#reason').attr('class', 'bouncy');
			
			//Working here.
			
			//$("#reason").throwable({gravity:{x:0,y:+2}});
			$("#reason").throwable({containment:[0,0,100,100], drag:true,gravity:{x:0,y:+2},bounce:2,damping:0, containment:"parent", impulse: {f: 10, p:{x:5,y:5}}});
			$('#reason').removeAttr('id');
			
			$("h1").after('<p id="reason">' + reasons[reason_no] + '</p>');
		}
		
	});
	
	
});