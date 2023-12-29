const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "The quality of mercy is not strained , dropeth as a gentle rain"
let speed = 300
let idx= 1
speedEl.addEventListener('input',(e)=>speed = 300/e.target.value)

writeText()

function writeText()
{
textEl.innerText= text.slice(0,idx)
idx++
if(idx>text.length){
    idx=1
}
setTimeout(writeText,speed)//loop , know it's working 
}
