var bill;var tip;var numofpeople;var tipperperson;var total;
$(".input4").on("change",function(){
  bill= $(".input4").val();
  bill = parseFloat(bill);
  if(bill/1!=bill){
    alert("please enter valid input");
    bill=0;
    $(".input4").val("0");
  }else{
    calculate();
  }
})
$(".input1").on("change",function(){
  tip=0;
  $(".bt").removeClass("pressed");
  $(".input1").addClass("pressed");
  tip = $(".input1").val();

  tip = parseInt(tip);
  if(tip/1!=tip){
    alert("please enter valid tip !!!")
    $(".input1").text("custom");
    tip = 0;
  }else{

    calculate();
  }
})
$(".input3").on("change",function(){
   numofpeople = $(".input3").val();
   numofpeople = parseInt(numofpeople);
  if(numofpeople==0){
    alert("number of people can't be zero");
  }else if(numofpeople/1!=numofpeople){
    alert("enter a valid number");
  }
  else{
    calculate();
  }
})
$(".1").on("click",function(){
  tip=0;
  $(".input1").removeClass("pressed");
  $(".bt").removeClass("pressed");
  var temp = $(".1").text();
  temp = temp.slice(0,1);
  tip=parseInt(temp);
  $(".1").addClass("pressed");
  calculate();
})
$(".2").on("click",function(){
  tip=0;
  $(".input1").removeClass("pressed");
  $(".bt").removeClass("pressed");
  var temp = $(".2").text();
  temp = temp.slice(0,2);
  tip=parseInt(temp);
  $(".2").addClass("pressed");
  calculate();
})
$(".3").on("click",function(){
  tip=0;
  $(".input1").removeClass("pressed");
  $(".bt").removeClass("pressed");
  var temp = $(".3").text();
  temp = temp.slice(0,2);
  tip=parseInt(temp);
  $(".3").addClass("pressed");
  calculate();
})
$(".4").on("click",function(){
  tip=0;
  $(".input1").removeClass("pressed");
  $(".bt").removeClass("pressed");
  var temp = $(".4").text();
  temp = temp.slice(0,2);
  tip=parseInt(temp);
  $(".4").addClass("pressed");
  calculate();
})
$(".5").on("click",function(){
  tip=0;
  $(".input1").removeClass("pressed");
  $(".bt").removeClass("pressed");
  var temp = $(".5").text();
  temp = temp.slice(0,2);
  tip=parseInt(temp);
  $(".5").addClass("pressed");
  calculate();
})
function calculate(){
  if(bill >0 && tip >=0 && numofpeople > 0 ){
    $(".btn2").prop("disabled",false);
    var x = bill/numofpeople;
    var y = x.toFixed(2);
    y = parseFloat(y);
    var z = y*(tip/100);
    var w = z.toFixed(2);
    tipperperson = parseFloat(w);
    $(".tip").text("$"+tipperperson);
    var v = y+tipperperson;
    var k = v.toFixed(2);
    total = parseFloat(k);
    $(".total").text("$"+total);
  }
}
$(".btn2").on("click",function(){
  $(".btn2").prop("disabled",true);
  $(".bt").removeClass("pressed");
  $(".input1").removeClass("pressed");
  bill=0;tip=0;numofpeople=0;
  $(".input3").val("0")
  $(".input1").val("custom");
  $(".input4").val("0");
  $(".tip").text("$0.00");
  $(".total").text("$0.00");

})
