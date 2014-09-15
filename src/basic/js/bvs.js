(function( $ ) {

    $.fn.bvs = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
        }, options );

        var bvs = this;

        $(this).hover(
            function(){
                bvs.removeClass("active");
                bvs.addClass("notactive");
                $(this).addClass("active");
                $(this).removeClass("notactive");
            },function(){
                bvs.removeClass("active");
                bvs.removeClass("notactive");
            }
        );

        // Greenify the collection based on the settings variable.
        return bvs;

    };
}( jQuery ));
/**
 * Created by bingo on 9/15/14.
 */
