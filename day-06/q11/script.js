let user = {
    username: "Karishma",
    showUsername(){
        console.log(this.username);
    }
}

function displayUsername(){
    console.log(this.username);
}

user.showUsername();
displayUsername();
