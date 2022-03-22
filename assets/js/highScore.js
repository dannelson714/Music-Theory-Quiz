

var storedUsers = JSON.parse(localStorage.getItem("hsList"));


storedUsers.sort((a,b) => {
    return b.score - a.score;
});



function newHighScore(storedUsers) {
    for (i = 0; i<storedUsers.length; i++){
        var newLi = document.createElement("li");
        var userList = document.querySelector("#user-list");
        newLi.textContent = storedUsers[i].user_name + ": " + storedUsers[i].score;
        userList.appendChild(newLi)
        userList.setAttribute("style", "padding: 10px; list-style-type: none;");
        newLi.setAttribute("style", "padding: 10px;");
        
    }
    
}

newHighScore(storedUsers);










