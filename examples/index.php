<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link href="style.css" rel="stylesheet">
        <script type="text/javascript" src="md5.js"></script>
        <script type="text/javascript" src="script.js"></script>
        <title>Authorization</title>
    </head>
    <body>

    <div class="block">
    <?php
    $cookie_name = 'user';
    if(isset($_COOKIE[$cookie_name]) && $_COOKIE[$cookie_name] == 'sodium238') {;?>
        <div class="list-page">
        <h2>Authorized!</h2>
        <ul>
            <li><a style="text-decoration: none;" href="https://s-media-cache-ak0.pinimg.com/originals/71/37/3a/71373aef9ffc6aa3cbf4ea8512ddb068.gif">Manul ^_^</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/newreport">New report</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/login">Login</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/remindpass">Remaind password</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/subscribers_test/index.html">Subscribers test</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/simple.html">Simple test</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/popup.html">Popup test</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/subscribers/subscribers.html">Subscribers</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/segments/segments.html">Segments</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/header/header.html">Header</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/dashboard/index.html">Dashboard</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/campaingsList/campaings.html">Campaign list</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/campaingsGrid/campaings.html">Campaign grid</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/add-new-subscr-1/addNewSubscr.html">Add new subscriber-1</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/add-new-subscr-2/addNewSubscr2.html">Add new subscriber-2</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/split-campaign/split-campaign.html">Split campaign</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/export-csv/export-csv.html">Export CSV</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/create-regular-camp1/create-regular-camp1.html">Create regular campaign page</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/split-campaign-send-time/split-campaign-send-time.html">Split campaign page send time</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/split-campaign%20from%20name/split-campaign-from-name.html">Split campaign from name</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/split-camp-email-content/split-camp-email-content.html">Split campaign email content</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/create-new-segm-page/create-new-segm-page.html">Create new segment page</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/privacy/privacy-policy.html">Privacy Policy</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/anti-spam/anti-spam-policy.html">Anti-spam Policy</a></li>
            <li><a style="text-decoration: none;" href="http://uniseven.com.ua/terms-of-use/terns-of-use.html">Terms of Use</a></li>
        </ul>
        <a id="logout" style="cursor: pointer;float: right" onclick="logout()">Logout</a>
        </div>
   <?php } else {?>

    <div id="tooltip" style="display: none;">
        <div class="arrow"></div>
        <div class="tooltip">Error</div>
    </div>
    <div class="top">
        <img src="icon.svg" class="icon"/>

        <h1>Authorization</h1>
    </div>
    <input type="password" name="pass" id="pass"
           onclick="tooltipOff('tooltip')"
           onkeyup="gradientOn('button'); keyCheck(event)">
    <button type="submit" id="button" class="button" value="Login"  onclick="validate('tooltip', 'pass')">Login</button>
</div>
    <?php }?>

    </body>
    </html>





