//表格数据滚动效果
function clearInter(){
    window.clearInterval(t1);
    window.clearInterval(t2);
    window.clearInterval(t3);
    //curPage = 0;
    //window.clearInterval(refreshContent);
}

function setInter(){
    // refreshContent = setInterval(function() {
    //     ++curPage;
        
    // }, 10000);
    t1= setInterval('$("#ssgj_table .ranklist-tr:first").insertAfter($("#ssgj_table .ranklist-tr:last"))',1000);
    t2= setInterval('$("#ssgf_table .ranklist-tr:first").insertAfter($("#ssgf_table .ranklist-tr:last"))',1000);
    t3= setInterval('$("#rqlbList .rqlb_list li:first").insertAfter($("#rqlbList .rqlb_list li:last"))',1000);
}

setInter();

$(window).load(function(){
    $("#rqlbList").hover(function(){
        clearInter();
    },function(){
        setInter();
    });
});