let index = 0
keyArray=[]
correctCount =0 
let currentPortal = localStorage.getItem("ActivePortal")
for(let i=0; i<localStorage.length; i++){
    if(localStorage.key(i).slice(0,6) == "Papers"){
        keyArray.push(localStorage.key(i))
    }
}
//RESULTS
let storageItem = JSON.parse(localStorage.getItem(keyArray[currentPortal]))
for(let i=1; i<=storageItem['len']; i++){
    let color;
    if(storageItem[eval(i)]['ans'] == storageItem[eval(i)]['sol']){
        correctCount++
        color = "green"
    }
    else{
        color = "tomato"
    }
// document.getElementById('Main').innerHTML = "Hello"
    document.getElementById('Main').innerHTML += `<div style = 'color : ${color}'><br>*` + storageItem[eval(i)]['question'] + "<br> 1)"
    + storageItem[eval(i)]['opt1'] + "<br> 2)" +  storageItem[eval(i)]['opt2'] + "<br> 3)" 
    + storageItem[eval(i)]['opt3'] + "<br> 4)" + storageItem[eval(i)]['opt4'] + "<br> *" + "Ans: "
    + storageItem[eval(i)]['ans'] + "<br>" + "Selected Ans: " + storageItem[eval(i)]['sol'] + "<br>" + "Description: "
    + storageItem[eval(i)]['desc'] + "</div>"
}


    document.getElementById('Main').innerHTML += "<br><div style='font-size : 2vw;color:red'>" + "Your Score: " + `${correctCount}` + " / " + `${storageItem['len']}` + "</div>"

// document.getElementById('Main').innerHTML = "Hello"
