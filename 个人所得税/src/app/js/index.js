define([], function() {
    'use strict';
    /**
     * @function[本函数的作用是求个人所得税]
     * 计算公式为（工资-免征额）*分级税率-速算扣除数）
     */
    const Add=function(){
        this.init();
    }
    Add.prototype={
        constructor:Add,
        init(){
            this.event();
        },
        event(){
            let importInput=document.querySelector(".importInput");
            let result=document.querySelector(".result");
            let resultBox=document.querySelector(".select");
            let btn=document.querySelector("button");
            btn.onclick=()=>{
                let impotValue=importInput.value;
                if(impotValue!=0){
                    resultBox.style.display="block";
                }
                switch(true){
                    case impotValue<5000:
                    //switch语句 如果满足这个条件在这里执行满足条件后的命令
                    result.value=impotValue;
                    break;
                    case impotValue>5000:
                    case impotValue<8000:
                    result.value=(impotValue-5000)*3%
                }
            }

        }
    }
    return Add;
});