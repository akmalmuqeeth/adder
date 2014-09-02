$(document).ready(function(){
	
	$("#plusBtn").click(function(){
		var x = $("#xInput").val();
		var y = $("#yInput").val();
		var sum = parseInt(x) + parseInt(y);
		$("#result").text("X plus Y is "+ sum);
	});

	$("#minusBtn").click(function(){
		var x = $("#xInput").val();
		var y = $("#yInput").val();
		var diff = parseInt(x) - parseInt(y);
		$("#result").text("X minus Y is "+ diff);
	});
});