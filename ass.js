$(document).ready(function(){

$("#submit").click(function(){

var color = $("#bg").val();
var title = $("#inputbooktitle").val();
var subtitle = $("#inputbooksubtitle").val();
var name = $("#authorname").val();
var publisher = $("#pub").val();
var year = $("#pubyear").val();

$("#cover").css("background-color", color);
$("#title").text(title);
$("#subtitle").text(subtitle);
$("#name").text(name);
$("#publisher").text(publisher);
$("#year").text(year);

});
});
