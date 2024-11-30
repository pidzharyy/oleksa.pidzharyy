document.addEventListener("DOMContentLoaded", function(){
    
    let filterTitle = document.querySelector(".filters h3");

    filterTitle.addEventListener("click", (el) => {
        filterTitle.parentNode.classList.toggle("open");
    });

});