/**
 * 
 * MAIN
 * 
 */

let container = document.querySelector(".events-container");

let calendars_path = window.location.pathname;
let calendars_page = calendars_path.split("/").pop();

switch(calendars_page){

    case "calendar_f1.html":
        let f1_calendar = [];
        createRaces(FIA_F1_CHAMPIONSHIP, f1_calendar);
        createCalendar(f1_calendar, container);
        window.onbeforeunload = function(){
    
            f1_calendar.length = 0;
            container.innerHTML = "";

        };
        break;
    
    case "calendar_f2.html":
        let f2_calendar = [];
        createRaces(FIA_F2_CHAMPIONSHIP, f2_calendar);
        console.log(f2_calendar);
        createCalendar(f2_calendar, container);
        window.onbeforeunload = function(){
    
            f1_calendar.length = 0;
            container.innerHTML = "";

        };
        break;
    
    case "calendar_f3.html":
        let f3_calendar = [];
        createRaces(FIA_F3_CHAMPIONSHIP, f3_calendar);
        createCalendar(f3_calendar, container);
        window.onbeforeunload = function(){
    
            f1_calendar.length = 0;
            container.innerHTML = "";

        };
        break;
    
    case "calendar_fe.html":
        let fe_calendar = [];
        createRaces(FIA_FE_CHAMPIONSHIP, fe_calendar);
        createCalendar(fe_calendar, container);
        window.onbeforeunload = function(){
    
            f1_calendar.length = 0;
            container.innerHTML = "";

        };
        break;
    
    case "calendar_wrc.html":
        let wrc_calendar = [];
        createRaces(FIA_WORLD_RALLY_CHAMPIONSHIP, wrc_calendar);
        createCalendar(wrc_calendar, container);
        window.onbeforeunload = function(){
    
            f1_calendar.length = 0;
            container.innerHTML = "";

        };
        break;
    
    case "calendar_wec.html":
        let wec_calendar = [];
        createRaces(FIA_ENDURANCE_CHAMPIONSHIP, wec_calendar);
        createCalendar(wec_calendar, container);
        window.onbeforeunload = function(){
    
            f1_calendar.length = 0;
            container.innerHTML = "";

        };
        break;
    
    case "calendar_his.html":
        let his_calendar = [];
        createRaces(FIA_HISTORIC_RALLY_CHAMPIONSHIP, his_calendar);
        createCalendar(his_calendar, container);
        window.onbeforeunload = function(){
    
            f1_calendar.length = 0;
            container.innerHTML = "";

        };
        break;

};

// FUNZIONI
function createRaces(listOfEvents, calendar){

    calendar.length = 0;

    for(let i=0; i<listOfEvents.length; i++){

        let date, circuit_nation, circuit_nm;
        let asn_confirm = false;
        let homolog = false;
        let junior = false;
        
        let evString = listOfEvents[i];
        evString = evString.trim();
        const evArray = evString.split("\t");

        date = evArray[0];
        circuit_nation = evArray[1];
        
        if(evArray[evArray.length-1].includes("**")){
            
            let ns = evArray[evArray.length-1];
            
            evArray[evArray.length-1] = ns.replace('**'," ");
            
            asn_confirm = true;
            
        }
        
        if(evArray[evArray.length-1].includes('*')){
            
            
            let ns = evArray[evArray.length-1];
            
            evArray[evArray.length-1] = ns.replace("*"," ");
            
            homolog = true;
            
        }
        
        if(evArray[evArray.length-1].includes("Jun")){
            
            
            let ns = evArray[evArray.length-1];
            
            evArray[evArray.length-1] = ns.replace("Jun"," ");
            
            junior = true;
            
        }
        
        circuit_nm = evArray[2];

        let race = {

            when: date,
            where: circuit_nation,
            circuit_name: circuit_nm,
            asn_confirmation: asn_confirm,
            homologation: homolog,
            junior_validity: junior,
    
        }

        calendar.push(race);
        console.log(evArray);
    
    }

}

function createEvent(event){
    let asnClass = "event-asn-confirmation";
    let homologClass = "event-circuit-homologation";
    let juniorClass= "event-junior-wrc";

    if(!event.asn_confirmation) asnClass += " hidden";

    if(!event.homologation) homologClass += " hidden";

    if(!event.junior_validity) juniorClass += " hidden";

    return `
    
    <div class="event-box">

        <div class="event-header">

            <div class="event-date">
                ${event.when}
            </div>

            <div class="event-nation">
                ${event.where}
            </div>

        </div>

        <div class="event-circuit">
            ${event.circuit_name}
        </div>

        <div class="${asnClass}">
            <i class="fa-solid fa-circle-exclamation"></i>
            Subject to ASN's confirmation
        </div>

        <div class="${homologClass}">
            <i class="fa-solid fa-circle-exclamation"></i>
            Subject to circuit homologation
        </div>

        <div class="${juniorClass}">
            <i class="fa-solid fa-circle-exclamation"></i>
            Event counting towards the Junior WRC
        </div>
                
    </div>`

};

function createCalendar(eventsList, eventsBox){

    eventsBox.innerHTML = "";

    for(let i=0; i<eventsList.length; i++){

        const event = createEvent(eventsList[i]);

        eventsBox.innerHTML += event;

    }

};