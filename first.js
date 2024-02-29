let but1= document.querySelectorAll(".but");
let q1= document.querySelector(".p");
let reset=document.querySelector(".reset");



let xmove=true;
const arr=[
           [0,1,2],
           [0,3,6],
           [1,4,7],
           [2,5,8],
           [3,4,5],
           [6,7,8],
           [0,4,8],
           [2,4,6]
        ]
for(let a of but1){
    a.addEventListener("click", ()=>{
        if(xmove){
            xmove=false;
              a.innerText="X";
              
        }
        else{
            xmove=true;
            a.innerText="O";
        }
        a.disabled =true;
        checkwinner();
    });
}


 const checkwinner=()=>{
     for(let patter of arr){
        let p1= but1[patter[0]].innerHTML;
        let p2= but1[patter[1]].innerHTML;
        let p3= but1[patter[2]].innerHTML;
        
        if(p1!=""&&p2!=""&&p3!=""){
             if(p1==p2&&p2==p3){
                q1.innerHTML=`Congratulations ${p1} is winner`;
             }
        }
     }
 }


 reset.addEventListener("click",()=>{
    for(let a of but1){
           a.innerText="";
           a.disabled =false ;
    }
    q1.innerHTML="";
 })
