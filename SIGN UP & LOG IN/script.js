const form = document.getElementById("form")
const btn = document.getElementById("btn")
// const parent = document.getElementById("nav-btn-div")
// const signBtn = document.getElementById("signup-btn")
// const form2 = document.getElementById("form2")
// const loginBtn = document.getElementById("login-btn")


let newAcc = []
let loginAcc = []

btn.addEventListener('click',function(e){
    e.preventDefault()

    let newNameValue = form.elements.name.value
    let newEmailValue = form.elements.email.value
    let newPassValue = form.elements.password.value

    newAcc.push(newNameValue,newEmailValue,newPassValue)

    alert("Account Was Created Succesfully")

    localStorage.setItem('newNameValue', newNameValue);

    window.location.href = "./mainpage.html";

    // let newElement = document.createElement('p')
    // newElement.textContent = `hello ${newNameValue}`
    // parent.replaceChild(newElement,signBtn)

    form.elements.name.value = ""
    form.elements.email.value = ""
    form.elements.password.value = ""

    console.log(newAcc)
})

// loginBtn.addEventListener('click',function(e){
//     e.preventDefault()

//     let newNameValue2 = form2.elements.name.value
//     let newEmailValue2 = form2.elements.email.value
//     let newPassValue2 = form2.elements.password.value

//     loginAcc.push(newNameValue2,newEmailValue2,newPassValue2)

//     if(loginAcc[0] == newAcc[0]   && loginAcc[1] == newAcc[1]   && loginAcc[2] == newAcc[2]){
//         alert("You Logged In")
//         form2.elements.name.value = ""
//         form2.elements.email.value = ""
//         form2.elements.password.value = ""

//         window.location.href = "./adssad.html";

//     }else{
//         alert("Invalid Credentials")
//         form2.elements.name.value = ""
//         form2.elements.email.value = ""
//         form2.elements.password.value = ""
//     }
// })