const button = document.getElementById("button")
const advice = document.getElementById("advice");
const id = document.getElementById("id");
async function getAdvice() {
    let obj;
    const res = await fetch("https://api.adviceslip.com/advice")
    obj = await res.json()
    return obj;
}
async function setAdvice(){
    result = await getAdvice();
    id.innerText = result.slip.id;
    advice.innerText=`“${result.slip.advice}”`;
}
window.addEventListener("load",setAdvice);
button.addEventListener("click", setAdvice);