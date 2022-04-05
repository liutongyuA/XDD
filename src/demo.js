import string from './css.js'
let btnPlay=document.getElementById('btnPlay')
let btnPause=document.getElementById('btnPause')
let btnSlow=document.getElementById('btnSlow')
let btnNormal=document.getElementById('btnNormal')
let btnFast=document.getElementById('btnFast')
let btnRePlay=document.getElementById('btnRePlay')
let cssCode=document.getElementById('cssCode')
let cssStyle=document.getElementById('cssStyle')
let audio = document.querySelector('audio')
//定时器标识
let timer
//css字符串切割位
let n =1
//定时器执行时间间隔。用来控制速度
let speed =70
const run= function (){
//如果处于暂停状态就播放
audio.play()
    // 判断是否有定时器了
    if (timer) clearInterval(timer)
     timer = setInterval(()=>
    {
        // 写入页面css代码
        n+=1
        cssCode.innerText =string.substring(0,n)
        cssStyle.innerHTML =string.substring(0,n)
        cssCode.scrollTop = cssCode.scrollHeight
    },speed)
    console.log(timer);
}
btnPlay.onclick = run
btnPause.onclick=function(){
    audio.pause()
    clearInterval(timer)
}
btnSlow.onclick=function(){
    //降速
    speed=200
    if(n!=1)
    run()
}
btnNormal.onclick=function(){
    speed=70
    if(n!=1)
    run()
}
btnFast.onclick=function(){
    speed=0
    if(n!=1)
    run()
}
btnRePlay.onclick=function(){
    n=0
    audio.currentTime = 0;
    run()
}