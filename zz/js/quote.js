$(()=>{
    //点击图片实现遮罩层功能
    $(".first-step").on("click","ul li img",(e)=>{
        var $tar = $(e.target);
        var i = parseInt($tar.next().val());
        //console.log($tar);
        var $cover = $(".cover");
        var html = "";
        html += `<img src=imgs/quote/${i}-big.png>
            <div class="pic-details">
                <p>NO.${i}</p>
                <span>×</span>
            </div>`;
        $cover.html(html).css("display","block");
        var $objImg = $(".cover>img");
        var src = $objImg.attr("src")
        var img = new Image();
        img.src = src;
        img.onload = function(){
           var w = this.width;
            $(".pic-details").css("width",w);
        }
            //点击X，关闭遮罩层
        $(".pic-details span").click(()=> {
            $(".cover").css("display", "none");
        })
    })
    //给最后一步获取报价按钮绑定单击事件
    $btn = $("button");
    $btn.click(e=>{
        e.preventDefault();
        var tel = $("input.tel").val();
        //手机号码验证
        var r = /^1[34578][0-9]{9}$/;
        var html = "";
        if(tel==null || tel==""){
            $("div.vali").addClass("alert");
            $(".third-step i.icon-idcard2f").css("top","124px");
            $("input.tel").focus();
        }else if(!r.test(tel)){
            html += `<i class="icon iconfont icon-error"></i>
                    <span>手机号码格式不正确</span>`;
            $("div.vali").html(html).addClass("alert");
            $(".third-step i.icon-idcard2f").css("top","124px");
            $("input.tel").focus();
        }
        //获取数据，提交数据库
        var pic = "",suit="",uname="";
        var $chks = $("input:checkbox[name=pic]:checked");
        var arr=[];
        for( var chk of $chks){
            arr[arr.length]=chk.nextElementSibling.innerHTML;
        }
       // console.log(arr);
        pic = arr.toString();
       // console.log(pic);
        var $rdo = $("input:radio[name=suit]:checked");
        suit = $rdo.parent().html().split(">")[1];;
        //console.log(suit);
        uname = $("input:text[name=uname]").val();
        $.ajax({
            type:"post",
            url:"http://127.0.0.1:3000/quote",
            data:{pic:pic,suit:suit,tel:tel,uname:uname},
            xhrFilds:{withCredentials:true},
            success:function(data){
                console.log(data);
                if(data.code>0){
                    location.href="quote_success.html";
                }
            },
            error:function(){
                alert("网络故障请检查");
            }
        })
    })
})

