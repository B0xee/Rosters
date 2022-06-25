/* Cookies and user validation */

function setCookie(name,val,days)  {
    const d = new Date();
    d.setTime(d.getTime()+(days*24*60*60*1000));
    let expire = 'expires='+d.toUTCString();
    document.cookie = name+'='+val+';'+expire+';path=/';
};

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
    };
    return "";
};

function checkCookie() {
    let phNum = getCookie("phone-number");
    if (phNum != "") { /* Does not exist */
        /* Do something */
    } else {    /* Exists */
       user = /* Get name from database */;
       if (user != "" && user != null) {    /* Is valid */
         setCookie("loggedIn", user, 1);
       }
    };
  };

/* Randomly generated key*/
function logIn() {
    
    /* Get data from SQL */

    const userName = document.getElementById("login-Name");
    const userPsw = document.getElementById('login-Psw')

    if (userName.value.match("Placehodler") && (userPsw.value.match("Placeholder2")))    {
        window.location.href = "C:/Users/henry/Documents/Projects/KImasu_Roster/rosters html/Miki_Login.html";
        checkCookie();
        /* Update cookie val */
        return true;
    }
    else if (userInput.value.match("Placeholder"))  {
        window.location.href = "C:/Users/henry/Documents/Projects/KImasu_Roster/rosters html/Display_Rosters.html";
        checkCookie();
        /* Update cookie val */
        return true;
    }
    else    {
        alert("Invalid");
        return false;
    };
};