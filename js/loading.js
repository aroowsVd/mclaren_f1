/*Add {opacity:0; overflow: hidden;} style to body element.*/
var max_delay_time = 1500,
    // loading_bg_color = "var(--color-main)",
    // loading_style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: "+loading_bg_color+"; z-index: 9999;",

    // progress_bar_container_bg_color = "var(--color-w)",
    // progress_bar_container_width = "25%",
    // progress_bar_container_height = "6px",
    // progress_bar_container_style = "position: absolute; top: 50%; left: 50%; width: "+progress_bar_container_width+"; height: "+progress_bar_container_height+"; background: "+progress_bar_container_bg_color+"; border-radius: 100px; transform: translate(-50%, -50%); overflow: hidden;",

    // progress_bar_color = "var(--color-point)",
    // progress_bar_style = "position: absolute; top: 0; left: 0; width: 0%; height: 100%; background: "+progress_bar_color+"; border-radius: inherit;",

    // progress_font = "Poppins",
    // progress_font_size = "14px",
    // progress_font_color = "var(--color-w)",
    // progress_font_style = "position: absolute; top: 52%; left: 50%; width: 50px; margin-left: -25px; font-family: \""+progress_font+"\"; font-size: "+progress_font_size+"; color: "+progress_font_color+"; text-align: center;",

    loading_bg = "url(img/bg_pattern_carbon.jpg) repeat",
    loading_style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: "+loading_bg+"; z-index: 9999;",

    loader_circle_width = "43px",
    loader_circle_height = "24px",
    loader_circle_bg = "url(img/ci_mclaren_semi.png)",
    loader_circle_style = "position: absolute; top: 50%; left: 50%; width:"+loader_circle_width+"; height:"+loader_circle_height+"; background:"+loader_circle_bg+"; transform: translate(-50%, -50%); ",

    loder_line_mask_style = "position: absolute; left: 50%; top: 50%; width: 90px; height: 90px; margin-left: -45px; margin-top: -45px; mask-image: linear-gradient(180deg, var(--color-k), var(--color-k-000)); animation: rotate 1.2s infinite linear;",

    loder_line_style = "width: 90px; height: 90px; border-radius: 50%; box-shadow: inset 0 0 0 2px rgba(255, 115 , 0, .5);",
    
    progress_update,
    is_stop = false;
function counter(a, b, c){
    a.each(function () {
        $(this).prop('Counter', b).stop().animate({
            Counter: c
        }, {
            duration: 500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now)+"%");
            }
        });
    });
}
$(function(){
    // $("body").append("<div class='loading_cover' style='"+loading_style+"'><div class='progress_bar_container' style='"+progress_bar_container_style+"'><div class='progress_bar' style='"+progress_bar_style+"'></div></div><div class='progress_text' style='"+progress_font_style+"'>0%</div></div>").animate({opacity:1}, 250);
    $("body").append("<div class='loading_cover' style='"+loading_style+"'><div style='"+loader_circle_style+"'></div><div style='"+loder_line_mask_style+"'><div style='"+loder_line_style+"'></div></div></div>").animate({opacity:1}, 250);
    var progress_percent = 0;
    setTimeout(function(){
        progress_update = setInterval(function(){
            if(is_stop){
                clearInterval(progress_update);
                $(".progress_bar").stop().animate({width: "100%"}, 500);
                counter($(".progress_text"), $(".progress_text").text().replace(/%/g,""), 100);
                setTimeout(function(){
                    $(".loading_cover").fadeOut(1000, function(){
                        $(this).remove();
                    });      
                    $("body").css({overflow: "visible"});
                    $("html").removeClass("loading");
                }, 500);  
            }else{            
                const random_number = Math.floor(Math.random() * 3);
                $(".progress_bar").stop().animate({width: progress_percent + "%"}, 50);
                progress_percent += random_number;
                counter($(".progress_text"), $(".progress_text").text().replace(/%/g,""), progress_percent);
            }
        }, 100);
    }, 250);
});
$(window).load(function(){
    setTimeout(function(){
        is_stop = true; 
    }, max_delay_time);
});