
function magicWheel(){
    var x= 1024;
    var b = 9999;
    var deg = Math.floor(Math.random()*(x-b))+b;
    document.getElementById('sa').style.transform = "rotate("+deg+"deg)";
    setTimeout(()=>{
        document.getElementById('wheeltxt').style.opacity = '1'
    }, 3500)
}

function animateStart(){
    document.getElementById("apaan").innerHTML = '<small>5 things about you</small>'
    document.getElementById("u1").style.transform = 'translate(-107.5%, -150%)'
    document.getElementById("u1").style.cursor = 'auto'
    document.getElementById("u2").style.transform = 'translate(7.5%, -150%)'
    document.getElementById("u3").style.transform = 'translate(-140%, -37.5%)'
    document.getElementById("u4").style.transform = 'translate(40%, -37.5%)'
    document.getElementById("u5").style.transform = 'translate(-50%, 40%)'

    
    document.getElementById("u1").addEventListener("mouseover", ()=>{
        document.getElementById('apaantxt').innerText = "Smile";
    }); 
    document.getElementById("u2").addEventListener("mouseover", ()=>{
        document.getElementById('apaantxt').innerText = "Compassion";
    }); 
    document.getElementById("u3").addEventListener("mouseover", ()=>{
        document.getElementById('apaantxt').innerText = "Kindness";
    }); 
    document.getElementById("u4").addEventListener("mouseover", ()=>{
        document.getElementById('apaantxt').innerText = "Loyalty";
    }); 
    document.getElementById("u5").addEventListener("mouseover", ()=>{
        document.getElementById('apaantxt').innerText = "Honesty";
    }); 
}

// document.getElementById("u1").onmouseover() = function(){
//     document.getElementById("apaantxt").innerHTML = "Your smile"
// }

