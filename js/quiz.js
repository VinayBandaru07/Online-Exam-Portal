let que_view =document.getElementById("que")
let opt1_view = document.getElementById("opt1")
let opt2_view = document.getElementById("opt2")
let opt3_view = document.getElementById("opt3")
let opt4_view = document.getElementById("opt4")
let next_bt = document.getElementById("next")
let timer = document.getElementById("timer")
let keyArray = []
let selectedAnswer = 0
let currentPortal = null
let time_limit = 60
let time = time_limit
let x;
let randomList = []
let selected_option = 0
let storageItem = new Object();
let index=0;


//QUIZ
for(let i=0; i<localStorage.length; i++){
    if(localStorage.key(i).slice(0,6) == "Papers"){
        keyArray.push(localStorage.key(i))
    }
}

// next_bt.addEventListener('click', on_click_next)
// alert(randomNumber)



function get_obj(){
    currentPortal = JSON.parse(localStorage.getItem("ActivePortal"))
    storageItem = JSON.parse(localStorage.getItem(keyArray[currentPortal]))
    time_limit = storageItem['timer']
    get_random_list(JSON.parse(localStorage.getItem(keyArray[currentPortal])).len)
    // alert(JSON.stringify(storageItem))
    make_paper()
}

function make_paper(){
    que_view.innerHTML = storageItem[eval(randomList[index])].question
    opt1_view.innerHTML = storageItem[eval(randomList[index])].opt1
    opt2_view.innerHTML = storageItem[eval(randomList[index])].opt2
    opt3_view.innerHTML = storageItem[eval(randomList[index])].opt3
    opt4_view.innerHTML = storageItem[eval(randomList[index])].opt4
}

function on_click_next(){
    if(index+1 == randomList.length){
        storageItem[eval(randomList[index])]['sol'] = selectedAnswer
        localStorage.setItem(keyArray[currentPortal], JSON.stringify(storageItem))
        window.location.href = "../html/Result.html"
    }
    storageItem[eval(randomList[index])]['sol'] = selectedAnswer
    selectedAnswer = 0
    index++;
    make_paper()
    selected_option=0;
    changeColorsNormal()
    window.clearInterval(x);
    setTimer()

}

function get_random_list(n){
    for(let i=0; i<100; i++){
        let ran_num = Math.floor((Math.random()*10))+1
        if((!randomList.includes(ran_num)) && (ran_num <= n) && ran_num>0){
            randomList.push(ran_num)
        }
        if(randomList.length == n){
            break;
        }
    }
    
}


function changeColors(view, num){
    selectedAnswer = num
    changeColorsNormal()
    view.style["background-color"] = "grey";
    

}

function changeColorsNormal(){
    opt1_view.style["background-color"] = "white";
    opt2_view.style["background-color"] = "white";
    opt3_view.style["background-color"] = "white";
    opt4_view.style["background-color"] = "white";

}

document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
        console.log("Hello")
    } else {
        window.location.href = "../html/Alert.html"

    }
  });


function setTimer(){
    time=time_limit
 x = setInterval(function(){
    timer.innerHTML = time--;
    if(time >=40){
        timer.style.color = "green"
    }
    else if(time==19){
        timer.style.color = "yellow"
    }
    else if(time==10){
        timer.style.color = "red"
    }
    if(time ==-1){
        on_click_next()
        time=time_limit
    }
}, 1000)
}



get_obj()
get_random_list()
setTimer()
window.history.forward()

// set_event_listeners()