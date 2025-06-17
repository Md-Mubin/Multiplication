// All Documentation
let input       = document.querySelector(".multiplicand .input")
let input2      = document.querySelector(".multiplier .input")
let button      = document.querySelector(".btn")
let buttonInfo  = document.querySelector(".btn_info")
let button2     = document.querySelector(".btn2")
let button2Info = document.querySelector(".btn2_info")
let info        = document.querySelector(".info")
let outcome     = document.querySelector(".outcome")
let error       = document.querySelector(".error")

// For Produce Button
button.addEventListener("click", () => {

    outcome.innerHTML = ""
    error.innerHTML = ""
    info.innerHTML = ""

    // For Both Value
    if (input.value != "", input2.value != "") {

        info.innerHTML = "Multiplication of " + input.value + "<br>" + " till " + input2.value + " Multiplier :"

        for (let i = 1; i <= input2.value; i++)
            outcome.innerHTML += input.value + " x " + i + " = " + input.value * i + "<br>"
    }

    // For Only Multiplicand Value
    else if (input2.value == "", input.value != "") {

        info.innerHTML = "Multiplication of " + input.value + "<br>" + " till 10 Multiplier :"

        for (let i = 1; i < 11; i++)
            outcome.innerHTML += input.value + " x " + i + " = " + input.value * i + "<br>"
    }

    // For Blank Input
    else {
        outcome.innerHTML = ""
        error.innerHTML = "Please Input Something Here"
    }
})

// For Produce Button Double-Click
button.addEventListener("dblclick" , ()=> {

    buttonInfo.innerHTML = "Calm Down🙃"
    buttonInfo.style.width = "120px"
})

// For Produce Button Hover 
button.addEventListener("mouseover" , ()=> {

    buttonInfo.innerHTML = "For Producing The Data"
    buttonInfo.style.width = "230px"
})

// For Produce Button Un-hover
button.addEventListener("mouseout" , ()=> {

    buttonInfo.innerHTML = ""
})

// For Cancelling All Value Menually
button2.addEventListener("click", () => {

    input.value = ""
    input2.value = ""
    outcome.innerHTML = ""
    error.innerHTML = ""
    info.innerHTML = ""
})

// For Canelling Button Double-Click
button2.addEventListener("dblclick" , ()=> {

    button2Info.innerHTML = "Relax!! 🖐️🧐"
    button2Info.style.width = "120px"
})

// For Canelling Button Hover
button2.addEventListener("mouseover" , ()=> {

    button2Info.innerHTML = "For Cancelling The Data"
    button2Info.style.width = "230px"
})

// For Canelling Button Un-hover
button2.addEventListener("mouseout" , ()=> {
    
    button2Info.innerHTML = ""
})

