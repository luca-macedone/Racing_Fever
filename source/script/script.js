
const dropDownMenuBtn = document.querySelector("#menuInput");
const welcomeBannerBtn = document.querySelector("#close-banner-button");
const toTopButton = document.querySelector(".to-top-button");
const dropDownMenu = document.querySelector(".dropdown-menu");
const welcomebanner = document.querySelector(".welcome-banner");
const mainContainer = document.querySelector(".main-container");

/**
 * Main
 */
dropDownMenuBtn.addEventListener("click", function(){

    dropDownMenu.classList.toggle("invisible");
    
    if(!dropDownMenu.classList.contains("invisible")){
        dropDownMenuBtn.innerHTML = '<i class="icon menu-icon fa-solid fa-xmark" style="color:red;"></i>';
    }else{
        dropDownMenuBtn.innerHTML = '<i class="icon menu-icon fa-solid fa-bars"></i>';
    }
    

});

if(toTopButton){

    window.onscroll = function() {
    
        scrollFunction();
    
    };
    
}

function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    toTopButton.style.display = "block";

    toTopButton.addEventListener("click", function(){
    
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    
    });

  } else {

    toTopButton.style.display = "none";

  }
}

// window.onclick = function(event) {

//     if (!event.target.matches('#menuInput')) {

//         var dropdowns = document.querySelectorAll("dropdown-menu");
//         var i;

//         for (i = 0; i < dropdowns.length; i++) {

//             var openDropdown = dropdowns[i];

//             if (!openDropdown.classList.contains('invisible')) {

//                 openDropdown.classList.add('invisible');

//             }

//         }

//     }

// };

if(welcomeBannerBtn){
    welcomeBannerBtn.addEventListener("click", function(){

        welcomebanner.classList.toggle("removed");

        // mainContainer.children[1] è il primo elemento dopo il welcome banner
        mainContainer.children[1].style = "margin-top: 30px";

    });
};