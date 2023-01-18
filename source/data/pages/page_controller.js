// TODO generatore delle pagine e gestione di (se presenti nell'array OK altrimenti Delete)
// ! per la gestione completa serve il beckend, non appena saprò come farlo, impiegherò altri mezzi
let pageValues = [];

function createPageValues(){

    for(let i=0; i<NEWSARCHIVE_2023.length; i++){

        let paragraphs = [];
        let photos_directories = [];

        for(let j=0; j<NEWSARCHIVE_2023[i].text.length; j++){

            paragraphs.push(NEWSARCHIVE_2023[i].text[j]);

        }

        for(let z=0; z<NEWSARCHIVE_2023[i].news_items.length; z++){

            photos_directories.push(NEWSARCHIVE_2023[i].news_items[z]);

        }

        const article = {

            date: NEWSARCHIVE_2023[i].date,
            author: NEWSARCHIVE_2023[i].name,
            title: NEWSARCHIVE_2023[i].title,
            subtitle: NEWSARCHIVE_2023[i].subtitle,
            text_array: paragraphs,
            photos: photos_directories,

        };

        pageValues.push(article);

    }  

};