define([], function() {
    'use strict';
    function ajax(opt){
        let def={
            type:"get",
            async:true,
            data:null
        }
        //console.log(opt)
        let defs=Object.assign({},def,opt);
        let xhr=window.XMLHttpRequest?new XMLHttpRequest():ActiveXObject("Miicrosoft.XMLHTTP");
        return new Promise((resolve,reject)=>{
            //console.log(xhr)
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        resolve(JSON.parse(xhr.responseText))
                    }else{
                        reject(xhr.status)
                    }
                }
            }
            if(defs.type=="get"){
                console.log(1)
                xhr.open(defs.type,defs.url+"?"+defs.data,defs.async);
                xhr.send(null)
            }else if(defs.type=="post"){
                xhr.open(defs.type,defs.url,defs.async);
                //console.log(2)
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xhr.send(defs.data);
            }
        })
    }
    return ajax;
});