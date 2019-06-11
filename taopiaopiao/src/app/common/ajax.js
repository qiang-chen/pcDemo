define(['utils'], function(utils) {
    function ajax(opt){
        def={
            data:null,
            url:null,
            async:true,
            type:'get',
        }
        //console.log(opt, 'opt======')
        Object.assign(def,opt);
        //console.log(def)
        return new Promise((resolve,reject)=>{
            let xhr=window.XMLHttpRequest?new XMLHttpRequest:ActiveXObject("Microsoft.XMLHTTP");
            xhr.onreadystatechange=function(){
               if(xhr.readyState==4){
                   if(xhr.status==200){
                       //console.log(xhr.responseText)
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
                //console.log(def, 'def------')
                xhr.open(def.type,def.url,def.async);
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xhr.send(utils.formateObj(def.data));
                //console.log(def.data)
            }
        })
    }
    return ajax
});