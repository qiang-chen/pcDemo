define(['utils'], function(utils) {
    'use strict';
    function ajax(opt){
        let def={
            data:{},
            type:"get",
            async:true
        }
        let defs=Object.assign({},def,opt);
        return new Promise(function(resolve,reject){
            let xhr=window.XMLHttpRequest?new XMLHttpRequest():ActiveXObject("Microsoft.XMLHTTP");
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject(xhr.status);
                    }
                }
            };
            if(defs.type=="get"){
                xhr.open(defs.type,defs.url+"?"+defs.data,defs.async);
                xhr.send(null);
            }else if(defs.type=="post"){
                xhr.open(defs.type,defs.url,defs.async);
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xhr.send(utils.formartStr(defs.data));
            }
        })
    }
    return ajax;
});