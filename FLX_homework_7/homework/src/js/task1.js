const date = new Date().getHours();
const login = prompt("Enter your login");

if (!login){
    alert('Canceled')
}else if(login.length < 4){
    alert("I don't know any users having name length less than 4 symbols")
}else if (login === "User"){
    let userpass = prompt('Password');
    if (!userpass){
        alert("Wrong password")
    }else if (userpass === "UserPass"){
        if ( date < 20) {
            alert('Good day, dear User!');
        }else{
            alert('Good evening, dear User!');
        }
    }
}else if (login === "Admin"){
    let userpass = prompt('Password');
    if (!userpass){
        alert("Wrong password")
    }else if (userpass === "RootPass"){
        if ( date < 20) {
            alert('Good day, dear User!');
        }else{
            alert('Good evening, dear User!');
        }
    }
}else {
    alert("I don'n know you")
}