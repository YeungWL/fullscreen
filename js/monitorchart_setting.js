$(function(){
 $(document).ready(function(){
    initInfo();

  });
});

//定时器数组
var sta = [];
//清除所有定时器
function clearIntervals(array){
  for (i=0; i <array.length; i++) {
    clearInterval(array[i]);
  };
  sta = [];
}

// 攻击来源地排行
function gjlydChartBar(){
  //报表定时刷新
  // var gjlydSetInter = setInterval(function(){
  //   //gjlydChartBar.clear();
  
  //   //gjlydChartBar.setOption(gjlydChartBarOption);
  // },40000)

  var gjlydChartBar = echarts.init(document.getElementById('gjlydChartBar'));

  gjlydChartBarOption = {
      tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid:{
          top: 10,
          left: 30,
          right: '10%',
          bottom: '5%',
          containLabel: true,
          borderWidth:0
      },
      axisTick:{
        lineStyle:{
          color:'#242d4f'
        }
      },
      xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#242d4f',
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#242d4f'
            }
        },
        axisLabel: {
            interval:'auto',
            rotate:45,
            textStyle:{ 
              fontSize:12,
              color:'#ccc' 
            }               
        },
        splitLine: {
            show: false
        },           
        splitArea: {
            show: false
        }                
      },
      yAxis: {
        type: 'category',
        data: ['南宁','武汉','北京','上海','黑龙江','广州'],
        axisLine: {
            lineStyle: {
                color: '#242d4f',
            }
        },
        axisTick: {
           show: false,
            lineStyle: {
                color: '#242d4f'
            }
        },
        axisLabel: {
            interval:0, 
            textStyle:{ 
              fontSize:12,
              color:'#ccc' 
            }            
        },
        splitLine: {
            show: false
        },           
        splitArea: {
            show: false
        }
      },
      series: [
          {
              name: '数量',
              type: 'bar',
              stack: '总量',
              barMaxWidth:12,
              itemStyle: {
                  normal: {
                      color: function(params) {
                          // build a color map as your need.
                          var colorList = [
                              "#1fc0ab","#88c05c","#bdc035","#ffb00b","#ff7a0b","#fd371c"
                          ];
                          return colorList[params.dataIndex]
                      },
                      //label : {show: true, position: 'right'}
                  }
              },
              data: [1000, 1200, 1300, 1500, 1600, 2200]
          }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
  };
                    
  gjlydChartBar.setOption(gjlydChartBarOption);

  //报表定时刷新
  sta.push(setInterval(function (){
        var data = gjlydChartBarOption.series[0].data;
        var num = Math.floor(Math.random() * data.length);
        data[num] = Math.round(Math.random() * 400);
        
        $('#gjlydChartBar').animate({opacity:0},1000,function(){
          gjlydChartBar.clear();
          gjlydChartBar.setOption(gjlydChartBarOption);
          $('#gjlydChartBar').animate({opacity:1},1500);
        })
        //gjlydChartBar.resize();    
      }, 16100)
    )

  window.addEventListener("resize", function () {
    gjlydChartBar.resize();
  });
};

// 攻击来源IP排行
function gjlyipChartBar(){
  //报表定时刷新
  // var gjlyipSetInter = setInterval(function(){
  //   gjlyipChartBar.clear();
  //   gjlyipChartBar.setOption(gjlyipChartBarOption);
  // },30000)

  var gjlyipChartBar = echarts.init(document.getElementById('gjlyipChartBar'));

  gjlyipChartBarOption = {
      tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid:{
          top: 10,
          left: 100,
          right: '10%',
          bottom: 25,
          borderWidth:0
      },
      axisTick:{
        lineStyle:{
          color:'#242d4f'
        }
      },
      xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#242d4f',
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#242d4f'
            }
        },
        axisLabel: {
            interval:0,
            rotate:45,
            textStyle:{ 
              fontSize:12,
              color:'#ccc' 
            }            
        },
        splitLine: {
            show: false
        },           
        splitArea: {
            show: false
        }                
      },     
      yAxis: {
        type: 'category',
        data: ['192.168.152.32','192.168.211.3','192.168.15.68','192.132.21.216','192.122.1.21','192.168.5.6'],
        axisLine: {
            lineStyle: {
                color: '#242d4f',
            }
        },
        axisTick: {
           show: false,
            lineStyle: {
                color: '#242d4f'
            }
        },
        axisLabel: {
            interval:0, 
            textStyle:{ 
              fontSize:12,
              color:'#ccc' 
            }            
        },
        splitLine: {
            show: false
        },           
        splitArea: {
            show: false
        }
      },
      series: [
          {
              name: '数量',
              type: 'bar',
              stack: '总量',
              barMaxWidth:12,
              itemStyle: {
                  normal: {
                      color: function(params) {
                          // build a color map as your need.
                          var colorList = [
                              "#1fc0ab","#88c05c","#bdc035","#ffb00b","#ff7a0b","#fd371c"
                          ];
                          return colorList[params.dataIndex]
                      },
                      //label : {show: true, position: 'right'}
                  }
              },
              data: [100, 150, 200, 250, 270, 280]
             
          }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
  };
                    
  gjlyipChartBar.setOption(gjlyipChartBarOption);

  //报表定时刷新
  sta.push(setInterval(function (){
      $('#gjlyipChartBar').animate({opacity:0},1200,function(){
        gjlyipChartBar.clear();
        gjlyipChartBar.setOption(gjlyipChartBarOption);
        $('#gjlyipChartBar').animate({opacity:1},400);
      })
      //gjlyipChartBar.resize();
    }, 20100)
  )

  window.addEventListener("resize", function () {
    gjlyipChartBar.resize();
  });
};

