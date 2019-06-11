define([], function() {
    function fn(){
        var btn=document.querySelectorAll(".box div");
        btn.forEach((item,index)=>{
            item.onclick=function(){
                btn.forEach((ele)=>{
                    ele.classList.remove("active")
                })
                this.classList.add("active");
            }
        })
    }
    return fn;
});