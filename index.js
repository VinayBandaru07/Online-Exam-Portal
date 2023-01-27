let emp_roll = "123456"
//ROLLNUMBER
let emp_pass = "654321"
let st_roll = "20NG1A0535"
let st_pass = "OEMS"
let currentUser
window.history.forward()

function emp_login(){
    if(check_emp_details()){
        window.location.href = "teacher.html"
    }
    else{
        alert("Enter correct Details")
    }
}

function st_login(){
    if(check_std_details()){
        if(localStorage.getItem('ActiveUser') == st_roll){
            alert("Your exam has been completed")
            return
        }
        localStorage.setItem('ActiveUser', st_roll)
        window.location.href = "quizzy.html"
    }
    else{
        alert("Enter correct Details")
    }
}
localStorage.setItem("ActiveUser", "hi")
// localStorage.clear()

function check_emp_details(){
    if(document.getElementById('emp_roll').value==emp_roll && document.getElementById('emp_pass').value == emp_pass){
        return true
    }
    return false
}

function check_std_details(){
    if(document.getElementById('st_roll').value == st_roll && document.getElementById('st_pass').value == st_pass){
        
        return true
    }
    return false
}