define([], function() {
    function Fixed(opts) {
        this.opts = opts;
        this.el = document.querySelector(this.opts.el);
        this.logo = document.querySelector(this.opts.logo).children[0];
        this.init()
    }
    Fixed.prototype = {
        constructor: Fixed,
        init: function() {
            this.bindEvent()
        },
        bindEvent: function() {
            var that = this
            let offT = this.el.offsetTop
            document.onscroll = function() {
                if (document.documentElement.scrollTop > offT) {
                    that.el.classList.add("fixed")
                    that.logo.style.display = "block"
                } else {
                    that.el.classList.remove("fixed")
                    that.logo.style.display = "none"
                }
            }
        }
    }
    return Fixed;
});