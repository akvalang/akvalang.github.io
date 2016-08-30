function getPass(){
    return '79a84acc94b0f6c1a0ff18a802706bc9';
}

function keyCheck(event){
    if (event.keyCode == 13) {
        validate('tooltip', 'pass');
    }}

    function validate(id, pass) {
    var e = document.getElementById(id);
    var p = document.getElementById(pass);
    if (md5(p.value) != getPass()) {
        if (e.style.display == 'none') {
            e.style.display = 'block';
        }
    }
    else {
        setCookie('user', p.value , 7);
        location.reload();
        if (e.style.display == 'block') {
            e.style.display = 'none';
        }
    }
}

function tooltipOff(id) {
    var e = document.getElementById(id);
    var b = document.getElementById('pass');
    var a = document.getElementById('button');
    if (e.style.display == 'block' && md5(b.value) != getPass()) {
        e.style.display = 'none';
        b.value = '';
        a.classList.remove('active');
    }
}

function gradientOn(id) {
    var a = document.getElementById(id);
    var n = document.getElementById('pass').value.length;
    if (n !== 0) {
        a.classList.add('active');
    }
    else {
        a.classList.remove('active');

    }
}

function setCookie(name, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}

function logout() {
     document.cookie = 'user' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'; 
    location.reload(); 
}



