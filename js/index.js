const counter = document.getElementById("counter");
let counterValue = counter.value;

function handleCounterPlus() {
    counter.value = ++counterValue;
}
function handleCounterMin() {
    counter.value = --counterValue;
}