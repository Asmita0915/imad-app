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

var submit=document.getElementById("submit_b");
submit.onclick=function(){
    
    
var request=new XMLHttpRequest();
var input=document.getElementById("name");
var data=input.value;

request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        if(request.status === 200){
            
            var names=request.responseText;
            names=JSON.parse(names);
            var list='';
            for(var i=0;i<names.length;i++){
                list+='<li>'+names[i]+'</li>';
            }
            var ul=document.getElementById("list");
            ul.innerHTML=list;
        }
    }
    
};
    request.open('GET','http://asmitamutgekar.imad.hasura-app.io/submit-name?name='+data,true);
    request.send(null);
    

};