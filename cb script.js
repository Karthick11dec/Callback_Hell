var x=document.getElementById('lable')

function display(x)
{
    setTimeout(()=>x.innerHTML="10",1000);
    setTimeout(()=>x.innerHTML="9",2000);
    setTimeout(()=>x.innerHTML="8",3000);
    setTimeout(()=>x.innerHTML="7",4000);
    setTimeout(()=>x.innerHTML="6",5000);
    setTimeout(()=>x.innerHTML="5",6000);
    setTimeout(()=>x.innerHTML="4",7000);
    setTimeout(()=>x.innerHTML="3",8000);
    setTimeout(()=>x.innerHTML="2",9000);
    setTimeout(()=>x.innerHTML="1",10000);
    setTimeout(()=>x.innerHTML=" ",11000);
    
    setTimeout(function(){
    var x1 = document.createElement("img");
    x1.setAttribute("src", "happy indepen.jpg");
    x1.setAttribute("width", "70%");
    x1.setAttribute("height", "100%");
    x1.setAttribute("alt", "loading content");
    x.append(x1);
    }
    ,11000);
}
display(x);
