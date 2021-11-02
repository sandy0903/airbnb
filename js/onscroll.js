var bookingNav=document.querySelector(".booking__nav");
window.onscroll=()=>{

    if(window.pageYOffset > 58){
        var nav=document.querySelector(".main__content-header");

        nav.classList.add("scroll");
        
        bookingNav.classList.add("transition");
        
        
    }
    else if(window.pageYOffset < 58){
        var nav=document.querySelector(".main__content-header");
        nav.classList.remove("scroll");
        bookingNav.classList.remove("transition");

        
        
        
       

        
    }

}