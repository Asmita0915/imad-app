var button=document.getElementById("counter");

 button.onclick = function() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        //console.log(request.readyState+"||||"+XMLHttpRequest.DONE);
        if(request.readyState === XMLHttpRequest.DONE){
            
            if(request.status === 200){
               var counter=request.responseText;
               var span=document.getElementById("count");
               span.innerHTML=""+counter.toString();
            }
        }
    };
   request.open('GET','http://asmitamutgekar.imad.hasura-app.io/counter',true);
   request.send(null);
};

//Submit name;
var input=document.getElementById("name");
var data=input.value;
var submit=document.getElementById("submit_b");
submit.onclick=function(){
    
}