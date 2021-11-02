var underlineItems=document.querySelectorAll(".underline");
var bookingNavs=document.querySelectorAll(".booking__nav");
function checkActive(item){
    if(item.classList.contains("active")){
        // var parentItem=item.parentElement;
        // var bookingNav=parentItem.querySelector(".booking__nav");
        // bookingNav.classList.add("show")
        var siblingItem=item.nextElementSibling;
        siblingItem.classList.remove("hidden")
        siblingItem.classList.add("show")

    }else{
        var siblingItem=item.nextElementSibling;
        if(siblingItem){
            siblingItem.classList.remove("show")
            siblingItem.classList.add("hidden")
        }
        
        
    }
}

underlineItems.forEach(item=>{
    checkActive(item);
    item.addEventListener("click",()=>{
        
        underlineItems.forEach(item=>item.classList.remove("active"))
        item.classList.add("active");
        underlineItems.forEach(item=>checkActive(item))
       
       
      
    })
    
  
    
})

// get booking__nav content (input place wanna go)
var inputField=document.querySelector(".booking__nav-content");
var parentElement=inputField.parentElement.parentElement;
var button=parentElement.querySelector(".btn-primary");
// get places-table
var table=document.querySelector(".places-table")

inputField.addEventListener("click",()=>{
    table.classList.add("show");
    table2.classList.remove("show")
    titleContent.classList.remove("active-table");

    inputField.classList.add("active-table");
    button.classList.add("exp-btn")
    button.querySelector("span").textContent="Tìm kiếm"


})

var titleContent=document.querySelector(".title-content");
var table2=document.querySelector(".item__celender-2")
titleContent.addEventListener("click",()=>{
    table2.classList.add("show")
    table.classList.remove("show");
    inputField.classList.remove("active-table");

    titleContent.classList.add("active-table");


})
