 let navBar=document.querySelector(".navbar");
 let menuBar=document.querySelector(".fa-bars");
  menuBar.addEventListener("click",()=>{
     navBar.classList.toggle("active");
  })
 


  window.onscroll=()=>{
    navBar.classList.remove("active");
  }