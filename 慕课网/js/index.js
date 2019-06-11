let uli=document.querySelectorAll(".banner-left li");
uli.forEach((item)=>{
    item.onclick=function(){
        for(let i=0;i<uli.length;i++){
            uli[i].classList.remove("active")
        }
        this.classList.add("active")
    }
    
})