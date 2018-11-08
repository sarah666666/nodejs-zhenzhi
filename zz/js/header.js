//在当前页面加载header.html
$(()=>{
    $("#header").load("header.html",()=>{
        //悬浮框绑定点击事件
        $("span.close").click(()=>{
            $(".left-banner").css("display","none");
        })
        //给右侧悬浮圆框设置定时器
        var round=document.querySelector(".round");
     //   console.log(round);
        var r1=0;
        var opa=1;
        var task = function(){
            r1+=1;
            opa*=0.9;
            round.setAttribute("r",`${r1+40}px`);
            round.setAttribute("opacity",opa);
            if(r1>25){
                r1=0;
                opa=1;
            }
        }
        setInterval(task,1000/20);
        //给悬浮圆框绑定点击事件
        $("#svg").click(()=>{
            location.href="quote.html";
        })
    });
});
