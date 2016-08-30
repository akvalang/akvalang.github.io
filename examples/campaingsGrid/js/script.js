/**
 * Created by nastya.done on 05.02.16.
 */
$("#datapicker").datepicker({
    firstDay: 1,
    dateFormat: 'mm.dd.yy',
    startDate: new Date()

})

var size = 80,
    newsContent= $('.blk-description'),
    newsText = newsContent.text();

if(newsText.length > size){
    newsContent.text(newsText.slice(0, size) + ' ...');
}



if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
{
    document.getElementById('elem').style.height = '5%';
    document.getElementById('elem1').style.height = '5%';
}

function animate(options) {
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
        var timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;
        var progress = options.timing(timeFraction);
        options.draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
};

function initDropDown() {
    var submenus = document.getElementsByClassName("submenu"),
        submenus = Array.prototype.slice.call(submenus),
        li = document.getElementById("dropDownSub");

    li.onclick = function(event) {
        var target = event.target || event.srcElement;
        if (target.tagName === 'A') {
            Array.prototype.forEach.call(submenus, function(submenu) {
                submenu.style.display = submenu.style.display === "block" ? "" : "block";
            });
        }
    };
};

function hideSubMenu() {
    var submenus = document.getElementsByClassName("submenu");
    submenus = Array.prototype.slice.call(submenus);

    Array.prototype.forEach.call(submenus, function(submenu) {
        submenu.style.display = "";
    });
};

function onRefreshClick() {
    animate({
        duration: 1000,
        timing: function (timeFraction) {
            return timeFraction;
        },
        draw: function (progress) {
            elem.style.width = progress * 100 + '%';
            elem1.style.width = progress * 100 + '%';
        }
    });
};

window.onload = function() {
    initDropDown();
};

document.onclick = function(event) {
    var target = event.target || event.srcElement;
    var toCollapse = true;

    while(target != document) {
        if (target.id == 'dropDownSub') {
            toCollapse = false;
            break;
        }
        target = target.parentNode;
    }

    if (toCollapse) {
        hideSubMenu();
    }
};



$(document).ready(function() {
    $("#dd-templ").click(function(event){
        if($("#dd-templ").find(".dd-templ-second").css('display') == 'block'){
            $("#dd-templ").find(".dd-templ-second").css("display", "none");
        } else {
            $("#dd-templ").find(".dd-templ-second").css("display", "block");
        }
    });
});


jQuery(function($){
    $(document).mouseup(function (e){
        var ddItems = $("#dd-templ, .dd-templ-second ");
        var ddSecond = $(".dd-templ-second");
        if (!ddItems.is(e.target) && ddItems.has(e.target).length === 0) {
            ddSecond.hide();
        }
    });
});
