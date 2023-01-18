
const dropDownMenuBtn = document.querySelector("#menuInput");
const welcomeBannerBtn = document.querySelector("#close-banner-button");

const dropDownMenu = document.querySelector(".dropdown-menu");
const welcomebanner = document.querySelector(".welcome-banner");
const mainContainer = document.querySelector(".main-container");
const newsContainer = document.querySelector(".news-container");
const blog = document.querySelector(".blog-section");
/**
 * Main
 */
dropDownMenuBtn.addEventListener("click", toggleMenu);

let path = window.location.pathname;
let page = path.split("/").pop();

window.onload = function(){
    
    if(page == "index.html"){
    
        printNews(6, newsContainer);
    
    }else if(page == "blog-home.html"){
    
        printNews("all", blog);
    
    }

}

const toTopButton = document.querySelector(".to-top-button");

if(toTopButton){

    window.onscroll = function() {
    
        scrollFunction();
    
    };
    
}

function toggleMenu() {

    dropDownMenu.classList.toggle("invisible");
    
    if(!dropDownMenu.classList.contains("invisible")){

        dropDownMenuBtn.innerHTML = '<i class="icon menu-icon fa-solid fa-xmark" style="color:red;"></i>';

    }else{
        
        dropDownMenuBtn.innerHTML = '<i class="icon menu-icon fa-solid fa-bars"></i>';

    }

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

if(welcomeBannerBtn){
    welcomeBannerBtn.addEventListener("click", function(){

        welcomebanner.classList.toggle("removed");

        // mainContainer.children[1] è il primo elemento dopo il welcome banner
        mainContainer.children[1].style = "margin-top: 30px";

    });
};

// prints last 6 news from the blog inside the news-container 
function printNews(n, container){
    let length = n;
    if(n == "all"){
        length = NEWSARCHIVE_2023.length;
    }
    for(let i=0; i<length; i++){

        let event = NEWSARCHIVE_2023[i];
        let news = createNews(event);

        container.innerHTML += news;

    }

}

function createNews(event){

    let trim, title = event.title;

    title = title.split(" ");

    for(let i=0; i<title.length; i++){
        i == 0 ? trim = title[i] : trim += title[i];
    }

    let newsId = event.date + "#" + trim;

    let url = encodeURI(event.news_items[0]);

    return `

        <div class="news-box" id="${newsId}">

            <a class="news-link" href="/source/data/pages/newspage_test.html">

                <div class="news-header">

                    <div class="news-image-box" style="background-image:url(${url});"></div>

                    <div class="news-title">${event.title}</div>
                    
                </div>

                <div class="news-text">
                    ${event.text}
                </div>
            
            </a>

        </div>
    `;

}