$(()=>{
    var params={};
    var search=location.search.slice(1);
    var str=search.split("&");
    for( var sub of str){
         var arr=sub.split("=");
        params[arr[0]]=arr[1];
    }
    //console.log(params);
    var m = params.mon;
    var w = decodeURIComponent(params.week);
   // console.log(m);
    //console.log(w);

//加载图片
    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:3000/weekShow",
        data:{mon:m,week:w},
        success:function(data){
            //console.log(data);
            var html = "";
            html +=`
            <img src="${data[0].weekShow1}">
            <img src="${data[0].weekShow2}">
            <img src="${data[0].weekShow3}">
            <img src="${data[0].weekShow4}">`;
            $(".pic_show").html(html);
        },
        error:function(){
            console.log("网络故障，请检查");
        }
    })

//加载页面左侧区域内容
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:3000/weekShowMon",
        data:{mon:m}
    }).then(data=>{
        var monFirst = parseInt(data.data[0].mon)+1;
        var html = "";
        if(m<data.maxMon){
            html += `<div class="month">
            <div class="m" >${monFirst}月</div>
            <div class="s">
            <a href="#" data-month=${monFirst}>${monFirst}月第四季</a>
            <a href="#" data-month=${monFirst}>${monFirst}月第三季</a>
            <a href="#" data-month=${monFirst}>${monFirst}月第二季</a>
            <a href="#" data-month=${monFirst}>${monFirst}月第一季</a>
            </div>
            </div>`
        }
        for( var p of data.data){
            html += `<div class="month">
        <div class="m" >${p.mon}月</div>
        <div class="s">
        <a href="#" data-month=${p.mon}>${p.mon}月第四季</a>
        <a href="#" data-month=${p.mon}>${p.mon}月第三季</a>
        <a href="#" data-month=${p.mon}>${p.mon}月第二季</a>
        <a href="#" data-month=${p.mon}>${p.mon}月第一季</a>
        </div>
        </div>`;
        }
        $(".leftList").html(html);
        var $a = $(`div.s a:contains(${m}月第${w}季)`);
        //console.log($a);
        $a.addClass("active");
    });

//给页面左侧绑定点击事件
    $(".leftList").on("click","div.s a",e=>{
        e.preventDefault();
        $tar = $(e.target);
        var mon = $tar.data("month");
        // console.log(mon);
        var week = $tar.html().slice(3,4);
       // console.log(week);
        location.href=`week_show.html?mon=${mon}&week=${week}`;
    });
})
