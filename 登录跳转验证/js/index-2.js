var n = null; //下方所有的名字
var otr = null; //每一列
var tbody = null;
var chen = document.querySelector(".chen");
var checkone = null;
var rbtn=null;
//鼠标划过用户名让下拉框显示
chen.parentNode.onmouseover = function () {
    chen.nextElementSibling.style.display = "block";
    chen.nextElementSibling.style.position = "absolute"
}
//离开下拉框隐藏
chen.parentNode.onmouseout = function () {
    chen.nextElementSibling.style.display = "none";
}
//给下拉框的东西添加样式
chen.parentNode.onclick = function (ev) {
    var e = ev || window.event;
    var target = e.target || e.srcElement;
    if (target.tagName == "P") {
        for (var i = 0; i < chen.nextElementSibling.children.length; i++) {
            chen.nextElementSibling.children[i].classList.remove("active");
        }
        target.classList.add("active");
        if (target.innerHTML == "退出") {
            location.href = 'index.html'
        }
    }
}
//做下拉框的关键 不要给隐藏菜单定位让父元素的高度等于两个元素的和然后划过和离开父元素让其显示隐藏

//点击左边选项出现下拉菜单
var oli = document.querySelectorAll(".list li");
oli.forEach((item) => {
    item.firstElementChild.onclick = function () {
        var p = this.classList.contains("active");
        if (!p) {
            for (var i = 0; i < oli.length; i++) {
                oli[i].firstElementChild.classList.remove("active");
                oli[i].lastElementChild.style.display = "none"
            }
            this.classList.add("active");
            this.nextElementSibling.style.display = "block";
            render()
        } else {
            this.classList.remove("active");
            this.nextElementSibling.style.display = "none";
        }
    }
})

//给每个班级添加事件让其渲染右边内容
var grade = document.querySelectorAll(".b");
grade.forEach((item) => {
    item.onclick = function (ev) {
        var e = ev || window.event;
        var target = e.target || e.srcElement;
        if (target.tagName == "P") {
            for (var i = 0; i < item.children.length; i++) {
                item.children[i].classList.remove("active");
            }
            target.classList.add("active");
            var html=target.innerText;
            var ccc=document.querySelector(".ccc");
            ccc.innerHTML=html;
            render();
        }
    }
});

//右边数据渲染函数
function render() {
    var arr = [];
    for (var i = 0; i < 50; i++) {
        arr.push(Mock.mock({
            name: Mock.Random.cname(), //随机名字
            addr: Mock.mock('@county(true)'), //随机地名
            birth: Mock.Random.date(), //日期
            sex: Mock.Random.integer(0, 1), //性别
            'age|18-60': 1, //年纪
        }))
    }
    var str = arr.map((item, index) => {
        sex = item.sex == 0 ? "男" : "女";
        return `<tr>
         <td><input type="checkbox" class="check-one"></td>
         <td>${index+1}</td>
         <td class="nn">${item.name}</td>
         <td>${sex}</td>
         <td>${item.age}</td>
         <td>${item.birth}</td>
         <td>${item.addr}</td>
         <td><button class="remove">删除</button></td>
     </tr>`
    }).join("");
    tbody = document.querySelector("tbody");
    tbody.innerHTML = str;
    n = document.querySelectorAll(".nn");
    otr = document.querySelectorAll("tr");
    checkone = document.querySelectorAll(".check-one");
    rbtn=document.querySelectorAll(".remove");
    click();
    remove();
}
//模糊搜素功能
var user = document.querySelector(".user");
var btnc = document.querySelector(".btnc");
btnc.onclick = function () {
    var userValue = user.value;
    var nhtml = [];
    n.forEach((item) => {
        nhtml.push(item.innerText);
    });
    if (nhtml.length != 0 & userValue.length != 0) {
        nhtml.forEach((item, index) => {
            if (item == userValue) {
                for (var i = 0; i < otr.length; i++) {
                    otr[i].classList.remove("active");
                }
                otr[index + 1].classList.add("active");
                var h = otr[0].offsetTop;
                var t = otr[index + 1].offsetTop;
                if (t > 453) {
                    document.documentElement.scrollTop = t;
                } else {
                    document.documentElement.scrollTop = 0;
                }
            }
        })
    }
}

//吸顶效果 每次滚动条发生改变的时候上方导航等都不能变化
thumbtack()

function thumbtack() {
    var top = document.querySelector(".top");
    var one = document.querySelector(".box-right-top");
    var two = document.querySelector(".box-right-search");
    var three = document.querySelector("thead");
    var onet = one.offsetTop;
    var onel = one.offsetLeft;
    var onew = one.offsetWidth;
    var twot = two.offsetTop;
    var twol = two.offsetLeft;
    var twow = two.offsetWidth;
    document.onscroll = function () {
        var t = document.documentElement.scrollTop;
        if (t > 0) {
            top.classList.add("fixed");
            one.classList.add("fixed");
            two.classList.add("fixed");
            top.style.cssText = `left:0;top:0;`
            one.style.cssText = `left:${onel}px;top:${onet}px;width:${onew}px`;
            two.style.cssText = `left:${twol}px;top:${twot}px;width:${twow}px`;
        } else {
            top.classList.remove("fixed");
            one.classList.remove("fixed");
            two.classList.remove("fixed");
        }
    }
}
//全选单选功能
var all = document.querySelector(".checkAll");

function click() {
    if (checkone.length != 0) {
        all.onclick = function () {
            var ck = this.checked;
            checkone.forEach((item) => {
                item.checked = ck;
            })
        }
        checkone.forEach((ele) => {
            ele.onclick = function () {
                var ock =[...checkone].every((item) => {
                    return item.checked;
                });
                  all.checked=ock;
            }
        })

    }
}

//删除功能
function remove(){
    rbtn.forEach((item)=>{
        item.onclick=function(){
            var ck=item.parentNode.parentNode.firstElementChild.firstElementChild.checked;
            if(ck){
                var b=confirm("您确定删除吗");
                if(b){
                    console.log(this.parentNode.parentNode)
                    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                }
            }else{
                alert("请先选中")
            }
        }
        
    })
}