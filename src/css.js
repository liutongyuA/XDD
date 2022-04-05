const string = `/*首先画出哆啦A梦的头*/  
.doraemon .head{   
    width:320px;   
    height:300px;   
    background:#07bbee;   
    border-radius:150px;   
    border:#555 2px solid;   
    box-shadow:-5px 10px 15px rgba(0,0,0,0.45);   
    position:relative;   
}   
  
.doraemon .face{   
    position:relative;   
    z-index:2;   
}   
/*开始画脸部*/
.doraemon .face .white{   
    width:265px;   
    height:195px;   
    background:#fff;   
    border:#000 2px solid;   
    border-radius:150px 150px;   
    position:absolute;   
    top:75px;
    left:25px;   
}   
/*画出红鼻子*/
.doraemon .face .nose{   
    width:30px;   
    height:30px;   
    background:#c93300;   
    border: 2px solid #000;   
    border-radius:30px;   
    position:absolute;   
    top:110px;
    left:140px;   
    z-index:3;   
}   
.doraemon .face .nose .light{   
    width:10px;   
    height:10px; 
    border-radius:5px;   
    box-shadow:19px 8px 5px #FFF;   
} 
.doraemon .face .nose_line{ 
    width:3px;   
    height:100px;   
    background:#333;   
    position: absolute;
    top:143px;
    left:155px;   
    z-index:3;
} 
/*画出嘴巴*/
.doraemon .face .mouth{   
    position:absolute;   
    width:220px;   
    height:400px;   
    border-radius:120px;   
    border-bottom:3px solid #333;   
    top:-160px;
    left:45px;   
}  
.doraemon .eyes{   
    position:relative;   
    z-index:3;   
}  
/*画出眼睛*/  
.doraemon .eyes .eye{   
    position:absolute;   
    width:72px;   
    height:82px;   
    background:#fff;   
    border: 2px solid #000;   
    border-radius:35px 35px;   
    top:40px;   
}  
.doraemon .eyes .eye .black{   
    width:14px;   
    height:14px;   
    background:#000;   
    border-radius:14px;   
    position:relative;   
    top:40px;   
}  
.doraemon .eyes .left{   
    left:82px;   
}   
.doraemon .eyes .right{   
    left:156px;   
}  
.doraemon .eyes .eye .bleft{   
    left:50px;   
}   
.doraemon .eyes .eye .bright{   
    left:7px;   
} 
/*画出胡须*/
.doraemon .whiskers{   
    position:relative;   
    width:220px;   
    height:80px;  
    background-color: #FFF; 
    top:120px;
    left:45px;   
    z-index:2;   
}   
.doraemon .whiskers .whisker{   
    background:#333;   
    width:60px;   
    height:2px;   
    position:absolute;   
    z-index:2;   
}    
.doraemon .whiskers .rTop{   
    top:25px;left:165px;   
}   
.doraemon .whiskers .rt{   
    top:45px;left:167px;   
}   
.doraemon .whiskers .rBottom{   
    top:65px;left:165px;   
}       
.doraemon .whiskers .lTop{   
    top:25px;left:0px;   
}   
.doraemon .whiskers .lt{   
    top:45px;left:-2px;   
}   
.doraemon .whiskers .lBottom{   
    top:65px;left:0px;   
}       
.doraemon .whiskers .r160{   
    transform:rotate(160deg);   
    -webkit-transform:rotate(160deg);   
}       
.doraemon .whiskers .r20{   
    transform:rotate(20deg);   
    -webkit-transform:rotate(20deg);   
}  
/* 画铃铛 */
.doraemon .choker{   
    height:20px;   
    width:230px;   
    background:#c40;   
    border: 2px solid #000000;   
    border-radius:10px;   
    position:relative;   
    z-index:4;   
    top:-40px;
    left:45px;   
}   
.doraemon .choker .bell{   
    width:40px;   
    height:40px;   
    /* overflow:hidden;    */
    border: 2px solid #000;   
    border-radius:50px;   
    background:#f9f12a;   
    box-shadow:-5px 5px 10px rgba(0,0,0,0.25);   
    position:relative;   
    top:5px;
    left:90px;   
}  
.doraemon .choker .bell_line{   
    background:#c40;   
    border-radius:3px 3px 0px 0px;   
    border:2px solid #333333;   
    height:2px;width:36px;   
    position:relative;   
    top:10px;   
}   

.doraemon .choker .bell_circle{   
    background:#000;   
    border-radius:5px;   
    height:10px;width:12px;   
    position:relative;   
    top:10px;   
    left:13px;   
}   
.doraemon .choker .bell_under{   
    background:#000;   
    height:15px;width:3px;   
    top:10px;   
    left:18px;   
    position:relative;   
}   
.doraemon .choker .bell_light{   
    border-radius:10px;   
    box-shadow:19px 8px 5px #fff;   
    height:11px;width:11px;   
    position:relative;   
    top:-34px;   
    left:4px;   
    opacity:0.7;   
}   
/*下面画出身体*/
.doraemon .bodys{   
    position:relative;   
    top:-310px;   
}   
.doraemon .bodys .body{   
    width:220px;   
    height:165px;
    background:#07beea;   
    border: 2px solid #333;   
    position:absolute;   
    top:265px;   
    left:50px;   
}   
.doraemon .bodys .wraps{   
    width:170px;   
    height:170px;
    background:#fff;   
    border: 2px solid #000;   
    border-radius:85px;   
    position:absolute;   
    top:230px;   
    left:72px;   
}   
  
.doraemon .bodys .pocket{   
    position:relative;   
    width:130px;   
    height:130px;
    border-radius:65px;   
    background:#fff;   
    border: 2px solid #000;   
    top:250px;   
    left:92px;   
}   
.doraemon .bodys .pocket_mask{   
    position:relative;   
    width:134px;   
    height:60px;
    background:#fff;   
    border-bottom:2px solid #000;   
    top:125px;   
    left:92px;   
}  
/*画出胳膊*/
.doraemon .hand_right{   
    height:100px;
    width:100px;   
    position:absolute;   
    top:272px;   
    left:248px;   
}   
.doraemon .hand_left{   
    height:100px;
    width:100px;   
    position:absolute;   
    top:272px;   
    left:-10px;   
}   
.doraemon .arm{   
    height:50px;
    width:80px;   
    background:#07beea;   
    border: 1px solid #000000;   
    position:relative;   
    box-shadow:-10px 7px 10px rgba(0,0,0,0.35);   
    z-index:-1;   
}   
  
.doraemon .hand_right .arm{   
    top:17px;   
    transform:rotate(35deg);   
}   
.doraemon .hand_left .arm{   
    top:17px;   
    transform:rotate(145deg);   
}   
/* 画手 */
.doraemon .circle{   
    height:60px;
    width:60px;   
    background:#fff;   
    border: 2px solid #000;   
    border-radius:30px;   
    position:absolute;   
}   
  
.doraemon .hand_right .circle{   
    left:40px;   
    top:32px;   
}   
.doraemon .hand_left .circle{   
    left:-20px;   
    top:32px;   
}  
.doraemon .arm_rewrite{   
    width:5px;
    height:45px;
    background:#07beea;   
    position:relative;   
}   
/*遮挡身体*/
.doraemon .hand_right .arm_rewrite{   
    left:21px;   
    top:-45px;   
}       
.doraemon .hand_left .arm_rewrite{   
    left:59px;   
    top:-45px;   
}
/*画出脚  */
.doraemon .foot{   
    width:280px;       
    height:40px;   
    position:relative;   
    left:20px;   
    top:-141px;   
}  
.doraemon .foot .left{   
    height:30px;   
    width:125px;   
    background:#fff;   
    border: 2px solid #333;   
    border-radius:80px 60px 60px 40px;   
    box-shadow:-6px 0 10px rgba(0,0,0,0.35);   
    position:relative;   
    left:14px;   
    top:67px;   
}       
.doraemon .foot .right{   
    height:30px;   
    width:125px;   
    background:#fff;   
    border: 2px solid #333;   
    border-radius:80px 60px 60px 40px;   
    box-shadow:-6px 0 10px rgba(0,0,0,0.20);   
    position:relative;   
    left:141px;   
    top:33px;   
}   
.doraemon .foot .foot_rewrite{   
    width:20px;   
    height:11px;         
    background:#fff;   
    border-top:2px solid #000;   
    border-right:2px solid #000;   
    border-left:2px solid #000;   
    border-top-right-radius:40px;   
    border-top-left-radius:40px;   
    position:relative; 
    top:-12px;   
    left:132px; 
}
/*最后让小叮当眼睛动起来吧*/
.doraemon .eyes .eye .black{animation: eyemove 4s linear  infinite;}
`

export default string;