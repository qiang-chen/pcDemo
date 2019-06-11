define([], function() {
    function Focus(opts) {
        this.opts = opts;
        this.el = document.querySelector(this.opts.el);
        this.list = document.querySelector(this.opts.list);
        this.data = this.opts.data
        this.init()
    }
    Focus.prototype = {
        constructor: Focus,
        init: function() {
            this.focus()
        },
        focus: function() {
            let that = this;
            this.el.onfocus = function() {
                this.classList.add("active");
                that.list.style.display = "block"
                let str = ''
                that.data.map(function(item) {
                    str += `<li>${item.con}</li>`
                })
                that.list.innerHTML = str
            }
            this.el.onblur = function() {
                this.classList.remove("active")
                that.list.style.display = "none"
            }
        }
    }
    return Focus;
});