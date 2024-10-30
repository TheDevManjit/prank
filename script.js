// let clickValue = false;
 const yesBtn = document.getElementById("yes")
 const noBtn = document.getElementById("no")
 const para = document.getElementById("para")
 let taskRuning = true
 
 function position(){
    noBtn.style.removeProperty('transform')
 }
 
 yesBtn.addEventListener("click",()=>{
    if(taskRuning){
        taskRuning = false
    }
    para.innerHTML = "😄😄😄😄😄😄😄 मुझे मालूम था ही "
    position()
    console.log("yesCliked")
    console.log(clickValue)
    
 })
 noBtn.addEventListener("click",()=>{
    alert("hello")
 })

 noBtn.addEventListener("mouseover", () => {
    if (taskRuning) {
        let rad1 = Math.floor(Math.random() * -100)
        let rad2 = Math.floor(Math.random() * 100)
        noBtn.style.transform = `translate(${rad1}px,${rad2}px)`
        console.log(rad1, rad2)
        console.log("hii")
    }
 })

 
    noBtn.addEventListener("mouseout", () => {
        if(taskRuning){
        let rad1 = Math.floor(Math.random() * (200 - 100 + 1 )) + 100
        let rad2 = Math.floor(Math.random() * 100)
        noBtn.style.transform = `translate(${rad1}px,${rad2}px)`
        console.log(rad1, rad2)
        console.log("hii")
    }
    })
 
 




console.log("hello")