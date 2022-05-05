/* cookie generator */
function makeCookie(name,val,days)  {
    const d = new Date();
    d.setTime(d.getTime()+(days*24*60*60*1000));
    let expire = 'expires'+d.toUTCString();
    document.cookie = name+'='+val+';'+expire+';path=/'+d;
}


/* Randomly generated key*/
function validateKey() {
    var managersLogin = "Tina is cute";
    var staffLogin = "Andrew is cute";
    const userInput = document.getElementById("login-Key");

    if (userInput.value.match(managersLogin))    {
        window.location.href = "C:/Users/henry/Documents/Projects/KImasu_Roster/rosters html/Miki_Login.html";
        return true;
    }
    else if (userInput.value.match(staffLogin))  {
        window.location.href = "C:/Users/henry/Documents/Projects/KImasu_Roster/rosters html/Display_Rosters.html";
        return true;
    }
    else    {
        alert("Invalid key");
        return false;
    }
}


/* Database of staff names and numbers - should be able to be appended via web */
var people = [];
class Staff {
    constructor(name,number)
    {
        this.name = name;
        this.name = number;
    }
}