/**
 * Created by nastya.done on 05.02.16.
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



$(document).ready(function() {

    var dropZone = $('#dropZone'),
        maxFileSize = 1000000; // максимальный размер фалйа - 1 мб.

    // Проверка поддержки браузером
    if (typeof(window.FileReader) == 'undefined') {
        dropZone.text('Not supported by your browser!');
        dropZone.addClass('error');
    }

    // Добавляем класс hover при наведении
    dropZone[0].ondragover = function() {
        dropZone.addClass('hover');
        return false;
    };

    // Убираем класс hover
    dropZone[0].ondragleave = function() {
        dropZone.removeClass('hover');
        return false;
    };

    // Обрабатываем событие Drop
    dropZone[0].ondrop = function(event) {
        event.preventDefault();
        dropZone.removeClass('hover');
        dropZone.addClass('drop');

        var file = event.dataTransfer.files[0];

        // Проверяем размер файла
        if (file.size > maxFileSize) {
            dropZone.text('File is too big!');
            dropZone.addClass('error');
            return false;
        }

        // Создаем запрос
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', uploadProgress, false);
        xhr.onreadystatechange = stateChange;
        xhr.open('POST', 'upload.php');
        xhr.setRequestHeader('X-FILE-NAME', file.name);
        xhr.send(file);
    };

    // Показываем процент загрузки
    function uploadProgress(event) {
        var percent = parseInt(event.loaded / event.total * 100);
        dropZone.text('Загрузка: ' + percent + '%');
    }

    // Пост обрабочик
    function stateChange(event) {
        if (event.target.readyState == 4) {
            if (event.target.status == 200) {
                dropZone.text('Export is successful!');
            } else {
                dropZone.text('Error!');
                dropZone.addClass('error');
            }
        }
    }

});

$(function(){
    $("#upload_link").on('click', function(e){
        e.preventDefault();
        $("#upload:hidden").trigger('click');
    });
});