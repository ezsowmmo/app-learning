 
var myObj, i, j, x = "";
myObj = {
  "contents": [
    {"title":"Palli Bidyut Prepaid", "bangla":"পল্লী বিদ্যুৎ প্রিপেইড","img_url":"https://images.uatcapp.bka.sh/images/public/biller/REB.png",
     "Youtub_Link_Id":"yH2OfVJP54k"},
    {"title":"Palli Bidyut Postpaid", "bangla":"পল্লী বিদ্যুৎ পোস্টপেইড","img_url":"https://images.uatcapp.bka.sh/images/public/biller/REB.png",
     "Youtub_Link_Id":"bameWqCpBsc"},
    {"title":"DESCO Prepaid","bangla":"ডেসকো প্রিপেইড", "img_url":"https://s3-ap-southeast-1.amazonaws.com/com.bkash.customerapp.sit/images/public/logo/DESCO.jpeg",
     "Youtub_Link_Id":"Av0HqsaeY7c"}, 
    {"title":"DESCO Postpaid", "bangla":"ডেসকো পোষ্টপেইড", "img_url":"https://s3-ap-southeast-1.amazonaws.com/com.bkash.customerapp.sit/images/public/logo/DESCO.jpeg",
     "Youtub_Link_Id":"m8uQ0MYrgxc"},
    {"title":"NESCO", "bangla":"নেসকো","img_url":"https://images.uatcapp.bka.sh/images/public/biller/NESCO.png",
     "Youtub_Link_Id":"i98jsPwDbrs"},
    {"title":"DPDC Prepaid", "bangla":"ডিপিডিসি প্রিপেইড","img_url":"assets/dpdc.png",
     "Youtub_Link_Id":"4shm99SE3hA"},
    {"title":"DPDC Postpaid", "bangla":"ডিপিডিসি পোস্টপেইড","img_url":"assets/dpdc.png",
     "Youtub_Link_Id":"YuYEMfs7fNw"},
    {"title":"BPDB Postpaid", "bangla":"বিপিডিবি পোস্টপেইড","img_url":"https://images.uatcapp.bka.sh/images/public/biller/BPDB_11.png",
     "Youtub_Link_Id":"5peoM57jWkE"}, 
    {"title":"BPDB Prepaid", "bangla":"বিপিডিবি প্রিপেইড","img_url":"https://images.uatcapp.bka.sh/images/public/biller/BPDB_11.png",
     "Youtub_Link_Id":"JEyVqFCHrdQ"},
    {"title":"BPDB Sylhet Prepaid", "bangla":"বিপিডিবি সিলেট প্রিপেইড","img_url":"https://images.uatcapp.bka.sh/images/public/biller/BPDB_11.png",
     "Youtub_Link_Id":"WmvpRy1D2AI"},
    {"title":"Westzone Postpaid", "bangla":"ওয়েস্টজোন","img_url":"https://images.uatcapp.bka.sh/images/public/biller/WZPDCL.png",
     "Youtub_Link_Id":"fnI9jiEeyc8"},
      
    {"title":"Jalalabad Gas", "bangla":"জালালাবাদ গ্যাস","img_url":"http://www.jalalabadgas.org.bd/themes/responsive_npf/img/logo/jalalabadgas.png",
     "Youtub_Link_Id":"yKxbPuMsZRs"},
    {"title":"Paschimanchal Gas", "bangla":"পশ্চিমাঞ্চল গ্যাস","img_url":"https://images.uatcapp.bka.sh/images/public/biller/PGCL_1.png",
     "Youtub_Link_Id":"kFHGeW8D-yY"},
      
    {"title":"DHAKA WASA", "bangla":"ঢাকা ওয়াসা","img_url":"https://images.uatcapp.bka.sh/images/public/biller/DWASA1.png",
     "Youtub_Link_Id":"ByQfpZZyCBc"},
    {"title":"Chattogram WASA", "bangla":"চট্টগ্রাম ওয়াসা","img_url":"https://images.uatcapp.bka.sh/images/public/biller/CWASA.jpg",
     "Youtub_Link_Id":"OYUWzvS6wJw"}
   

  ]
}
for (i in myObj.contents) {
//  x += "<div class='border_btm''><img class='force_img' src='"+ myObj.contents[i].img_url +"'> <h4 style='color:#464646;float: right;margin-top: -8%;padding-right: 1%;'>" + myObj.contents[i].title + "</h4>" +
//  "<div class='embed-responsive embed-responsive-16by9' style='margin-top:3%;'><iframe class='embed-responsive-item' src='"+ myObj.contents[i].link +"'allowfullscreen>"+myObj.contents[i].title+""+myObj.contents[i].bangla+"</iframe></div></div>";
//    maxresdefault.jpg
    
    x += "<div class='border_btm''><img class='force_img' src='"+ myObj.contents[i].img_url +"'> <h4 style='color:#464646;float: right;margin-top: -8%;padding-right: 1%;'>" + myObj.contents[i].title + "</h4><h4 class='force_hide' style='display:none;color:#464646;float: right;margin-top: -8%;padding-right: 1%;'>"+myObj.contents[i].bangla+"</h4>" +
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
