/**
 * Created by nastya.done on 05.02.16.
 */

document.getElementById('tableListSegments').onclick = function(e) {
    var e = e || event,
        el = e.srcElement || e.target;
    if (el.tagName == 'INPUT') {
        el.parentNode.parentNode.className = el.checked ? 'changBgrRow' : '';
    }
};


$(document).on("ready", function() {
    var $table = $( "#tableListSegments");
    $table.find("tr").hover(
        function() {
            var $span = $("<span class='dd-dots'></span>");
            $(this).find("td:last").append($span);
        }, function() {
            $(this).find("td:last > .dd-dots").remove();
        }
    );
});

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
    var ddMove = $("#dd-move");
    var ddSecondMove = $(".dd-move-second.move");
    ddMove.click(function(){
        if(ddMove.find(ddSecondMove).css('display') == 'block'){
            ddMove.find(ddSecondMove).css("display", "none");
        } else {
            ddMove.find(ddSecondMove).css("display", "block");
        }
    });
});


jQuery(function($){
    $(document).mouseup(function (e){
        var ddItems = $("#dd-move, .dd-move-second.move ");
        var ddSecond = $(".dd-move-second.move");
        if (!ddItems.is(e.target) && ddItems.has(e.target).length === 0) {
            ddSecond.hide();
        }
    });
});

$(document).ready(function() {
    var ddMove = $("#dd-create");
    var ddSecondMove = $(".dd-move-second.create");
    ddMove.click(function(){
        if(ddMove.find(ddSecondMove).css('display') == 'block'){
            ddMove.find(ddSecondMove).css("display", "none");
        } else {
            ddMove.find(ddSecondMove).css("display", "block");
        }
    });
});


jQuery(function($){
    $(document).mouseup(function (l){
        var ddItems = $("#dd-create, .dd-move-second.create ");
        var ddSecond = $(".dd-move-second.create");
        if (!ddItems.is(l.target) && ddItems.has(l.target).length === 0) {
            ddSecond.hide();
        }
    });
});