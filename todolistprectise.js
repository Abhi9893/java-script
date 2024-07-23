const userNameTextField = document.getElementById('uesrname')
const addUserBtn = document.getElementById('adduser')

addUserBtn.onclick =()=>{
    const name=userNameTextField.value
    //alert(name)
    userArray.push({'name':name})
    //console.log(userArray)
    //saveData(userArray)
}
function displayData