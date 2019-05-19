$(document).ready(function(){

	// amout
	$("#inc").click(function(){
	    $("#amountSpan").text( Number($("#amountSpan").text()) + 1 );
	});
	$("#dec").click(function(){
	    $("#amountSpan").text( Number($("#amountSpan").text()) - 1 );
	});

	// flat toggle
	$('.flat-toggle').on('click', function() {
        $(this).toggleClass('off');
    });

    $('.flat-toggle').on('click', function() {
        $('.private').toggle(function(){
            $('.private').addClass('public');
            $('.public').removeClass('public');
        });
    });

	// slick nav
	$('#nav').slicknav();
});

