
$(document).ready(function() {
    var $table = $(".main");
    $table.on("mouseenter", "td", function() {
        var tdIndex = $(this).index() + 1;
        var $trs = $table.find("tr");

        $.each($trs, function(i, tr) {
            var $actualTd = $(tr).find("td:nth-child(" + tdIndex + ")");

            $(tr).find("td:nth-child(" + (tdIndex - 1) + ")").addClass("borderless");
            switch (i) {
                case 2:
                case 3:
                    var tdClass = i === 2 ? " point redbl" : "point blue";
                    $actualTd[0].innerHTML = "<div class='" + tdClass + "'>" + $actualTd[0].innerHTML + "</div>";
                    break;
            }
            $actualTd.addClass("highlighted");
        });
    });
    $table.on("mouseleave", "td", function() {
        $table.find("td").removeClass("highlighted point redbl blue borderless");
        var tdIndex = $(this).index() + 1;
        var $trs = $table.find("tr");

        $.each($trs, function(i, tr) {
            if (i == 2 || i == 3) {
                var $actualTd = $(tr).find("td:nth-child(" + tdIndex + ")");
                if ($actualTd.find(".point").length > 0) {
                    var unwrapedHtml = $actualTd.find(".point").contents().unwrap();
                    $actualTd.html(unwrapedHtml);
                }
            }
        });
    });
});


jQuery(document).ready(function(){
    jQuery('.scrollbar-macosx').scrollbar();
});


$("#datapicker").datepicker({
    firstDay: 1,
    dateFormat: 'mm.dd.yy',
    startDate: new Date()

})
