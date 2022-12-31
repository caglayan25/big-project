const menuBtn=document.getElementById("hamburgerMenuBtn")
const navBar=document.getElementById("navbar")

menuBtn.addEventListener("click",()=>{
    console.log(getComputedStyle(navBar).display)
    if(getComputedStyle(navBar).display==="none"){
        navBar.style.display = "block"
    }else{
        navBar.style.display = "none"
    }
})











//getComputedStyle(navBar, null).display