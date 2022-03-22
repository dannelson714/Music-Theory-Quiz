
var storedUsers = JSON.parse(localStorage.getItem("hsList"));

//The following was taken from https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
storedUsers.sort((a,b) => {
    return b.score - a.score;
});


//Takes list of stored User objects just received from storage and creates a list (pre-sorted into descending order)
function newHighScore(storedUsers) {
    for (i = 0; i<storedUsers.length; i++){
        var newLi = document.createElement("li");
        var userList = document.querySelector("#user-list");
        newLi.textContent = storedUsers[i].user_name + ": " + storedUsers[i].score;
        userList.appendChild(newLi)
        userList.setAttribute("style", "padding: 10px; list-style-type: none;");
        newLi.setAttribute("class", "highScore");
        newLi.setAttribute("style", "padding-left: 100px; padding-right: 100px; padding-top:2px; padding-bottom: 2px;");
        if (i%2 == 0){
            newLi.setAttribute("style", "background-color: lightgrey; padding-left: 100px; padding-right: 100px; padding-top:2px; padding-bottom: 2px;");
        }
    }
}

newHighScore(storedUsers);

var clearButton = document.querySelector("#clear")

//Clears the local storage and the list on screen
clearButton.addEventListener("click", function(event) {
    localStorage.clear();
    for (i = 0; i<=storedUsers.length; i++) {
        console.log(storedUsers);
        var userItem = document.querySelector(".highScore");
        userItem.remove();
    }
    newHighScore(storedUsers);
    
});









