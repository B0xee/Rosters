/* Randomly generated key*/
function validateKey() {
    var managers = "banana";
    var staff = "rat";
    const userInput = document.getElementById("login-Key");

    if (userInput.value.match(managers))    {
        window.location.href = "C:/Users/henry/Documents/Projects/KImasu_Roster/rosters html/Miki_Login.html";
        document.cookie = "manager"
        return true;
    }
    else if (userInput.value.match(staff))  {
        window.location.href = "C:/Users/henry/Documents/Projects/KImasu_Roster/rosters html/Display_Rosters.html";
        document.cookie = "staff"
        return true;
    }
    else{
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

export {Staff, people, validateKey}
{
    constructor(name,number)
    {
        this.name = name;
        this.name = number;
    }
}