// 网站流量TOP5
function wzllChartLine(){

  var wzllChartLine = echarts.init(document.getElementById('wzllChartLine'));

  wzllChartLineOption = {
      color:[ '#f74242','#d68f40','#f8d442','#14af88','#42edf8'],
      tooltip: {
          trigger: 'axis',
          textStyle:{
              fontWeight:'lighter',
              fontSize:12
          }
      },
      grid:{
        top:30,
        left: '20%',
        right:'10%',
        bottom: 30
      },             
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['00:00','02:00','04:00','06:00','08:00','10:00','12:00','18:00','24:00'],
          axisLine: {
              lineStyle: {
                  color: '#242d4f',
              }
          },
          axisTick: {
              show: false,
              lineStyle: {
                  color: '#242d4f'
              }
          },
          axisLabel: {
              textStyle:{ 
                fontSize:12,
                color:'#ccc' 
              }            
          },
          splitLine: {
              show: false
          },           
          splitArea: {
              show: false
          }
      },
      yAxis: {
          type: 'value',
          name: '速度kb/s',
          nameTextStyle:{color:"#ccc"},   
          axisLine: {
              lineStyle: {
                  color: '#242d4f',
              }
          },
          axisTick: {
             show: false,
              lineStyle: {
                  color: '#242d4f'
              }
          },
          axisLabel: {
              textStyle:{ 
                fontSize:12,
                color:'#ccc' 
              }            
          },
          splitLine: {
              show: false
          },           
          splitArea: {
              show: false
          }
      },
      series: [
          {
              name:'www.363.com',
              type:'line',             
              data:[140, 172, 121, 104, 190, 330, 110, 420, 532, 401, 434, 490]
          },
          {
              name:'172.16.2.162',
              type:'line',             
              data:[380, 362, 351, 394, 490, 350, 420, 232, 191, 234, 190, 330]
          },
          {
              name:'www.zh.com',
              type:'line',             
              data:[120, 132, 101, 134, 90, 230, 210, 820, 932, 901, 934, 290]
          },
          {
              name:'www.janshu.com',
              type:'line',             
              data:[150, 232, 201, 154, 190, 330, 410, 332, 301, 334, 390, 330]
          },
          {
              name:'172.1.1.0',
              type:'line',             
              data:[320, 332, 301, 334, 390, 330, 320, 132, 101, 134, 90, 230]
          }                                  
      ]
  }; 

  wzllChartLine.setOption(wzllChartLineOption);

  window.addEventListener("resize", function () {
    wzllChartLine.resize();
  });
};

// 节点性能Top5
function jdxnChartLine(){

  var jdxnChartLine = echarts.init(document.getElementById('jdxnChartLine'));

  jdxnChartLineOption = {
      color:[ '#f74242','#d68f40','#f8d442','#14af88','#42edf8'],
      tooltip: {
          trigger: 'axis',
          textStyle:{
              fontWeight:'lighter',
              fontSize:12
          }
      },
      grid:{
        top:30,
        left: '20%',
        right:'10%',
        bottom: 30
      },             
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['00:00','02:00','04:00','06:00','08:00','10:00','12:00','18:00','24:00'],
          axisLine: {
              lineStyle: {
                  color: '#242d4f',
              }
          },
          axisTick: {
              show: false,
              lineStyle: {
                  color: '#242d4f'
              }
          },
          axisLabel: {
              textStyle:{ 
                fontSize:12,
                color:'#ccc' 
              }            
          },
          splitLine: {
              show: false
          },           
          splitArea: {
              show: false
          }
      },
      yAxis: {
          type: 'value',
          name: '速度kb/s',
          nameTextStyle:{color:"#ccc"},   
          axisLine: {
              lineStyle: {
                  color: '#242d4f',
              }
          },
          axisTick: {
             show: false,
              lineStyle: {
                  color: '#242d4f'
              }
          },
          axisLabel: {
              textStyle:{ 
                fontSize:12,
                color:'#ccc' 
              }            
          },
          splitLine: {
              show: false
          },           
          splitArea: {
              show: false
          }
      },
      series: [
          {
              name:'CND1',
              type:'line',             
              data:[150, 232, 201, 154, 190, 330, 410, 332, 301, 334, 390, 330]
          },
          {
              name:'CND2',
              type:'line',             
              data:[320, 332, 301, 334, 390, 330, 320, 132, 101, 134, 90, 230]
          },
          {
              name:'CND3',
              type:'line',             
              data:[120, 132, 101, 134, 90, 230, 210, 820, 932, 901, 934, 290]
          },
          {
              name:'CND4',
              type:'line',             
              data:[320, 332, 301, 334, 390, 330, 320,120, 132, 101, 134, 90]
          },
          {
              name:'CND5',
              type:'line',             
              data:[820, 932, 901, 934, 1290, 1330, 1320,320, 332, 301, 334, 390]
          }                                  
      ]
  };


  jdxnChartLine.setOption(jdxnChartLineOption);

  window.addEventListener("resize", function () {
    jdxnChartLine.resize();
  });

   var timeout = setTimeout(function(){
    jdxnChartLine.setOption(jdxnChartLineOption)
    clearTimeout(timeout)
  },2000)
};


