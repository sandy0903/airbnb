//destination box
var input=document.getElementById("input-control");
var searchBtn=document.getElementById("searchBtn");
var navWrapper=document.querySelector(".booking__nav");
var ul=document.querySelector(".ul");
var video=document.querySelector("#video-icon")
var tableFlex=document.querySelector("#flex-table");
var line1=document.querySelector("#line-1")

// table cenlender
var tableCelender=document.querySelector(".celender");
var headerCelender=document.querySelector(".celender__header")
var bookignNav=document.querySelector(".booking__nav");
var checkIn=document.querySelector(".check-in")
var checkOut=document.querySelector(".check-out")
//quantity table
var quantityTable=document.querySelector(".quantity-check")
document.addEventListener("click",(e)=>{
    //navWrapper's item (e.target) has class= ".active-table"  => remove item's class".active-table"
    if(navWrapper.contains(e.target)){
        navWrapper.querySelectorAll(".active-table").forEach(item=>{
    //if item (e.targte) > tableCelender nothing happend
            if(tableCelender.contains(item)){
                return
            }
    // if item (e.target) !> tableCelender remove class
            else{
                item.classList.remove("active-table")
                
            }
                
        })
    // e.target => click => auto add ".active-table"
        e.target.classList.add("active-table");
    // e.target > tableCelender => remove ".active-table" ? override styled element
        if(tableCelender.contains(e.target)){
            e.target.classList.remove("active-table")
        }
    // add class to size the element 
        navWrapper.querySelectorAll(".booking__nav-item").forEach(item=>item.classList.add("booking__nav-button"));
    
        searchBtn.textContent="Tìm kiếm";
    // show destination box => auto load video : del celender : del quantityTable 
        if(e.target.classList.contains("booking__nav-destination")){      
            ul.classList.remove("show-celender");  
            quantityTable.classList.remove("show")  
            tableFlex.classList.add("show"); 
            video.load();  
        }
        else if(e.target.classList.contains("check-in") || e.target.classList.contains("check-out")){
            tableFlex.classList.remove("show")
            quantityTable.classList.remove("show")
            ul.classList.add("show-celender");
        // change style of "p" when has event "click"    
            let celenderChildren=headerCelender.querySelectorAll("p");
            celenderChildren.forEach(item=>{
            item.addEventListener("click",()=>{
                celenderChildren.forEach(item=>item.classList.remove("active-element"));
                item.classList.add("active-element");
                if(item.classList.contains("flexible-day")){
                    tableCelender.querySelector(".celender__body-second").classList.add("show");
                    tableCelender.querySelector(".celender__body-first").classList.remove("show");
                
                }
                else{
                    tableCelender.querySelector(".celender__body-second").classList.remove("show");
                    tableCelender.querySelector(".celender__body-first").classList.add("show");
                }
                
            })
        }
        )
        

        }
        else if(e.target.classList.contains("search")){
            tableFlex.classList.remove("show");
            quantityTable.classList.add("show")
            ul.classList.remove("show-celender");

        }
    }
    
    
  
    else{
        navWrapper.querySelectorAll(".active-table").forEach(item=>item.classList.remove("active-table"));

        navWrapper.querySelectorAll(".booking__nav-item").forEach(item=>item.classList.remove("booking__nav-button"));
        tableCelender.classList.remove("show")
        quantityTable.classList.remove("show")
        ul.classList.remove("show-celender");
        tableFlex.classList.remove("show");
        searchBtn.textContent="";
       
        
    }

    

})
//time to stay
var time=tableCelender.querySelectorAll(".btn");
time.forEach(item=>{
    item.addEventListener("click",()=>{
        time.forEach(item=>item.classList.remove("active-btn"))
        item.classList.add("active-btn")
    })
})
// months 
var months=tableCelender.querySelectorAll(".btn-box");
months.forEach(month=>{
    if(month.classList.contains("active-box")){
        month.firstElementChild.src="https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg"
    }
    month.addEventListener("click",()=>{
        if(month.classList.contains("active-box")){
            month.classList.remove("active-box");
            month.firstElementChild.src="https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg"

        }else{
            month.classList.add("active-box");

            month.firstElementChild.src="https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg"
        }
       
      
    })
})