$(()=>{
    var search = location.search.slice(1);
    var oid = search.split("=")[1];
    //console.log(location.search);
//加载图片
$.ajax({
    type: "GET",
    url: "http://127.0.0.1:3000/outerShow",
    data: {oid:oid},
    success: function (data) {
      //  console.log(data);
        var html = "";
        html += `
        <img src="${data[0].outerShow1}">
        <img src="${data[0].outerShow2}">
        <img src="${data[0].outerShow3}">`;
        $(".pic_show").html(html);
    },
    error: function () {
        console.log("网络故障，请检查");
    }
});
})
