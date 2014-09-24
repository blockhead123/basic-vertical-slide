Basic Vertical Slide JQuery
===========================
- JQuery and CSS Transform Based Hover Slide which expands selected sections while contracts other sections verticaly.

[Demo](http://basic-vertical-slide.zholpe.com/)
-------

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


<table>
    <tr>
        <th>
            Name
        </th>
        <th colspan=3>
            Description
        </th>
    </tr>
    <tr>
        <td>
            activeRatio
        </td>
        <td colspan=3>
            percentage of active box over the rest
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            Default
        </td>
        <td>
            pixels
        </td>
        <td>
            75
        </td>
    </tr>
</table>

Events
-------

    <script>
    $(".box").bvs({
        'onStart' : function (v) { /*make something*/ },
        'onComplete' : function (v) { /*make something*/ },
        'onHoverOut' : function (v) { /*make something*/ },
    });
    </script>


<table>
    <tr>
        <th>
            Name
        </th>
        <th colspan=2>
            Description
        </th>
    </tr>
    <tr>
        <td>
            onStart
        </td>
        <td colspan=2>
            executed on animation start as well as on hover
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <th colspan=2>
            Parameters
        </th>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            object
        </td>
        <td>
            current box object
        </td>
    </tr>
    <tr>
        <td>
        </td>
    </tr>
    <tr>
        <th>
            Name
        </th>
        <th colspan=2>
            Description
        </th>
    </tr>
    <tr>
        <td>
            onComplete
        </td>
        <td colspan=2>
            executed on animation complete
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <th colspan=2>
            Parameters
        </th>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            object
        </td>
        <td>
            current box object
        </td>
    </tr>
    <tr>
        <td>
        </td>
    </tr>
    <tr>
        <td>
        </td>
    </tr>
    <tr>
        <th>
            Name
        </th>
        <th colspan=2>
            Description
        </th>
    </tr>
    <tr>
        <td>
            onHoverOut
        </td>
        <td colspan=2>
            executed on hover out of the box
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <th colspan=2>
            Parameters
        </th>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            object
        </td>
        <td>
            current box object
        </td>
    </tr>
    <tr>
        <td>
        </td>
    </tr>
</table>

