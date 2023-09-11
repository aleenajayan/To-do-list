const inputbox=document.getElementById("inputbox");
const listcontainer=document.getElementById("list");
console.log(1);

function add(){
   if(inputbox.value === ''){
      alert("You must enter something!")
   }
   else{
    /* let li=document.createElement("li");
     li.innerHTML=inputbox.value;
     listcontainer.appendChild(li);
     let div =document.createElement("div");
     div.innerHTML="";
     li.appendChild(div);
     let span = document.createElement("span");
     span.innerHTML="\u00d7";
     li.appendChild(span);*/

    /* let div=document.createElement("div");
     div.innerHTML=inputbox.value;
     listcontainer.appendChild(div);
     let p =document.createElement("p");
     p.innerHTML="";
     div.appendChild(p);
     let span = document.createElement("span");
     span.innerHTML="\u00d7";
     div.appendChild(span);*/
   
     
     let div =document.createElement("div");
     listcontainer.appendChild(div);

     let tick=document.createElement("a");
     div.appendChild(tick);

     let li=document.createElement("li");
     li.innerHTML=inputbox.value;
     div.appendChild(li);

     let span = document.createElement("span");
     span.innerHTML="\u00d7";
     div.appendChild(span);
     span.onclick=function(){
      div.remove();
     }
     tick.onclick=function(){
      const clr =tick.style.backgroundColor;
     // console.log(clr)
      if(clr==="rgb(80, 200, 120)"){
        tick.style.backgroundColor="#f0f0f0"; 
        li.style.textDecoration="none";
      }
      else{
         tick.style.backgroundColor="#50c878";
         li.style.textDecoration="line-through";
      }
      //saveData();
   }

   }
   inputbox.value = '';
   //saveData();
}
 
/*function saveData(){
   localStorage.setItem("data",listcontainer.innerHTML);
}
function show(){
   listcontainer.innerHTML=localStorage.getItem("data");
}
show();*/