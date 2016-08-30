/**
 * Created by nastya.done on 29.01.16.
 */
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

// Iterate over each select element
$('select').each(function () {

    // Cache the number of options
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    // Hides the select element
    $this.addClass('s-hidden');

    // Wrap the select element in a div
    $this.wrap('<div class="select"></div>');

    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="styledSelect"></div>');

    // Cache the styled div
    var $styledSelect = $this.next('div.styledSelect');

    // Show the first select option in the styled div
    $styledSelect.text($this.children('option').eq(0).text());

    // Insert an unordered list after the styled div and also cache the list
    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);

    // Insert a list item into the unordered list for each select option
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    // Cache the list items
    var $listItems = $list.children('li');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.styledSelect.active').each(function () {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.eq(0).hide();
    $listItems.click(function (e) {
        e.stopPropagation();
        $listItems.show();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $(this).hide();
        $list.hide();
        /* alert($this.val()); Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


