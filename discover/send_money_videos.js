 
var myObj, i, j, x = "";
myObj = {
  "contents": [
    {"title":"যেভাবে বিকাশ একাউন্ট নেই এমন নাম্বারে সেন্ড মানি করবেন", "img_url":"assets/Send_Money.svg",
     "Youtub_Link_Id":"U_c80lcJOw4"},
    {"title":"যেভাবে সেন্ড মানি রিকোয়েস্ট ক্যানসেল করতে পারবেন", "img_url":"assets/Send_Money.svg",
     "Youtub_Link_Id":"1wTWjEQi5xE"}
  ]
}
for (i in myObj.contents) {
//  x += "<div class='border_btm''><img class='force_img' src='"+ myObj.contents[i].img_url +"'> <h4 style='color:#464646;float: right;margin-top: -8%;padding-right: 1%;'>" + myObj.contents[i].title + "</h4>" +
//  "<div class='embed-responsive embed-responsive-16by9' style='margin-top:3%;'><iframe class='embed-responsive-item' src='"+ myObj.contents[i].link +"'allowfullscreen>"+myObj.contents[i].title+""+myObj.contents[i].bangla+"</iframe></div></div>";
//    maxresdefault.jpg <i class='fa fa-youtube force_thumb' aria-hidden='false'></i>
    
    x += "<div class='border_btm''><img style=float:left;' src='"+ myObj.contents[i].img_url +"'> <h4 style='text-align: right;color:#464646;padding-left: 10%;margin-left: 5%;padding-right:1%;line-height: 130%;'>" + myObj.contents[i].title + "</h4><h4 class='force_hide' style='display:none;color:#464646;margin-top: -8%;padding-right: 1%;'>"+myObj.contents[i].bangla+"</h4>" +
  "<div class='youtube-thumb force_thumb'><a class='force_thumb' href='http://youtube.com/watch?v="+ myObj.contents[i].Youtub_Link_Id+"'><img class='img-thumbnail force_thumb' src='https://img.youtube.com/vi/"+ myObj.contents[i].Youtub_Link_Id+"/maxresdefault.jpg' style='margin-top:3%;'><img src='assets/yt.svg' class='fa fa-youtube force_thumb'></a></div></div>";


}
document.getElementById("content").innerHTML = x;

//search
$(document).ready(function(){
  $("#input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
      
    if($('#content').children(':visible').length == 0){
        $('.not_match').show();
    }
    if($('#content').children(':visible').length > 0){
        $('.not_match').hide();
    }
    if(value.length == 0){
        $('.not_match').hide();
    }
 
    $("#content *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          
    });
  });
});
