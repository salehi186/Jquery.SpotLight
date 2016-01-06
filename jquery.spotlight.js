//
// version 1
//Author: Aliakbar Salehi
//Compatible by html5 CSS3

(function ($) {


    $.fn.spotLightOff = function () {
        
		$("#spotLightCustom").remove();
    }
    $.fn.spotLightOn = function (options) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#ffffff",
            backgroundColor: "#000000",
            opacity: "0.4"
        }, options);

        var zIndex = 99999;
        var position = this.get(0).getBoundingClientRect();

        spotLight = $("#spotLightCustom");
        if (spotLight.length == 0) {
            spotLight = $("<div id='spotLightCustom' style='top:0;left:0;border: solid black;display:none;background-color:"
            + settings.color + ";border-color:" + settings.backgroundColor
            + "; position:fixed;border-right-width: 10000px;border-bottom-width: 10000px;' ></div");
            spotLight.appendTo(document.body);
        }
        
        spotLight.css({width:'1px',height:'1px',"z-index":zIndex,'opacity':settings.opacity,"border-top-width": 0,"border-left-width":0,display:'block'});
       
        spotLight.animate({ height: this.height(), width: this.width(), "border-left-width": position.x?position.x:position.left, "border-top-width": position.y?position.y:position.top }, 1000, function () { });
        return this;
    }

})(jQuery);
