Basic Vertical Slide JQuery
===========================
- JQuery and CSS Transform Based Hover Slide which expands selected sections while contracts other sections verticaly.

Example
-------

    <script>
    $(function() {
        $(".box").bvs();
    });
    </script>
    
    <div class="box leftbox">
    </div>
    <div class="box middlebox">
    </div>
    <div class="box rightbox">
    </div>
    

Options
-------

    This plugin currently doesn't have options.

Events
-------

    <script>
    $(".box").knob({
        'onStart' : function (v) { /*make something*/ },
        'onComplete' : function (v) { /*make something*/ },
        'onHoverOut' : function (v) { /*make something*/ },
    });
    </script>

* 'onStart' : executed on animation start as well as on hover

    Parameters :
    + object : current box object

* 'onComplete' : executed on animation complete

    Parameters :
    + object : current box object

* 'onHoverOut' : executed on hover out of the box

    Parameters :
    + object : current box object


Options
-------

* 'activeRatio' : percentage of active box over the rest

    Parameters :
    + object : current box object
    Default : false

[Demo](http://zholpe.com/bvs/dist/basic/)
-------
