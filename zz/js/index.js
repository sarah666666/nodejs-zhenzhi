//广告轮播
$(()=>{
    var i=1;
    function task(){
        i++;
        if(i==4)i=1;
        var divs = document.querySelectorAll(".banner>div");
        var j=0,count=12;
        var timer = setInterval(()=>{
            var div = divs[j];
            div.style.backgroundImage =`url("imgs/index/banner-logo-${i}.png")`;
            div.className="shake";
            j++;
            if(j==count) clearInterval(timer);
        },50)
        setTimeout(()=>{
            for(var div of divs)div.className="";
            document.querySelector(".banner>img").src=`imgs/index/banner-logo-${i}.png`;
        },50*12+500)
    }
    var timer=setInterval(task,50*12+500+3000);
    //给广告轮播区域添加鼠标移入移出事件
    $(".banner").hover(
        ()=>{
            clearInterval(timer);
        },
        ()=>{
            timer = setInterval(task,50*12+500+3000);
        }
    )
    //给左右方向按钮绑定点击事件
    $left= $("[data-dove=left]");
    $left.click(()=>{
        i--;
        if(i==0)i=3;
        document.querySelector(".banner>img").src=`imgs/index/banner-logo-${i}.png`;
        var divs = document.querySelectorAll(".banner>div");
        for(div of divs){
            div.style.backgroundImage =`url("imgs/index/banner-logo-${i}.png")`;
        }
    })
    $right = $("[data-dove=right]");
    $right.click(()=>{
        i++;
        if(i==4)i=1;
        document.querySelector(".banner>img").src=`imgs/index/banner-logo-${i}.png`;
        var divs = document.querySelectorAll(".banner>div");
        for(div of divs){
            div.style.backgroundImage =`url("imgs/index/banner-logo-${i}.png")`;
        }
    })
});
//加载每周客片
function loadWeekListByPno(pno){
    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:3000/index/indexWeek",
        data:{pno:pno},
        success:function(data){
            //console.log(data);
            var html = "";
            for(var p of data.data){
                html +=`<li>
                <a href="javascript:;" class="week-show-pic">
                <img src="${p.weekIndex}" title="${parseInt(p.mon)}月第${p.week}季" data-weekD="week" data-w="${p.week}" data-m="${p.mon}">
                <div class="shade week-shade" data-weekD="week" data-w="${p.week}" data-m="${p.mon}">
                <p  data-weekD="week" data-w="${p.week}" data-m="${p.mon}">懂年轻的你</p>
                <span style="color:greenyellow"  data-weekD="week" data-w="${p.week}" data-m="${p.mon}">YOUNG|FASHION|SIMPLE|HAPPINESS</span>
                </div>
                </a>
                <a href="javascript:;" data-weekD="week"  data-w="${p.week}" data-m="${p.mon}" class="week-show-font">${parseInt(p.mon)}月第${p.week}季</a>
                <p>CHINA/GLOBAL/TRAVEL/PHOTOGRAPHY</p>
                </li>`;
            }
            var $week = $(".week-show");
            $week.html(html);
            data.pno = parseInt(data.pno);
            data.pageCount = parseInt(data.pageCount);
            var html = "";
            if(data.pno-2>0){
                html += `<li><a href="#">${data.pno-2}</a></li>`;
            };
            if(data.pno-1>0){
                html += `<li><a href="#">${data.pno-1}</a></li>`;
            };
            html += `<li class="active"><a href="#">${data.pno}</a></li>`
            if(data.pno+1<=data.pageCount){
                html += `<li><a href="#">${data.pno+1}</a></li>`;
            };
            if(data.pno+2<=data.pageCount){
                html += `<li><a href="#">${data.pno+2}</a></li>`;
            };
            $(".pagination").html(html);
        },
        error:function(){
            alert("网络故障请检查");
        }
    });
}

//网页加载函数
loadWeekListByPno(1);

