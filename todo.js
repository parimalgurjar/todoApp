let inp=document.getElementById("item")
let text = document.querySelector(".to-do-box");
function add(){
    if(inp.value==""){
        alert("Please enter the value")
    }
    else{
        let newEl=document.createElement("li")
        newEl.innerHTML=`${inp.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEl);
        inp.value="";
        newEl.querySelector("i").addEventListener("click",remove)
        function remove(){
            newEl.remove()
        }
    }
}