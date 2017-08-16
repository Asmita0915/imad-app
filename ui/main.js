
var button=document.getElemmentById('counter');
//var counter=0;

 button.onclick = fuction() {
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(requaet.readystate == XMLHttpRequest.DONE){
            if(request.status == 200){
                var counter=response.responseText;
                counter=counter+1;
               var span=document.getElementById('count');
               span.innerHTML=counter.toString();
            }
        }
    };
   
};