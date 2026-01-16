

const counter=document.getElementById("counter")
const btn=document.getElementById("counterBtn")
btn.addEventListener("click",()=>{
    const count=document.getElementById("count")
    count.textContent=+count.textContent+1
})

