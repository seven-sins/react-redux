##选择器
    s('#id')
    s('.class')
    s('div')
    s(selector).eq(0)
    s(selector).first()
    s(selector).last()
    s(selector).find('a')
    s(selector).parent()
    s(selector).prev()
    s(selector).prev('input')
    s(selector).prevAll()
    s(selector).prevAll('input')
    s(selector).next()
    s(selector).next('input')
    s(selector).nextAll()
    s(selector).nextAll('input')
    s('selector:first')
    s('selector:last')
    s('selector').siblings()
    s('.main .left h1') //复杂选择器
    s('selector:last .subselector span:first i')
    s('form input[name="id"]:checked')  // :checked :first :last

##事件
    s(selector).on('eventName',function(){})
    s(selector).bind('click', function(){})
    s(selector).unbind('click')
##方法
    s(function(){})
    s(selector).css('color','red')
    s(selector).css({'width':'100','height':'100'}})
    s(selector).css('color')    //获取
    s(selector).attr('src','http://xxx.yyy.cn/img.jpg')
    s(selector).attr({'name':'userName',...})
    s(selector).attr('src')  //获取
    s(selector).removeAttr('src')
    s(selector).show()
    s(selector).hide()
    s(selector).html()
    s(selector).html('<i>123</i>')
    s(selector).text()
    s(selector).text('123')
    s(selector).val()
    s(selector).val('123')
    s(selector).empty()
    s(selector).append(object)
    s(selector).addClass('active')
    s(selector).removeClass('active')
    s(selector).toggleClass('active')
    s(selector).hasClass('active')
    s(selector).center()    //相对body屏幕居中，依赖css布局
    s(selector).remove()
    s(selector).serialize() //表单序列化，返回json对象
    s(selector).drag()      //拖拽。依赖css布局
    s(selector).drag({dom: jsObject}) // 拖拽，仅点击jsObject时触发
    s(selector).dragEx()    //拖拽+弹性运动。依赖css布局
    s(selector).run({speed:6, interval: 50; left: 300; top: 300}) //
                    speed: 每次移动距离
                    interval: 速度
                    left: 右移动最大值
                    top: 下移动最大值
    s(selector).rotation1(interval)     //interval:1000=1秒，默认3秒。渐变轮播。依赖css布局
    s(selector).rotation2(interval)     //interval:1000=1秒，默认3秒。向上滚动轮播。依赖css布局
    s(selector).rotation3(interval)     //interval:1000=1秒，默认3秒。向左滚动轮播，覆盖方式。依赖css布局
    s(selector).rotation4(interval)     //interval:1000=1秒，默认3秒。向左滚动轮播，左推方式。依赖css布局
    s(selector).rotation5(minWidth)     //minWidth:非焦点时所占宽度，非轮播。默认平均占取宽度。依赖css布局
    s(selector).round2d(r,interval)     //r:半径,默认50, 30:定时器转动间隔，默认30。依赖css布局
    s(selector).round3d(r,interval)     //r:半径,默认50, 30:定时器转动间隔，默认30。依赖css布局
    s(selector).is(':checked')
    s(selector).each(fn)
    s(selector).animate({left:300,top:300,speed:20,interval:30})	//left:目标位置，top:目标位置,speed:运动速度,interval:定时器间隔时间

