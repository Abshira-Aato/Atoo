
    // const toggleBtn =document.querySelector(".toggle_btn")
    // const togglebtnicon =document.querySelector(".toggle_btn i")

    // const dropdownMenu =document.querySelector(".dropdown_menu")


    // toggleBtn.onclick = function () {
    //     dropdownMenu.classList.toggle('open')
    //     const isopen = dropdownMenu.classList.contains('open')
        
    //     togglebtnicon.classList = isopen
    //     ? 'fa fa-xmark'
    //     :'fa fa-list-ul'
    // }
    let  toggle_btn = document.querySelector(".toggle_btn")
    let  toggle_btnIcon = document.querySelector(".toggle_btn i")
    let dropdown_menu = document.querySelector(".dropdown_menu")
    
    
    
    toggle_btn.onclick = function (){
        dropdown_menu.classList.toggle('active')
        const isopen = dropdown_menu.classList.contains('active')
     
    
        toggle_btnIcon.classList = isopen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars' 
    }


    // let  toggle_btn = document.querySelector(".toggle_btn")
    // let  toggle_btnIcon = document.querySelector(".toggle_btn i")
    // let dropdown_menu = document.querySelector(".dropdown_menu")
    
    
    
    // toggle_btn.onclick =  () => {
    //     dropdown_menu.classList.toggle('active')
    //     const isopen = dropdown_menu.classList.contains('active')
     
    
    //     toggle_btnIcon.classList = isopen
    //     ? 'fa-solid fa-xmark'
    //     : 'fa-solid fa-bars' 
    // }