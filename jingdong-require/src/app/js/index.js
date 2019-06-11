define([], function() {
    function Tab(){
        this.init()
    }
    Tab.prototype={
        constructor:Tab,
        init:function(){
            console.log(555)
        }
    }
    return Tab
});