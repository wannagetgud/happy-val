$(document).ready(function(){
    setTimeout(function(){
        $('#loader-wrapper').css('display','none');
    }, 2500);
});

$("#yes").click(function(){
    var radioName = $(this).attr("name");
    $(":radio[name='"+radioName+"']").attr("disabled", true);
    window.alert("Yeeeee ehe dah gabisa diganti")
});

$("#no").click(function(){
    window.alert("Yahhh :(")
});

function magicWheel(){
    var x= 1024;
    var b = 9999;
    var deg = Math.floor(Math.random()*(x-b))+b;
    $('#sa').css('transform', "rotate("+deg+"deg)");
    setTimeout(()=>{
        $('#wheeltxt').css('opacity', '1')
    }, 3500)
}

function animateStart(){
    $("#apaan").html('<small>5 things about you</small>')
    $("#u1").css("transform", "translate(-107.5%, -150%)")
    $("#u1").css("cursor", "auto")
    $("#u2").css("transform", "translate(7.5%, -150%)")
    $("#u3").css("transform", "translate(-140%, -37.5%)")
    $("#u4").css("transform", "translate(40%, -37.5%)")
    $("#u5").css("transform", "translate(-50%, 40%)")

    $("#u1").mouseover(()=>{
        $("#apaantxt").text("Smile");
    }); 
    $("#u2").mouseover(()=>{
        $("#apaantxt").text("Compassion");
    }); 
    $("#u3").mouseover(()=>{
        $("#apaantxt").text("Kindness");
    }); 
    $("#u4").mouseover(()=>{
        $("#apaantxt").text("Loyalty");
    }); 
    $("#u5").mouseover(()=>{
        $("#apaantxt").text("Honesty");
    }); 
}
