var pres1;
var pres2;
var pres3;

$.getJSON( "./data/votes.json" ).done( function(votes) {
	pres1 = votes.presone.votes;
	pres2 = votes.prestwo.votes;
	pres3 = votes.presthree.votes;
	console.log(pres1);
	console.log(pres2);
	console.log(pres3);
 });

// $('.button').click(function(){
//     var clickBtnValue = $(this).val();
//     var ajaxurl = '../php/echo.php',
//     data =  {'action': clickBtnValue};
//     $.post(ajaxurl, data, function (response) {
//         // Response div goes here.
//         // alert("action performed successfully");
//     });
// });


// function explode(){
// 	console.log(pres1);
// 	console.log(pres2);
// 	console.log(pres3);
// }
// setTimeout(explode, 2000);
