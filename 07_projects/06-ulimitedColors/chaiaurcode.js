//generate a random color

const randomcolor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i =0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}

    let intervalid;
const startChangingColor=function(){
    if(!intervalid){
        intervalid=setInterval(chnageBgColor,1000)
    }
    function chnageBgColor(){
        document.body.style.backgroundColor=randomcolor()
    }
}
const stopChangingColor=function(){
    clearInterval(intervalid)
    intervalid=null;
}
// console.log(randomcolor());//0 to 16 values
document.querySelector("#start").addEventListener('click',startChangingColor)

document.querySelector("#stop").addEventListener('click',stopChangingColor)