##工具方法
    s.each(array, fn)
    s.trim()
    s.browser()
    s.now()                 // format: 2016-01-01 14:51:33
    s.isFunction(obj)
    s.isArray(obj)
    s.random(n, m)         // 返回n - (m-1) 随机数
    //ajax
    s.get(url, data, fn)
    s.post(url, data, fn)
    s.put(url, data, fn)
    s.delete(url, data, fn)
    s.isNull(string)
    //
    s.indexOf               // return index
    s.parseJSON(obj)        // s.parseJSON('{"userName":"abc"}')

    s.lock()
    s.lock({loading:true})  // 显示loading.gif
    s.unlock()

    s.alert(message)
    s.alert({
        msg:'a message',
        title:' title '
    });

    //confirm
    s.confirm(message);

    s.confirm({
        msg: '确定要关闭吗？',
        confirm:function(){
            console.log(this);
            s.msg('confirm');
        },
        cancel:function(){
            console.log(this);
            s.msg('cancel');
        },
        title:'系统消息'
    });

    s.msg(message)
    s.msg({ msg: '提示信息', // 必填
            top: 100,       // 距屏幕顶端的位置，默认居中
            callback: function(){}, // 回调函数
            second: 3,   // x秒后提示框关闭，默认3
            background: '颜色值',
            fontSize: '字体大小，如13px'
         })
         (如传了参数second，则x秒后自动关闭，否则需要点击弹窗关闭)

    s.login({
        submit:function(user){ // 提交登录回调函数
                    // 当前this指向login对象本身
                    //console.log(this);
                    //console.log(user);
                    this.msg(user); // 显示错误信息
                    this.close();   // 关闭登录窗口
                },
        forget:function(){  // 忘记密码回调函数
                    console.log(this);
                    this.close();
                },
        userName:'用户名/邮箱/手机号',      //此处的userName及passWord为 placeholder的值   默认"用户名"
        passWord:'密码',                      //默认"密码"
        showForget:false,
        showRemember:false
        });

    //open 新窗口加载url
    s.open({
            url: 'http://www.baidu.com',
            title: '百度',
            width: 300,
            height: 200
         });
            url: 要加载的url (必填)
            title: 新窗口标题，默认显示window
            width: 新窗口宽度，默认500px
            height: 新窗口高度，默认300px

    s.scrollTo(target)  target: 目标位置
    s.scrollTo({y: target, speed: 10})
                y: 目标位置
                speed: 速度值. 默认(currentTop - target) / 10

    s.upload({
        url: 'upload.action',  (必填)
        loading: true,  // 上传中显示loading...
        maxSize: 2048000,  // 上传文件最大size。    1M = 1024000
        accept: ".jpg, .png, .gif",  // 允许上传类型, 默认支持所有类型
        file: 'fileId', //默认file
        success: function(data){   
            // 上传成功回调函数   (必填)
            // data即返回的信息(string)
        },
        error: function(response){
            // 上传失败回调函数
        }
    })


##表单插件
###树
    var tree = s(".tree").treeView({
        id: "id", // id字段名称
        text: "name", // text字段名称
        parentId: "parentId", // 父级名称
        expand: false,
        data: window.data,
        url: "",  // data 和 url必传一个
        value: "10", // 默认值
        icon: true, // 显示图标
        select: function(item){
            //console.log(this); // 当前元素
            //console.log(item); // 数据
        }
    });

    function get(){ // 取值
        console.log(tree.get())
    }

    function set(){ // 设置值
        tree.set(10)
    }

###下拉单选
    var dropdown = s(".dropdown").dropdownList({
        id: "id", // id字段名称
        text: "name", // text字段名称
        data: window.data,
        height: 300,
        url: ""  // data 和 url必传一个
        //value: "10", // 默认值
    });

    function get(){ // 取值
        console.log(dropdown.get())
    }

    function set(){ // 设置值
        dropdown.set(10)
    }







###
    document.body.clientWidth ==> BODY对象宽度  
    document.body.clientHeight ==> BODY对象高度  
    document.documentElement.clientWidth ==> 可见区域宽度  
    document.documentElement.clientHeight ==> 可见区域高度  
      
    网页可见区域宽： document.body.clientWidth  
    网页可见区域高： document.body.clientHeight  
    网页可见区域宽： document.body.offsetWidth (包括边线的宽)  
    网页可见区域高： document.body.offsetHeight (包括边线的高)  
    网页正文全文宽： document.body.scrollWidth  
    网页正文全文高： document.body.scrollHeight  
    网页被卷去的高： document.body.scrollTop  
    网页被卷去的左： document.body.scrollLeft  
    网页正文部分上： window.screenTop  
    网页正文部分左： window.screenLeft  
    屏幕分辨率的高： window.screen.height  
    屏幕分辨率的宽： window.screen.width  
    屏幕可用工作区高度： window.screen.availHeight  
    屏幕可用工作区宽度： window.screen.availWidth 






























