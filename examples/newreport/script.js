/**
 * Created by nastya.done on 10.12.15.
 */

window.onload = function select(){
    document.getElementById('selectedCat').classList.add('colChange');
}

$(document).ready(function() {
    $("#category").on("click", ".col", function(){
        $("#category").find(".col").removeClass("colChange", "colChange:nth-of-type(1)");
        $(this).addClass("colChange", "colChange:nth-of-type(1)");
    });
});

function check(id){
    var a = document.getElementById(id);
    var category = a.getAttribute('value');
    var s = document.getElementById('reportCategory');
    s.value = category;
    return category;
}

function select(id){
    var b = document.getElementById(id);
    var sub = b.options[b.selectedIndex].value;
    return sub;

}

function validate(){
    var c = document.getElementsByClassName('button')[0];
    if(select('subCategory') !='' && select('type') !='' && select('object') !=''){
        c.classList.add('buttonActive');
        return true;
    } else {
        if (c.classList.contains("buttonActive")) {
            c.classList.remove('buttonActive');
            return false;
        }

    }
}

$(function(){
    $('#form').submit(function(e){
        e.preventDefault();
        if(validate()==true) {
            var m_method = $(this).attr('method');
            var m_action = $(this).attr('action');
            var m_data = $(this).serialize();
            $.ajax({
                type: m_method,
                url: m_action,
                data: m_data,
                beforeSend: function () {
                    var l = document.getElementById('load');
                    if (l.style.display = 'none') {
                        l.style.display = 'block'
                    }
                },
                success: setTimeout(function () {
                    var l = document.getElementById('load');
                    var t = document.getElementById('tooltip');
                    var sel = document.getElementsByClassName('colChange')[0];
                    var def = document.getElementById('selectedCat');
                    if (l.style.display = 'block') {
                        l.style.display = 'none';
                        t.style.display = 'inline-block';
                        sel.classList.remove('colChange');
                        def.classList.add('colChange');
                        document.form.reset();
                    }
                }, 1000)
            });
            setTimeout(function res(){
                var t = document.getElementById('tooltip');
                if (t.style.display = 'inline-block') {
                    t.style.display = 'none'
                }
            }, 4000)

        };
    });
});

