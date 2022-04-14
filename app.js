const body = document.querySelector("body")
const headerBtn = document.querySelector(".site-header-btn")



headerBtn.addEventListener("click", ()=> {
    body.classList.toggle("dark-mode")
    if(headerBtn.textContent == "Lighting") {
        headerBtn.textContent="Darking"
    }else{
        headerBtn.textContent="Lighting"  
    }
       
     
})