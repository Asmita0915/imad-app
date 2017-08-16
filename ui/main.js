var button=document.getElementById('counter');

 button.onclick = function() {
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(requaet.readystate === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter=request.responseText;
               var span=document.getElementById('count');
               console.log(counter);
               span.innerHTML=counter.toString();
            }
        }
    };
   request.open('get','http://asmitamutgekar.imad.hasura-app.io/counter',true);
   request.send(null);
};