//给分页按钮绑定事件
$(()=>{
    $(".pagination").on("click","li a",function(e){
        e.preventDefault();
        var pno = parseInt($(this).text());
        loadWeekListByPno(pno);
    })
})

//为每周客片里的图片添加点击事件
$(()=>{
    $("ul.week-show").on("click","[data-WeekD=week]",e=>{
        e.preventDefault();
        var $tar = $(e.target);
        var w = $tar.data("w");
        var m = $tar.data("m");
        location.href=`week_show.html?mon=${m}&week=${w}`;
        //console.log(location.href);
    })
})

//加载外景作品
function loadOuterListByPno(pno){
    $.get("http://127.0.0.1:3000/index/indexOuter",{pno:pno}).then(data=>{
       // console.log(data);
        var html="";
        var $ul = $(".outer-show");
        for(var p of data.data){
        html += `<li>
                <a href="#" class="outer-show-pic">
                    <img src="${p.outerIndex}" title="${p.title}" data-t="oid" data-target="${p.oid}">
                </a>
                <div class="move-content">
                   <div class="move-title">${p.title}
                    <p>CHINA/GLOBAL/TRAVEL/PHOTOGRAPHY</p></div>
                    <div class="move-left"></div>
                    <div class=move-right></div>
                    </div>
            </li>`;
        }
        $ul.html(html);
        data.pno = parseInt(data.pno);
        data.pageCount = parseInt(data.pageCount);
        var html = "";
        if(data.pno-2>0){
            html += `<li><a href="#">${data.pno-2}</a></li>`;
        };
        if(data.pno-1>0){
            html += `<li><a href="#">${data.pno-1}</a></li>`;
        };
        html += `<li class="active"><a href="#">${data.pno}</a></li>`
        if(data.pno+1<=data.pageCount){
            html += `<li><a href="#">${data.pno+1}</a></li>`;
        };
        if(data.pno+2<=data.pageCount){
            html += `<li><a href="#">${data.pno+2}</a></li>`;
        };
        $(".pagination1").html(html);
    });
}
loadOuterListByPno(1);
//给外景作品分页按钮绑定事件
$(()=>{
    $(".pagination1").on("click","li a",function(e){
        e.preventDefault();
        var pno = parseInt($(this).text());
        loadOuterListByPno(pno);
    })
})

//为外景作品里的图片添加点击事件
$(()=>{
    $("ul.outer-show").on("click","[data-t=oid]",e=>{
        e.preventDefault();
        var $tar = $(e.target);
        var oid = $tar.data("target");
         location=`outer_show.html?oid=${oid}`;
         
    })
})
//六大会馆图片动画
$(()=>{
    $(".venue-photos div").on("mouseenter",'img',function(){
        $('img.venue-detail').removeClass('push');
        $(this).next().addClass("push");
    })
			 $(".venue-photos div").on("mouseleave",'img',function(){
        $(this).next().removeClass("push");
    })
})

//右侧固定导航滚动
$(()=>{
    $(window).scroll(()=>{
        var scrollTop = $(window).scrollTop();
				var $floors = $(".floor");
				//console.log(floors[0]);
				for(var i=0;i<$floors.length;i++){
					//console.log(floors[i]);
					 var $f = $($floors[i]);
					if($f.offset().top<=scrollTop+innerHeight/2){
            $(`ul.right-tab>li:eq(${i})`).addClass("active").siblings().removeClass("active");
					}
                }
    //每周客片出场动画
        var weekShowTop = $($floors[1]).offset().top;
        if(weekShowTop<=scrollTop+innerHeight/2){
              $("ul.week-show>li").addClass("animated rotateIn");
       }
       //外景作品出场动画
       var outerShowTop = $($floors[3]).offset().top;
       if(outerShowTop<=scrollTop+innerHeight/2){
             $("ul.outer-show>li").addClass("animated zoomIn");
      }
    }) 
})



