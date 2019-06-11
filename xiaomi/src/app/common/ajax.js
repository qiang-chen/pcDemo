define([], function() {
    'use strict';
    function ajax(opt){
        let def={
            url:null,
            async:true,
            type:"get",
            data:null
        }
        Object.assign(def,opt);
        return new Promise(function(resolve,reject){
            let xhr=window.XMLHttpRequest?new XMLHttpRequest:ActiveXObject("Microsoft.XMLHTTP");
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        resolve(JSON.parse(xhr.responseText))
                    }else{
                        reject(xhr.status)
                    }
                }
            }
            if(def.type=="get"){
                xhr.open(def.type,def.url+"?"+def.data,def.async);
                xhr.send();
            }
            if(def.type=="post"){
                xhr.open(def.type,def.url,def.async);
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xhr.send(def.data)
            }
        })
    }
    return ajax;
});