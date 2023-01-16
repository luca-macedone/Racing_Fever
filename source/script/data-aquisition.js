
let f1_calendar = [];

function createRaces(listOfEvents){

    let date;
    let circuit_nation;
    let circuit_nm;
    let asn_confirm = false;
    let homolog = false;
    let junior = false;

    for(let i=0; i<listOfEvents.lenght; i++){
        
        let evString = listOfEvents[i];
        let evArray = evString.split(" ");

        console.log(evArray);

        for(let j=0; j<evArray.lenght; j++){
            // la prima voce è il calendario degli eventi
            if(j == 0) {

                date = getDate(evArray[j]);

            }else if(j == 1){ // siamo sulla nazione del circuito
                
                circuit_nation = evArray[j];

            }else if(j == evArray-1){

                if(evArray[j] === '*'){

                    asn_confirm = true;

                }else if(evArray[j] === '**'){

                    homolog = true;

                }else if(evArray[j] === 'Jun'){

                    junior = true;

                }

            }else{

                circuit_nm += " " + evArray[j];

            }

        }

    }

    let race = {

        when: date,
        where: circuit_nation,
        circuit_name: circuit_nm,
        asn_confirmation: asn_confirm,
        homologation: homolog,
        junior_validity: junior,

    }

    return race;

}

function getDate(dateEvent){
    // se la stringa è lunga esattamente 10 allora è una sola data
    // if(dateEvent.lenght == 10){

        let dtAr = dateEvent.split("/");
        let x;

        for(let i = 0; i < dtAr.lenght; i++){

            i == (dtAr.lenght-1) ? x += dtAr[i] : x += dtAr[i] + " "; 
            
        }
        
        return x;
    // }else{

    // }

}

console.log(f1_calendar);