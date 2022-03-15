//  Hover effect on navbars
$(document).ready(function(){
    //history
    $("#liHistory").mouseover(function(){
        $(this).css('color','pink')
    });
    $("#liHistory").mouseout(function(){
        $(this).css('color','#033E9A')
    });
    //Shah Jahan
    $("#liShahjahan").mouseover(function(){
        $(this).css('color','pink')
    });
    $("#liShahjahan").mouseout(function(){
        $(this).css('color','#033E9A')
    });
    //Mumtaz mahal
    $("#liMumtaz").mouseover(function(){
        $(this).css('color','pink')
    });
    $("#liMumtaz").mouseout(function(){
        $(this).css('color','#033E9A')
    });
    // Facts
    $("#liFacts").mouseover(function(){
        $(this).css('color','pink')
    });
    $("#liFacts").mouseout(function(){
        $(this).css('color','#033E9A')
    });

    $("#liShahjahan").click(function(){
        $("#contentHistory").hide();
        $("#Mumtaz").hide();
        $("#facts").hide();
        $("#ShahJahan").show(3000);
    });
    $("#liMumtaz").click(function(){
        $("#contentHistory").hide();
        $("#facts").hide();
        $("#ShahJahan").hide();
        $("#Mumtaz").show(3000);
    });
    $("#liFacts").click(function(){
        $("#contentHistory").hide();
        $("#ShahJahan").hide();
        $("#Mumtaz").hide();
        $("#facts").show(3000);
    });
    $("#liHistory").click(function(){
        $("#ShahJahan").hide();
        $("#Mumtaz").hide();
        $("#facts").hide();
        $("#contentHistory").show(3000);
    });
    

});