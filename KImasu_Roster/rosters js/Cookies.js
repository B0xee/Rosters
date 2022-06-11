/* cookie generator */
function setCookie(name,val,days)  {
    const d = new Date();
    d.setTime(d.getTime()+(days*24*60*60*1000));
    let expire = 'expires='+d.toUTCString();
    document.cookie = name+'='+val+';'+expire+';path=/';
}

function getCookie(name)    {
    let name = name + "=";
    let decodedCookie = decodeURIComp(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
    }
    return "";
}

function checkCookie() {
    let phNum = getCookie("phone-number");
    if (phNum != "") { /* Does not exist */
        /* Do something */
    } else {    /* Exists */
       user = /* Get name from database */;
       if (user != "" && user != null) {    /* Is valid */
         setCookie("loggedIn", user, 1);
       }
    }
  }

/* Randomly generated key*/
function validateKey() {
    var managersLogin = "Tina is cute";
    var staffLogin = "Andrew is cute";
    const userInput = document.getElementById("login-Key");

    if (userInput.value.match(managersLogin))    {
        window.location.href = "C:/Users/henry/Documents/Projects/KImasu_Roster/rosters html/Miki_Login.html";
        /* Update cookie val */
        return true;
    }
    else if (userInput.value.match(staffLogin))  {
        window.location.href = "C:/Users/henry/Documents/Projects/KImasu_Roster/rosters html/Display_Rosters.html";
        /* Update cookie val */
        return true;
    }
    else    {
        alert("Invalid key");
        return false;
    }
}
