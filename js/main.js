
// wedding gallery filter

const filterContainer = document.querySelector(".gallery-filter"),
      galleryItems = document.querySelectorAll(".gallery-item");


filterContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("filter-item")){
        
        // deactivate existing active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");

        // activate new 'filter-item'

        event.target.classList.add("active")

        const filterValue = event.target.getAttribute("data-filter");
        
        galleryItems.forEach(function(item){
            if(item.classList.contains(filterValue) || filterValue === 'all'){
              
                item.classList.add("show");
                item.classList.remove("hide");
            }else{

                item.classList.add("hide")
                item.classList.remove("show");
            }
        })
    }
})



// link active

const linkcolor= document.querySelectorAll('.nav__link')

function colorlink(){
    linkcolor.forEach(x => x.classList.remove('active_link'))
    this.classList.add('active_link')
}

linkcolor.forEach(x => x.addEventListener('click',colorlink))



// show hidden navbar
const showMenu = (toggleId, navbarId) =>{
    const toggle = document.getElementById(toggleId),
          navbar = document.getElementById(navbarId)

          if(toggle && navbar){
              toggle.addEventListener('click',()=>{
                   
                // showMenu
                navbar.classList.toggle('show-menu')

                // rotate toggle icon
                toggle.classList.toggle('rotate-icon')
              })
          }
}

showMenu('nav-toggle','nav')