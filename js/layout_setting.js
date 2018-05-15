    function fnchartLayout(){
      //模块自适应
      var winWidth = $(window).width()
      var winHeight = $(window).height()

      function mian(winWidth,winHeight){
        if (winWidth <= 1400) {
          $('.chart_main .icon_arrow_down').addClass('active');
          $('.chart_main .icon_arrow_down').parent().addClass('scene-open');
        }else{
          $('.chart_main .icon_arrow_down').removeClass('active');
          $('.chart_main .icon_arrow_down').parent().removeClass('scene-open');
        };

        $('.chart_header').height(winHeight*0.076);
        $('.chart_header .logo').height(winHeight*0.05);
        $('.chart_main').height(winHeight-$('.chart_header').height());
        //$('.chart_map').height($('.chart_main').height()*0.9);

        $('.chart_modFooter').width(winWidth-20);
        var chartModFooterW =   $('.chart_modFooter').width();

        $('.chart_modLeft .scene-content .mod_box').width(winWidth*0.19);
        $('.chart_modRight .scene-content .mod_box').width(winWidth*0.19);
        // $('.chart_modFooter .scene-content .mod_box_table1').width(chartModFooterW*0.29);
        // $('.chart_modFooter .scene-content .mod_box_table2').width(chartModFooterW*0.48);
        // $('.chart_modFooter .scene-content .mod_box_table3').width(chartModFooterW*0.19);

        $('.chart_modFooter .scene-content .mod_box_table2').css('marginLeft',chartModFooterW*0.02);        
      }

      mian(winWidth,winHeight)


      $(window).resize(function(){
        var winWidth = $(window).width()
        var winHeight = $(window).height()
        mian(winWidth,winHeight)

      });
    }

    fnchartLayout();

 
    $(function(){
      $(document).ready(function() {
        //模块自适应
        fnchartLayout(); 
     });
    });
