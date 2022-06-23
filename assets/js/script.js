const ArrowUpBtn = document.querySelector(".arrowBtn"); 
const header = document.querySelector("header");

if(ArrowUpBtn != null){
  ArrowUpBtn.addEventListener('click', ()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior: "smooth"
    });
  })
}

if(window != null) {
    window.addEventListener("scroll", ()=>{
      var header = this.document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    })
}