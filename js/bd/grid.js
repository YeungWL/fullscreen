(function ($, window, document, undefined) {  //避免全局依赖,避免第三方破坏

  /*opt 配置参数可以使用第三方的API，因为是继承第三方的插件，还是自定义配置参数*/
  /*默认配置参数*/
  $.BDGridMut = [] //一个页面多个表格保存不同的grid change by Siven
  $.BDGrid = function (opt) {
    var me = this;
    var title = '';// top.tabs && top.tabs.getCurrentTab().label;
    opt = $.extend({}, {
      alternatingRow: true,
      rownumbers: false,
      allowHideColumn: false,
      pageParmName: 'start',
      pagesizeParmName: 'length',
      root: 'data',
      record: 'recordsTotal',
      enabledSort: false,
      pageSize: 20,
      pageSizeOptions: [5, 10, 20, 30, 40, 50],
      heightDiff: -5,
      width: '99.8%', height: '99%',
      frozenCheckbox: false,
      columnDefs: [],
      title: title,
      checkbox: true,
      showSitting: true,//是否需要操作列
      showEdit: true,
      showView: true,
      showDel: true,
      isSelectR: true,//复选按钮是否选中
      TableISelect: false,
    }, opt);

    //console.log(me.prototype);

    //增加表格
    var parentEl = opt.el || 'body', sHtml = '', title = opt.title || '';
    sHtml = '<div class=\"seaBox\"><h1 class="title">' + title + '</h1><div class=\"other\"></div><div class=\"listBtn btn_box\"><div class="btn_list"></div></div></div>'

    $(parentEl).append('<div class="g_div_table" position="center">' + sHtml + '<div class="ligerGrid list"></div></div>');
    var el = $('.ligerGrid');
    me.el = el;
    if (opt.ajax) {
      opt.url = opt.ajax.url;
      opt.parms = opt.ajax.parms;
    }

    if (!opt.url && !opt.sColumnsUrl) {
      alert("请配置表格信息请求地址");
      return false;
    }
    var getData = function (data) {

    };
    //是否显示增、删、改按钮
    if (!opt.showSitting) {
      $(".listBtn").hide();
    }
    //修改IndexListData.json文件的TableISelect值，实现翻页选中
    if (opt.checkbox) {
      $(parentEl).on('click', 'tr.l-grid-row', function () {
        var row = $(this);
        var uncheck = row.hasClass("l-selected");
        var n = row.find("a.hideId").attr("rowid");
        $.ajaxSettings.async = false;
        $.getJSON(opt.url, function (data) {

          $.each(data.data, function (i, item) {
            if (!uncheck) {
              data.data[n].TableISelect = true;
            } else {
              data.data[n].TableISelect = false;
            }
          });
          isSelectR = data.data[n].TableISelect;
        });
        $.post(opt.url, function (data) {
          data.data[n].TableISelect = isSelectR;
        }, 'json');
      });
    }
    //解锁与锁定的切换
    /*el.on('click', 'input.qt',function(event){
     event.stopPropagation();
     var yes = $(this).hasClass("bt_qyan");
     var n = $(this).parent().parent().siblings("td.l-grid-row-cell-last").find("a.list-btn").attr("rowid");
     var t=0;
     if(yes){
     $(this).removeClass("bt_qyan").addClass("bt_tyan");
     t=2;
     }else{
     $(this).removeClass("bt_tyan").addClass("bt_qyan");
     t=1;
     }
     $.post(opt.url,function(data) {
     data.data[n].serverSelect = t;//给JSON参数赋值 1为启用或解锁，2为停用或锁定
     },'json');
     });*/
    //增删改A标签
    $(parentEl).on('click', 'a', function (e) {
      var aClass = $(this)
      var data = me.grid.getRow($(this).attr('rowid'));

      // mul && (data = $.BDGridMut[0].getRow($(this).attr('rowid')))


      if (aClass.hasClass("bt_edit")) {
        el.trigger('edit', [me, me.grid, [data]]);
      }
      ;
      if (aClass.hasClass("bt_view")) {
        el.trigger('view', [me, me.grid, [data]]);
      }
      ;
      if (aClass.hasClass("bt_del")) {
        el.trigger('del', [me, me.grid, [data]]);
      }
      ;

      //修改多个表格多次触发混乱问题
      //修改多个表格多次触发编辑混乱问题
      //change by Siven
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid') && el.triggerHandler('editBlue1', [me, $.BDGridMut[0], [mul && (data = $.BDGridMut[0].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid_gz1') && el.triggerHandler('editBluegz1', [me, $.BDGridMut[1], [mul && (data = $.BDGridMut[7].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid_gz2') && el.triggerHandler('editBluegz2', [me, $.BDGridMut[2], [mul && (data = $.BDGridMut[8].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid_gz3') && el.triggerHandler('editBluegz3', [me, $.BDGridMut[3], [mul && (data = $.BDGridMut[9].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid_gz4') && el.triggerHandler('editBluegz4', [me, $.BDGridMut[4], [mul && (data = $.BDGridMut[10].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid_gz5') && el.triggerHandler('editBluegz5', [me, $.BDGridMut[5], [mul && (data = $.BDGridMut[11].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid_gz6') && el.triggerHandler('editBluegz6', [me, $.BDGridMut[6], [mul && (data = $.BDGridMut[12].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid_gz7') && el.triggerHandler('editBluegz7', [me, $.BDGridMut[7], [mul && (data = $.BDGridMut[13].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid_gz8') && el.triggerHandler('editBluegz8', [me, $.BDGridMut[8], [mul && (data = $.BDGridMut[14].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid_gz9') && el.triggerHandler('editBluegz9', [me, $.BDGridMut[9], [mul && (data = $.BDGridMut[15].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid_gz10') && el.triggerHandler('editBluegz10', [me, $.BDGridMut[10], [mul && (data = $.BDGridMut[16].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid_1') && el.triggerHandler('editBlue2', [me, $.BDGridMut[11], [mul && (data = $.BDGridMut[1].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid1') && el.triggerHandler('editBlue3', [me, $.BDGridMut[12], [mul && (data = $.BDGridMut[2].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid2') && el.triggerHandler('editBlue4', [me, $.BDGridMut[13], [mul && (data = $.BDGridMut[3].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid2_2') && el.triggerHandler('editBlue5', [me, $.BDGridMut[14], [mul && (data = $.BDGridMut[4].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid2_3') && el.triggerHandler('editBlue6', [me, $.BDGridMut[15], [mul && (data = $.BDGridMut[5].getRow($(this).attr('rowid')))]]);
      (aClass.hasClass("bt_edit") && e.delegateTarget.id == 'maingrid3') && el.triggerHandler('editBlue7', [me, $.BDGridMut[16], [mul && (data = $.BDGridMut[6].getRow($(this).attr('rowid')))]]);
      


    });
    //增删改INPUT按钮
    $(parentEl).on('click', 'input', function () {
      var eClass = $(this);
      if (eClass.hasClass("btnAdd")) {
        el.trigger('add', [me, me.grid]);
      }
      ;
      if (eClass.hasClass("btnEdit")) {
        el.trigger('edit', [me, me.grid, me.grid.getSelectedRows()]);
      }
      ;
      if (eClass.hasClass("btnView")) {
        el.trigger('view', [me, me.grid, me.grid.getSelectedRows()]);
      }
      ;
      if (eClass.hasClass("btnDel")) {
        el.trigger('del', [me, me.grid, me.grid.getSelectedRows()]);
      }
      ;
      if (eClass.hasClass("accurate_search")) {
        el.trigger('accurate_search', [me, me.grid]);
      }
      ;
    });
    if (opt.sColumnsUrl) {
      var mul = opt.multiple; //一个页面多个表格，判断是否需要多个表格 change by Siven
      $.ajax({
        url: opt.sColumnsUrl,
        type: 'POST',
        dataType: 'json',
        data: {_dc: new Date()}
      }).done(function (data) {
        if (opt.columnDefs) {
          $.each(opt.columnDefs, function (key, item) {
            $.each(data,
              function (i, v) {
                if (typeof item != "undefined" && v.sClass == item.targets) {
                  data[i].render = item.render;
                }
              }
            )

          });

        }
        ;
        //是否增加锁定操作
        if (opt.showLock) {
          data.push({
            display: '状态', name: 'lock', minWidth: 100, type: 'int',
            render: function (item) {
              if (parseInt(item.serverSelect) == 1) return "<input type='button' class='qt bt_qyan' title='解锁'/>";
              if (parseInt(item.serverSelect) == 2) return "<input type='button' class='qt bt_tyan' title='锁定'/>";
              if (parseInt(item.serverSelect) == 3) return "&nbsp;";
            }
          });
        }

        //是否启用
        if (opt.showUseed) {
          data.push({
            display: '状态', name: 'useing', minWidth: 100, type: 'int',
            render: function (item) {
              if (parseInt(item.serverSelect) == 1) return "<font class='green'>启用</font>";
              if (parseInt(item.serverSelect) == 2) return "<font class='gray'>停用</font>";
              if (parseInt(item.serverSelect) == 3) return "<font class='red'>未启用</font>";
            }
          });
        }


        //是否增加服务器状态
        if (opt.showComputer) {
          data.push({
            display: '内存利用率(%)', name: 'sFrameCP', minWidth: 50,
            render: function (item) {
              if (parseInt(item.sFrameCP) <= 40) return "<font class='green'>" + item.sFrameCP + "</font>";
              if (parseInt(item.sFrameCP) > 40 && parseInt(item.sFrameCP) < 80) return "<font class='yellow'>" + item.sFrameCP + "</font>";
              if (parseInt(item.sFrameCP) >= 80) return "<font class='red'>" + item.sFrameCP + "</font>";

            }
          });
          data.push({
            display: 'CPU利用率(%)', name: 'sFrameJx', minWidth: 50,
            render: function (item) {
              if (parseInt(item.sFrameJx) <= 40) return "<font class='green'>" + item.sFrameJx + "</font>";
              if (parseInt(item.sFrameJx) > 40 && parseInt(item.sFrameJx) < 80) return "<font class='yellow'>" + item.sFrameJx + "</font>";
              if (parseInt(item.sFrameJx) >= 80) return "<font class='red'>" + item.sFrameJx + "</font>";

            }
          });
          data.push({
            display: '磁盘状态', name: 'sFrameLl', minWidth: 50,
            render: function (item) {
              if (parseInt(item.sFrameLl) <= 40) return "<font class='green'>" + item.sFrameLl + "</font>";
              if (parseInt(item.sFrameLl) > 40 && parseInt(item.sFrameLl) < 80) return "<font class='yellow'>" + item.sFrameLl + "</font>";
              if (parseInt(item.sFrameLl) >= 80) return "<font class='red'>" + item.sFrameLl + "</font>";

            }
          });
          data.push({
            display: '通信口状态', name: 'sFrameZj', minWidth: 50,
            render: function (item) {
              if (parseInt(item.sFrameZj) == 1) return "<font class='green'>正常</font>";
              if (parseInt(item.sFrameZj) == 2) return "<font class='gray'>离线</font>";
              if (parseInt(item.sFrameZj) == 3) return "<font class='red'>异常</font>";

            }
          });
        }
        ;
        //是否增加状态
        if (opt.showRuning) {
          data.push({
            display: '状态', name: 'sFrameRun', minWidth: 50,
            render: function (item) {
              if (parseInt(item.sFrameRun) == 1) return "<font class='green'>正常</font>";
              if (parseInt(item.sFrameRun) == 2) return "<font class='gray'>离线</font>";
            }
          });
        }
        ;
        //是否增加当前流量
        if (opt.showNumb) {
          data.push({
            display: '当前流量(MB)', name: 'sFrameliu', minWidth: 150,
            render: function (item) {
              var h = [];
              if (parseInt(item.sFrameZj) < 1000) {
                h.push("<font class='green'>上行:" + item.sFrameZj + "</font>");
              } else {
                h.push("<font class='red'>上行:" + item.sFrameZj + "</font>");
              }

              if (parseInt(item.sFrameZx) < 1000) {
                h.push(" <font class='green'>下行:" + item.sFrameZx + "</font>");

              } else {
                h.push(" <font class='red'>下行:" + item.sFrameZx + "</font>");
              }
              return h;
            }
          });
        }
        ;
        if (opt.checkbox) {
          data.push({
            name: 'hideId', display: '', width: 1, isAllowHide: false,
            render: function (record, rowindex, value, column) {
              var html = [];
              html.push("<a href='javascript:;' class='hideId' style='display:none' rowid='" + rowindex + "'></a>");
              return html;
            }
          });
        }
        /*				$.each( data,function(i,v){


         if( data[i].bVisible !=  false){
         }else{
         data[i].hide = true;
         data[i].width = -1;
         }
         if(  data[i].data){
         data[i].name =   data[i].data;
         }
         if(  data[i].sTitle){
         data[i].display =   data[i].sTitle;
         }
         }
         );*/
        $.each(data, function (i, v) {
            switch (v.sClass) {
              case 'btn_del':
                $('<input type=\"button\" class=\"btn btnDel c_o btn_del\" value="删除">').appendTo('.g_div_table div.btn_list');
                //opt.checkbox = true;
                opt.del = opt.showDel;

                break;
              case 'btn_view':
                $('<input type=\"button\" class=\"btn btnView c_o btn_view\" value="查看">').appendTo('.g_div_table div.btn_list');
                //opt.checkbox = true;
                opt.view = opt.showView;
                break;
              case 'btn_edit':
                if (v.sType == 1) {
                  $('<input type=\"button\" class=\"btn btnAdd c_g btn_add\" value="增加">').appendTo('.g_div_table div.btn_list');
                } else if (v.sType == 2) {
                  $('<input type=\"button\" class=\"btn btnEdit c_b btn_edit\" value="编辑">').appendTo('.g_div_table div.btn_list');
                  opt.edit = opt.showEdit;
                } else {
                  $('<input type=\"button\" class=\"btn btnAdd c_g btn_add\" value="增加">').appendTo('.g_div_table div.btn_list');
                  $('<input type=\"button\" class=\"btn btnEdit c_b btn_edit\" value="编辑">').appendTo('.g_div_table div.btn_list');
                  opt.edit = opt.showEdit;
                }
                //opt.checkbox = false;
                break;
            }

            if (data[i].bVisible != false) {
            } else {
              data[i].hide = true;
              data[i].width = -1;
            }
            if (data[i].data) {
              data[i].name = data[i].data;
            }
            if (data[i].sTitle) {
              data[i].display = data[i].sTitle;
            }
          }
        );
        if (opt.showDel == true || opt.showView == true || opt.showEdit == true || opt.showPeizhi == true) {
          data.push({
            name: 'id', display: '配置操作', width: 110, isAllowHide: false,
            render: function (record, rowindex, value, column) {
              var html = [];
              if (opt.edit == true) {
                html.push("<a href='javascript:;' class='bt_edit bt_bj list-btn' rowid='" + rowindex + "'></a>");
              }
              if (opt.view == true) {
                html.push("<a href='javascript:;' class='bt_view bt_ck list-btn' rowid='" + rowindex + "'></a>");
              }
              if (opt.del == true) {
                html.push("<a  href='javascript:;' class='bt_del bt_sc list-btn' rowid='" + rowindex + "'></a>");
              }
              if (opt.showhf == true) {
                html.push("<a  href='javascript:;' class='bt_hf bt_sc list-btn' rowid='" + rowindex + "'></a>");
              }
              if (opt.showPeizhi == true) {
                html.push("<a  href='javascript:;' class='bt_edit bt_sc list-btn' rowid='" + rowindex + "' title='配置'></a>");
              }
              return html.join('&nbsp;');
            }
          });

        }
        ;
        opt.columns = data;

        var d = $(parentEl + ' .ligerGrid').ligerGrid(opt);


        me.grid = d;

        mul && $.BDGridMut.push(me.grid) //一个页面多个表格，保存多个表格实例 change by Siven


        me.el.trigger('beforerender', [d]);

        var fit = opt.fit || true;
        if (fit) {
          $('.ligerGrid .l-grid-body').css('overflow-x', 'hidden');
        }
      }).fail(function () {
      });
    } else {
      var d = $(parentEl + ' .ligerGrid').ligerGrid(opt);
      me.grid = d;
      me.el.trigger('beforerender', [d]);
    }

    // console.log($.BDGridMut)
    return me.el;

    /*function __init__(data){
     return me.each(function() {//因为对象化可能有0个以上的实例
     $this = $(this); //转化为jQuery对象
     var grid = $this.ligerGrid($.extend({}, {
     columns:data, pageSize: 10,
     width: '100%', height: '100%'
     },opt
     ));
     $.extend(grid,{
     getData : getData
     });

     $this.trigger('afterrender',[grid,$this]);
     });
     }
     if(opt.columns){
     __init__({});
     }else{
     $.getJSON(opt.url,opt.sColumnsUrl||{},function(data){
     return __init__(data);
     },"json");
     }*/
  };

})(jQuery, window, document);

