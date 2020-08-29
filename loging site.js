"use strict";

var ran_num = parseFloat((Math.floor(Math.random()*12) + 4.5));
 console.log(ran_num)

 switch(ran_num){
     case(4.5):
         document.querySelector(".color").classList.add("cl_4");
         break;

    case(5.5):
        document.querySelector(".color").classList.add("cl_5");
        break;

    case(6.5):
        document.querySelector(".color").classList.add("cl_6");
        break;

    case(7.5):
        document.querySelector(".color").classList.add("cl_7");
        break;

    case(8.5):
        document.querySelector(".color").classList.add("cl_8");
        break;

    case(9.5):
        document.querySelector(".color").classList.add("cl_9");
        break;

    case(10.5):
        document.querySelector(".color").classList.add("cl_10");
        break;

    case(11.5):
        document.querySelector(".color").classList.add("cl_11");
        break;

    case(12.5):
        document.querySelector(".color").classList.add("cl_12");
        break;

    case(13.5):
        document.querySelector(".color").classList.add("cl_13");
        break;

    case(14.5):
        document.querySelector(".color").classList.add("cl_14");
        break;

    default:
        document.querySelector(".color").classList.add("cl_15");
        break;
 }

setTimeout(function(){
    document.querySelector(".bx_0").classList.add("dis_1");
    document.querySelector(".bx_1").classList.remove("dis_1");
},ran_num*1000)

var b_1 = document.querySelector(".go_next");

b_1.addEventListener("click",function(){
    document.querySelector(".bx_1").classList.add("dis_1");
    document.querySelector(".bx_2").classList.remove("dis_1");
})

var lg_in = document.querySelector(".log_in");
lg_in.addEventListener("click",function(){
    document.querySelector(".bx_2").classList.add("dis_1");
    document.querySelector(".bx_3").classList.remove("dis_1");
})

var sn_up = document.querySelector(".sin_up");
sn_up.addEventListener("click",function(){
    document.querySelector(".bx_2").classList.add("dis_1");
    document.querySelector(".bx_4").classList.remove("dis_1");
})

var ps_vw = document.querySelector(".vew_pass");
var x = 0;
ps_vw.addEventListener("click",function(){
    x = x + 1;
    if(x>=2){
        x = 0;
        document.querySelector(".un_3").type = "password";
    }
    else{
        document.querySelector(".un_3").type = "text";
    }
    
})

var lg_btn = document.querySelector(".log_in_btn");
lg_btn.addEventListener("click",function(){
    var u_n = document.querySelector(".un_1").value;
    var u_e = document.querySelector(".un_2").value;
    var u_p = document.querySelector(".un_3").value;
    var myName = "Bijoy";
    var myEmeil = "bijoyhassan23@gmail.com";
    var myPass = "BijoyHassan";
    if(u_n==myName && u_e == myEmeil && u_p == myPass){
        document.querySelector(".bx_3").classList.add("dis_1");
        document.querySelector(".bx_5").classList.remove("dis_1");

        setTimeout(function(){
            document.querySelector(".bx_5").classList.add("dis_1");
        },2000)
    }

    else{
        alert("Give valid data");
        console.log("vul hoise");
    }
    
})

var sin_up_btn = document.querySelector(".crat_ac");
sin_up_btn.addEventListener("click",function(){
    document.querySelector(".bx_4").classList.add("dis_1");
    document.querySelector(".bx_5").classList.remove("dis_1");
    var ytx = document.querySelector(".frm_in_1").value;
    document.querySelector(".user_name").innerHTML = ytx;

    setTimeout(function(){
        document.querySelector(".bx_5").classList.add("dis_1");
    },2000)
})