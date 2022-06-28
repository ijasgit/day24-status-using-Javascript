let submitbtn = document.getElementById("button")
submitbtn.addEventListener("click", handlesubmit)
function handlesubmit() {
    let display = document.getElementById("dropdown").value;
    console.log(display)

    if (display == "open") {
        document.getElementById("output1").innerHTML = "we are Open"
    }
    else if (display == "close") {
        document.getElementById("output1").innerHTML = "we are Close"
    }
}