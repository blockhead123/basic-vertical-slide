(function( $ ) {

    $.fn.bvs = function( options ) {

        // DEFAULT OPTIONS
        var settings = $.extend({
            // These are the defaults.
            // These are the events
            onComplete: false,
            onStart: false,
            onHoverOut: false
        }, options );

        var bvs = this;

        // TRIGGER EVENTS
        bvs.triggerEvent = function(event){
            if(event == "start-complete"){
                // trigger start and complete
                if(settings.onStart != false){
                    settings.onStart(this);
                }
                setTimeout(function(){
                    if(settings.onComplete != false){
                        settings.onComplete(this);
                    }
                },400);
            }
            else if(event == "hover-out"){
                // trigger hover out
                if(settings.onHoverOut != false){
                    settings.onHoverOut(this);
                }
            }
        };

        // ANIMATION EXECUTION AND TRIGGER EVENTS
        $(bvs).hover(
            function(){
                bvs.removeClass("active");
                bvs.addClass("notactive");
                $(this).addClass("active");
                $(this).removeClass("notactive");
                bvs.triggerEvent("start-complete");
            },function(){
                bvs.removeClass("active");
                bvs.removeClass("notactive");
                bvs.triggerEvent("hover-out");
            }
        );

        return bvs;

    };
}( jQuery ));
