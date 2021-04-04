function compute(){
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    num_years = document.getElementById("years").value;
    
    interest = principal * num_years * rate / 100
    current_yr = new Date().getFullYear()
    future_yr = current_yr + parseInt(num_years)

    if (validnum()) {
        document.getElementById("result").innerHTML =
        `If you deposit <mark>${principal}</mark>,<br/>
        at an interest rate of <mark>${rate}%</mark>.<br/>
        You will receive an amount of <mark>${interest}</mark>,<br/>
        in the year <mark>${future_yr}</mark>`
    }
}

function readval(){
    inp = document.getElementById("rate")
    out = document.getElementById("rateval")
    inp.addEventListener('input',function () {
        out.innerHTML = inp.value + "%";
    }, false);
}

function validnum(){
    amount = document.getElementById("principal").value;
    if (amount <= 0) {
        alert('Enter a positive number')
        document.getElementById("principal").focus()
        return false
    } else {
        return true
    }
}