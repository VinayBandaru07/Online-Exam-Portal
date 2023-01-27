let que_view =document.getElementById("que")
let opt1_view = document.getElementById("opt1")
let opt2_view = document.getElementById("opt2")
let opt3_view = document.getElementById("opt3")
let opt4_view = document.getElementById("opt4")
let desc_view = document.getElementById('desc')
let next_bt = document.getElementById("next")
let save_bt = document.getElementById("save")
let name_view = document.getElementById("name")
let timer_view = document.getElementById("timer")
let index =0

// localStorage.clear()

let my_obj = new Object()

function checkText(){
    if(opt1_view.value == "" || opt2_view.value =="" || opt3_view.value == "" || opt4_view.value == "" || que_view.value == ""){
        alert("Every Input should be Filled")
        return false
    }
    loadObj()
    makeEmpty()
    return true
    
}

function makeEmpty(){
    que_view.value = ""
    opt1_view.value = ""
    opt2_view.value = ""
    opt3_view.value = ""
    opt4_view.value = ""
    desc_view.value = ""
}
function loadObj(){
        index++;
    let temp = eval(index)
    my_obj[temp] = new Object();
    my_obj[temp]["question"] = que_view.value
    my_obj[temp]["opt1"] = opt1_view.value
    my_obj[temp]["opt2"] = opt2_view.value
    my_obj[temp]["opt3"] = opt3_view.value
    my_obj[temp]["opt4"] = opt4_view.value
    if(desc_view.value.length == 0){
        my_obj[temp]['desc'] = "None"
    }
    else{
        my_obj[temp]['desc'] = desc_view.value
    }
    my_obj["len"] = index
    for(let i =0; i<4; i++){
        if(document.getElementsByName("hi")[i].checked == true){
            my_obj[temp]["ans"] = i+1
        }
    }
    
    
    

    // alert(my_obj[temp]["question"])

}

function checkNameTimer(){
    if(name_view.value =="" || timer_view.length ==0){
        alert("Enter Subject Name and set Timer")
        return false
    }
    return true
}

function parseObj(){
    if(checkText() && checkNameTimer()){
        my_obj['name'] = name_view.value
        my_obj['timer'] = timer_view.value
        localStorage.setItem("Papers" + name_view.value, JSON.stringify(my_obj))
        alert(JSON.stringify(my_obj))
        window.location.href = "../html/teacher.html"
        // alert("Papers" + my_obj.name)
    }

}
// PAPERS