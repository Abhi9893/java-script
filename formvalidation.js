function validation(){
    var user =document.getElementById('user').value;
    //console.log

    if(user == ""){
        document.getElementById('username').innerHTML
        =" ** please fill the username field";
        return false;
    }
    if((user.length <=2) || (user.length > 20)){
        document.getElementById('username').innerHTML
        =" ** Username lenght must be between 2 and 20";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('username').innerHTML
        =" ** only characters are allowed";
        return false;
    }
}