// setInterval ("numbershowTime()", 5000);
// //受攻击节点数据刷新动画效果
// function numbershowTime(){
//   $('.number').countUp({
//       delay: 10,
//       time: 500
//   }); 
// }
// 
 //受攻击节点
function attacknodeList(){

  var node5Message = 9617;
  var node6Message = 17902;
  
  var divContent = "<li class='node_item'><div class='text_wrap'><p class='name'>广信CND01</p><p class='number grade6'>141,561</p></div></li>"; 
    divContent += "<li class='node_item'><div class='text_wrap'><p class='name'>广信CND02</p><p class='number grade5'>141,561</p></div></li>";
    divContent += "<li class='node_item'><div class='text_wrap'><p class='name'>广信CND03</p><p class='number grade4'>141,561</p></div></li>";
    divContent += "<li class='node_item'><div class='text_wrap'><p class='name'>广信CND04</p><p class='number grade3'>141,561</p></div></li>";
    divContent += "<li class='node_item'><div class='text_wrap'><p class='name'>广信CND05</p><p class='number grade2' id='flowoutM'>" + node5Message.toLocaleString() + "</p></div></li>";
    divContent += "<li class='node_item'><div class='text_wrap'><p class='name'>广信CND06</p><p class='number grade6' id='flowinM'>" + node6Message.toLocaleString() + "</p></div></li>";
  $('#attacknodeList').html(divContent);
  
  sta.push(setInterval(function (){
      node6Message += Math.floor(Math.random() * 50);
      node5Message += Math.floor(Math.random() * 50);
      $("#flowoutM").html(node6Message.toLocaleString());
      $("#flowinM").html(node5Message.toLocaleString());
    }, 1000)
  )
}

//入侵类别列表
function changeNum() {

  //$("#rqlbList").animate({opacity:1,right:40,top:720},500);

  var nameArr = new Array('SQL注入','跨站脚本','木马病毒','DDOS攻击','CC攻击','SQL注入','跨站脚本','木马病毒','DDOS攻击','CC攻击'); 
  var numArr = new Array('280','800','1700','4500','7800','15000','15800','8700','13500','1800');
  var rqlbList = "";
  for (var i=0; i<numArr.length;i++){          
     rqlbList+="<li class='list_item'><span class='fr counter'>"+numArr[i]+"</span><span class='fl'>"+nameArr[i]+"</span></li>";
  }
  $(".rqlb_list").html(rqlbList);  

  // sta.push(setInterval(function(){
  //    $("#rqlbList").find(".rqlb_list li").eq(0).slideUp(1000,function(){
  //       $(this).show();
  //       $("#rqlbList").find(".rqlb_list").append($(this));
  //     });
  //   },5000)
  // )    
}

$(function(){
  $(document).ready(function() {
    //入侵类别列表
    changeNum();

  
  //入侵类别数据大小判断改变li的样式
  for ( var i=0;i<$(".rqlb_list li").length;i++) {
    var tdNum = parseInt($(".rqlb_list li").eq(i).find('.counter').html());

    if(0 <= tdNum && tdNum <= 500){
      $(".rqlb_list li").eq(i).attr('class', 'list_item item_grade1');
    }else if(500 < tdNum  && tdNum <= 1000){
     $(".rqlb_list li").eq(i).attr('class', 'list_item item_grade2');
    }else if(1000 < tdNum  && tdNum <= 4000){
      $(".rqlb_list li").eq(i).attr('class', 'list_item item_grade3');
    }else if(4000 < tdNum && tdNum <= 8000){
      $(".rqlb_list li").eq(i).attr('class', 'list_item item_grade4');
    }else if(8000 < tdNum && tdNum <= 15000){
      $(".rqlb_list li").eq(i).attr('class', 'list_item item_grade5');
    }else if(15000 < tdNum ){
      $(".rqlb_list li").eq(i).attr('class', 'list_item item_grade6');
    }

  };
 //受攻击节点
attacknodeList()

 });
}); 






/*初始化页面显示*/
function initInfo(){
  clearIntervals(sta);
  gjlydChartBar();
  gjlyipChartBar();
  //wzllChartLine();
  //jdxnChartLine();
}