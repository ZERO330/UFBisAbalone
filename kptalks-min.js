var attempt_count=0,kp_height=450,kp_left_distance="-130px",kp_slide_speed=100,default_text="\u4f60\u597d\uff0c\u6211\u662f\u67ef\u6587\u54f2",img_source="http://unlimited.kptaipei.tw/images/kp.png",api_source="http://api.kptaipei.tw/v1/category/40?accessToken=kp53f568e77303e9.28212837",kp_width=Math.ceil(30*kp_height/29),posts={},kp_says,kp='<div id="kp_come_container" style="width:'+kp_width+"; height:"+kp_height+"px; position:fixed; left:-"+kp_width+'px; bottom:0;"><img src="'+img_source+'" style="width:100%; height:100%;"><div id="kp_popup" style="padding: 20px; width: 300px; height:140px; position: absolute;left:'+
.8*kp_width+"px;top:"+.28*kp_height+'px;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;-webkit-box-shadow: rgba(0,0,0,.4) 0px 1px 5px -1px;box-shadow: rgba(0,0,0,.4) 0px 1px 5px -1px; background-color:beige;display:none;"><div id="kp_says" style="text-align:center;font-size:18px;line-height:26px;">'+default_text+'</div><div style="width: 0px;height: 0px;border-top-width: 15px;border-top-style: solid;border-top-color: transparent;border-bottom-width: 15px;border-bottom-style: solid;border-bottom-color: transparent;border-right-width: 40px;border-right-style: solid;border-right-color: rgba(0,0,0,.4);position: absolute;left: -40px;top:30%;"></div><div style="width: 0px;height: 0px;border-top-width: 15px;border-top-style: solid;border-top-color: transparent;border-bottom-width: 15px;border-bottom-style: solid;border-bottom-color: transparent;border-right-width: 42px;border-right-style: solid;border-right-color: beige;position: absolute;left: -40px;top:29.8%;"></div></div></div><style>#kp_come_container #kp_says {height:140px;overflow-y:auto;text-algin:center;}#kp_come_container #kp_says p,#kp_come_container #kp_says span {padding:0;margin:0;font-size:18px;line-height:26px;}#kp_come_container #kp_say_hi{padding:0;margin:0;font-size:18px;line-height:26px;padding-bottom:5px;display:block;}#kp_come_container #kp_says #kp_say_bighi{font-size:22px;font-weight:bold;line-height:32px;}</style>';
$("body").append(kp);
$.get(api_source,function(a){var d=0;$.each(a.data,function(b,a){posts[d]=a;d++});var b=posts[Math.floor(Math.random()*(d-1))];a=b.title;var c=b.content,b='<a href="'+b.url+'" target="_blank" style="color:brown;padding-top:10px;display:block;">\u4e86\u89e3\u66f4\u591a\u67ef\u6587\u54f2\u7684\u653f\u898b</a>';a=a.replace(/\u3010\u67efp\u65b0\u653f\u3011/g,"");c=c.replace(/\u67ef\u6587\u54f2/g,"\u6211").replace(/\u53f0\u5317\u5e02\u9577\u53c3\u9078\u4eba/g,"").replace(/\u6211\u8868\u793a/g,"\u6211\u8a8d\u70ba").replace(/\u6211\u6307\u51fa/g,
"\u6211\u8a8d\u70ba");c=c.split("</p>");kp_says=void 0==c[1]?'<p id="kp_say_bighi">\u60a8\u597d\uff0c\u6211\u662f\u67ef\u6587\u54f2<br>\u6211\u63d0\u51fa<br>\u300c'+a.substring(2)+"\u300d</p>"+b:'<p id="kp_say_hi">\u60a8\u597d\uff0c\u6211\u662f\u67ef\u6587\u54f2</p>'+c[1]+"..."+b+"</p>";$("#kp_says").html(kp_says).promise().done(function(){$("p").removeAttr("style");$("span").removeAttr("style")})});
$(window).scroll(function(){var a=$(window).scrollTop(),d=$(window).height(),b=$(document).height();a+d>.8*b?$("#kp_come_container").css("left")=="-"+kp_width+"px"&&$("#kp_come_container").animate({left:kp_left_distance},kp_slide_speed,function(){$("#kp_popup").show()}):$("#kp_come_container").css("left")==kp_left_distance&&($("#kp_popup").hide(),$("#kp_come_container").animate({left:"-"+kp_width+"px"},kp_slide_speed,function(){}))});
