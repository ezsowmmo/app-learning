        
    document.getElementById('input').addEventListener("keyup", myFunction);

    var inputBox = document.getElementById('input');

    function myFunction(){
    var snd_charge = 5;
    var cashout_agent_charge = 18.5;
    var cashout_nxt_charge = 17.5;
    var cashout_atm_charge = 15;
    var b2b_charge = .02;
    var inp = +inputBox.value;
    
    var  select_value= document.getElementById("mySelect").value;
    var  service_icon= document.getElementById("service_icon");
    var input_div = document.getElementById("input_div");
    var charge_txt = document.getElementById("charge_text");
    var charge = document.getElementById("charge");
    var b_charge_txt = document.getElementById("b_charge_text");
    var b_charge = document.getElementById("b_charge");  
    var charge_notice = document.getElementById("charge_notice");
    var no_charge = document.getElementById("no_charge");
	var free_img = document.getElementById("free_img");
        
    if (select_value=="snd_dial"){
      no_charge.style.display = "none";
      free_img.style.display = "none";
      charge.style.display = "block";
      charge_notice.style.display = "block";
      input_div.style.display = "block";
      service_icon.src= "assets/Send_Money.svg";
        
    document.getElementById('charge_notice').innerHTML= "<span class='b_link'>সঠিক টাকার পরিমান 10 থেকে 25,000</span> <br>10 থেকে 500 টাকা পর্যন্ত সেন্ড মানি করতে কোনো চার্জ নেই<br>501 ও তার বেশি অ্যামাউন্টের ক্ষেত্রে প্রতি লেনদেনে 5 টাকা চার্জ প্রযোজ্য হবে";
       if (inp>=10  && inp<=500 ){
            charge_txt.style.display = "block";
            b_charge_txt.style.display = "block";
            b_charge.style.display = "block";
            document.getElementById('b_charge').innerHTML= "কোনো চার্জ নেই";
            document.getElementById('charge').innerHTML= inp +" টাকা";
        } 
        else if (inp >= 500 && inp <= 25000){
        charge_txt.style.display = "block";
        var result=  inp + snd_charge;
        b_charge_txt.style.display = "block";
        b_charge.style.display = "block";
        document.getElementById('b_charge').innerHTML= snd_charge +" টাকা";
        document.getElementById('charge').innerHTML= result + " টাকা";
        }
      else {
        charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
        charge_txt.style.display = "none";
      }
    }
    
    else if (select_value=="c_agnt"){
    no_charge.style.display = "none";
    free_img.style.display = "none";
    charge.style.display = "block";
    charge_notice.style.display="block";
    service_icon.src= "assets/cash_out.svg";
    document.getElementById('charge_notice').innerHTML= "<span class='b_link'>সঠিক টাকার পরিমান 50 থেকে 25,000</span><br>50 থেকে 1000 টাকা পর্যন্ত ক্যাশ আউট করতে কোনো চার্জ নেই";
    input_div.style.display = "block";
      if (inp>=50 && inp <=1000 ){
       b_charge_txt.style.display = "block";
       b_charge.style.display = "block";
       charge_txt.style.display = "block";
       document.getElementById('b_charge').innerHTML= "কোনো চার্জ নেই";
       document.getElementById('charge').innerHTML= inp + " টাকা";
      } 
      else if (inp <= 50 ){
      b_charge_txt.style.display="none";
      b_charge.style.display="none";    
      charge_txt.style.display="none";
      charge.style.display="none";      
      } 
        
      else if (inp >= 1000 && inp <= 25000){
      b_charge_txt.style.display = "block";
      b_charge.style.display = "block";
      charge_txt.style.display = "block";
      var result= cashout_agent_charge / 1000 * inp + inp;
      var result0= cashout_agent_charge / 1000 * inp;  
      result0=result0.toFixed(2);
      result =  result.toFixed(2);
      document.getElementById('b_charge').innerHTML= result0 + " টাকা";
      document.getElementById('charge').innerHTML= result + " টাকা";
      }
        else if (inp => 25000){
        charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
       charge_txt.style.display="none";
        }
      else {
        charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
        charge_txt.style.display="none";
      }
    }
    
    else if (select_value=="c_agnt_next"){
    no_charge.style.display = "none";
    free_img.style.display = "none";
    charge.style.display = "block";       
    charge_notice.style.display="block";
    service_icon.src= "assets/cash_out.svg";
    document.getElementById('charge_notice').innerHTML= "<span class='b_link'>সঠিক টাকার পরিমান 50 থেকে 25,000</span><br>50 থেকে 1000 টাকা পর্যন্ত ক্যাশ আউট করতে কোনো চার্জ নেই";
    input_div.style.display = "block";
      if (inp>=50 && inp <=1000 ){
       b_charge_txt.style.display = "block";
       b_charge.style.display = "block";
       charge_txt.style.display = "block";
       document.getElementById('b_charge').innerHTML= "কোনো চার্জ নেই";
       document.getElementById('charge').innerHTML= inp +" টাকা";
      } 
      else if (inp <= 50 ){
      b_charge_txt.style.display="none";
      b_charge.style.display="none";    
      charge_txt.style.display="none";
      charge.style.display="none";      
      } 
      else if (inp > 1000 && inp <= 25000){
      b_charge_txt.style.display = "block";
      b_charge.style.display = "block";
      charge_txt.style.display = "block";
      var result= cashout_nxt_charge / 1000 * inp + inp;
      var result0= cashout_nxt_charge / 1000 * inp; 
      result0 =  result0.toFixed(2);
      result =  result.toFixed(2);
      document.getElementById('b_charge').innerHTML= result0 + " টাকা";
      document.getElementById('charge').innerHTML= result + " টাকা";
      }
      else {
          charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
        charge_txt.style.display = "none";
      }
    }
    
    else if (select_value=="c_atm"){
    no_charge.style.display = "none";
    free_img.style.display = "none";
    charge.style.display = "block";
    input_div.style.display = "block";
    charge_notice.style.display="block";
    service_icon.src= "assets/cash_out.svg";
    document.getElementById('charge_notice').innerHTML= "<span class='b_link'>সঠিক টাকার পরিমান 2,000 থেকে 25,000</span><br>500 টাকার গুনিতকে পরিমান উল্লেখ করুন";
  	var result= cashout_atm_charge / 1000 * inp + inp;
    var result0= cashout_atm_charge / 1000 * inp;
    if (inp % 500 === 0  && inp >= 2000 && inp <= 25000){
        b_charge_txt.style.display = "block";
        b_charge.style.display = "block";
        charge_txt.style.display = "block";

      document.getElementById('b_charge').innerHTML= result0 + " টাকা"; 
      document.getElementById('charge').innerHTML= result + " টাকা";
}
      else if (inp < 2000){
        charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
        charge_txt.style.display = "none";
      }
      else {
        charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
        charge_txt.style.display = "none";
      }
    }
    
    else if (select_value=="b2b"){
    no_charge.style.display = "none";
    free_img.style.display = "none";
    charge.style.display = "block";
    input_div.style.display = "block";
    charge_notice.style.display="block";
    service_icon.src= "assets/b2b.svg";
    document.getElementById('charge_notice').innerHTML= "<span class='b_link'>সঠিক টাকার পরিমান 10 থেকে 25,000</span>";
  	var result= b2b_charge * inp + inp;
    var result0= b2b_charge * inp;
    result0 =  result0.toFixed(2);
    result =  result.toFixed(2);
        
        if (inp >= 10 && inp <= 25000){
       b_charge_txt.style.display = "block";
       b_charge.style.display = "block";
       charge_txt.style.display = "block";
      document.getElementById('b_charge').innerHTML= result0 + " টাকা"; 
      document.getElementById('charge').innerHTML= result + " টাকা";
}
      else if (inp < 10){
        charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
        charge_txt.style.display = "none";
      }
      else {
        charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
        charge_txt.style.display = "none";
      }
    }
    
    else if (select_value=="payment"){
        service_icon.src= "assets/payment.svg";
        free_img.style.display = "block";
        no_charge.style.display = "block";
        input_div.style.display = "none";
        charge_notice.style.display = "none";
        charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
        charge_txt.style.display = "none";
    }
          
    else if (select_value=="statement"){
        service_icon.src= "assets/inbox.svg";
        free_img.style.display = "block";
        no_charge.style.display = "block";
        input_div.style.display = "none";
        charge_notice.style.display = "none";
        charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
        charge_txt.style.display = "none";
    }
        
    else if (select_value=="balance"){
        service_icon.src= "assets/balance.svg";
        free_img.style.display = "block";
        no_charge.style.display = "block";
        input_div.style.display = "none";
        charge_notice.style.display = "none";
        charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
        charge_txt.style.display = "none";
    }
        
    else if (select_value=="pin"){
        service_icon.src= "assets/pin.svg";
        free_img.style.display = "block";
        no_charge.style.display = "block";
        input_div.style.display = "none";
        charge_notice.style.display = "none";
        charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
        charge_txt.style.display = "none";
    }
    
    else if (select_value=="mobile_recharge"){
        service_icon.src= "assets/mobile_recharge.svg";
        free_img.style.display = "block";
        no_charge.style.display = "block";
        input_div.style.display = "none";
        charge_notice.style.display = "none";
        charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
        charge_txt.style.display = "none";
    }  
        
    else if (select_value=="add_money"){
        service_icon.src= "assets/add_money.svg";
        free_img.style.display = "block";
        no_charge.style.display = "block";
        input_div.style.display = "none";
        charge_notice.style.display = "none";
        charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
        charge_txt.style.display = "none";
    } 
        
    else if (select_value=="ekyc"){
        service_icon.src= "assets/kyc.svg";
        free_img.style.display = "block";
        no_charge.style.display = "block";
        input_div.style.display = "none";
        charge_notice.style.display = "none";
        charge.style.display="none";
        b_charge_txt.style.display = "none";
        b_charge.style.display = "none";
        charge_txt.style.display = "none";
    } 
        
    else {
    document.getElementById('no_charge').innerHTML= "কোনো চার্জ প্রযোজ্য নয় (ফ্রি)";
    service_icon.src= "";  
    free_img.style.display = "block";
   	no_charge.style.display = "block";
    input_div.style.display = "none";
    charge_notice.style.display = "none";
    charge.style.display="none";
    b_charge_txt.style.display = "none";
    b_charge.style.display = "none";
    charge_txt.style.display = "none";

    }
}