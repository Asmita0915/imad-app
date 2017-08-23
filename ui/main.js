var button=document.getElementById("counter");

 button.onclick = function() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status === 200){
               var counter=request.responseText;
               var p=document.getElementById("count");
               console.log(span);
               p.innerHTML=counter.toString();
            }
        }
    };
   request.open('GET','http://asmitamutgekar.imad.hasura-app.io/counter',true);
   request.send(null);
};