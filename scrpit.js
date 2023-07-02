var details = document.querySelectorAll("summary")
var sddi = document.querySelectorAll("h4")


details.forEach(function (elm) {
    elm.addEventListener("click", function () {
        // console.log(elm.lastElementChild.innerHTML);
        if (elm.lastElementChild.innerHTML === `<i class="ri-add-line"></i>`) {
            elm.lastElementChild.innerHTML = `<i class="ri-subtract-fill"></i>`
        }
        else {
            elm.lastElementChild.innerHTML = `<i class="ri-add-line"></i>`
            
        }

    })
})

var slid = 0;


var btm1 = document.querySelector("#btn1")
var btm2 = document.querySelector("#btn2")
var slid = document.querySelectorAll(".dives");


console.log(slid);

var count = 0;
var sliing = 0

btm1.addEventListener("click", ()=>{
    console.log(sliing);
    if(sliing<0){
        sliing +=100
        slid.forEach((dets)=>{
            dets.style.transform = ` translate(${sliing}%, 0)`
        })
        
    }
    else{
        console.log("nika ja saale");
    }
})

btm2.addEventListener("click", ()=>{
    console.log(sliing);
    if(sliing> -600){
        sliing-=100
        slid.forEach((dets)=>{
            dets.style.transform =` translate(${sliing}%, 0)`
        })
        console.log(sliing);
    }
    else{
        console.log("bas kar bhai");
    }

})