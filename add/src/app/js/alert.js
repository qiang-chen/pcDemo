define(['jquery'], function($) {
    'use strict';
    /**
     * @function[此函数是封装弹窗插件的]
     */
    class creatAlert{
        constructor(opt){
            this.creat(opt)
        }
        creat(opt){
            let str=`<div class="mask"></div>
            <div class="alert">
                <div class="alert-title">
                    <span>设置</span><span class="remove">×</span>
                </div>
                <div class="alert-main">
                    <div class="list"><span>名称 :</span><span><input type="text" class="user"></span></div>
                    <div class="list"><span>项目类型 :</span><span><label>IOS<input type="radio" name="nn"></label><label>Android<input type="radio" name="nn"></label></span></div>
                    <div class="list"><span>设备类型 :</span><span><select name="" id="">
                        <option value="">小米</option>
                        <option value="">苹果6</option>
                        <option value="">华为</option>
                        <option value="">三星</option>
                        <option value="">魅族</option>
                        <option value="">外星人</option>
                        <option value="">联想</option>
                    </select></span></div>
                </div>
                <div class="alert-btn">
                    <span>
                        <button class="add">添加</button>
                    </span>
                    <span>
                         <button class="remove">取消</button>
                    </span>
                </div>
            </div>`;
            $(".cover").html(str);
            $(".user").val(opt.val)
            this.event(opt);
        }
        event(opt){
            $(".remove").click(function(){
                $(".mask").remove();
                $(".alert").remove();
            });
            $(".add").click(function(){
                //点击加号的时候调用回调函数
                let user=$(".user").val();
                let type=$("select option:selected").text();
                //console.log(user,type)
                //console.log(opt)
                opt.fn({
                    user,
                    type
                });
                $(".mask").remove();
                $(".alert").remove();
            })
        }
    }
    return creatAlert;
});