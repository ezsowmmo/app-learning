function doOnce() {
  
      if((navigator.userAgent.match(/wv/)) ) {
            show_modal();
           }
             
      else if((navigator.userAgent.match(/iPhone/)) && !(navigator.userAgent.match(/Safari/))) {
             show_modal();
            }
      else{
            //show_modal();
          window.location.href = "https://www.bkash.com/app/";
            }
             
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function show_modal(){
  if (!document.cookie.split('; ').find(row => row.startsWith('doSomethingOnlyOnce'))) {
     $('#onceModal').modal('toggle');
    document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.getElementById( 'show_whats_new' ).scrollIntoView();
  }
    else{
        
            var whats_new = readCookie('whats_new');
            var home_dot= readCookie('home_dot');
            var menu_dot= readCookie('menu_dot');
            var survey_dot = readCookie('survey_dot');
            if (whats_new == "seen_whats_new_feb"){
            document.getElementById('whats_new_dot').style.display="none";
            }
            if (home_dot == "seen_home_01"){
            document.getElementById('home_dot').style.display="none";
            }
            if (menu_dot == "seen_menu_01"){
            document.getElementById('menu_dot').style.display="none";
            }
         
        
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
                    
             if (survey_dot == myObj.cache ){
            document.getElementById('survey_dot').style.display="none";
            }
            else if (myObj.cache == "no_survey" ){
            document.getElementById('survey_dot').style.display="none";
            }
            
        }     
        };
        xmlhttp.open("GET", "survey.json", true);
        xmlhttp.send();
        

    }
} 

 