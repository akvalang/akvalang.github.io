/**
 * Created by nastya.done on 29.01.16.
 */
function animate(options) {

    var start = performance.now();

    requestAnimationFrame(function animate(time) {
        var timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;

        var progress = options.timing(timeFraction)

        options.draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}

refresh.onclick = function () {
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




function dropDown(li) {
    var submenu = li.getElementsByTagName('ul')[0];
    var submenu2 = li.getElementsByTagName('ul')[1];
        li.onclick = function(event) {
            t=event.target||event.srcElement;
            if(t.tagName == 'A'){
                submenu.style.display = submenu.style.display == "block" ? "" : "block";
                submenu2.style.display = submenu2.style.display == "block" ? "" : "block";
            }
        }
}

