let boxes = document.getElementsByClassName("box")
let keyArray = []
let activePortal = null
let flagView;
for(let i=0; i<localStorage.length; i++){
    if(localStorage.key(i).slice(0,6) == "Papers"){
        keyArray.push(localStorage.key(i))
    }
}
//PORTAL
function makeBoxExpand(view){
    view.style["background-color"] = "tomato"
    // view.style['margin'] = '1vw'
}



function makeBoxes(){
    for(let i=0; i<keyArray.length; i++){
        boxes[i].style.display = "block"
        boxes[i].innerHTML =  JSON.parse(localStorage.getItem(keyArray[i])).name  + "<br><br>"
                            + JSON.parse(localStorage.getItem(keyArray[i])).timer + " secs<br><br>"
    }
}

function selectPaper(view,position){
    activePortal = position
    localStorage.setItem("ActivePortal", activePortal)
    flagView = view
}

function makeBoxNormal(){
        for(let i=0; i<boxes.length; i++){
            if(flagView != boxes[i]){
                boxes[i].style['background-color'] = "yellowgreen"
            }
        }       
}


makeBoxes()
