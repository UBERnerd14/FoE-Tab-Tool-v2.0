(function () {

    window.foeFlags = {
        prod_finished: false,
        new_message: false,
        tab_refresh: 0,
        state_changed: true
    };

    window.emojiFlags = {
        refresh: null,
        message: null,
        production: null
    };

    const world_names = {
        us1: "Arvahall",
        us2: "Brisgard",
        us3: "Cirgard",
        us4: "Dunarsund",
        us5: "East-Nagach",
        us6: "Fel Dranghyr",
        us7: "Greifental",
        us8: "Houndsmoor",
        us9: "Jaims",
        us10: "Korch",
        us11: "Langendorn",
        us12: "Mount Killmore",
        us13: "Noarsil",
        us14: "Odhrorvar",
        us15: "Parkog",
        us16: "Qunrir",
        us17: "Rugnir",
        us18: "Sinerania",
        us19: "Tuulech",
        us20: "Uceria",
        us21: "Vingrid",
        us22: "Walstrand",
        us23: "Xyr",
        us24: "Yorkton",
        us25: "Zorskog",
        us26: "Angkor",
        us27: "Birka",
        us28: "Carthage",
        us29: "Dilmun",
        us30: "Ephesus",
        en1: "Arvahall",
        en2: "Brisgard",
        en3: "Cirgard",
        en4: "Dinegu",
        en5: "East-Nagach",
        en6: "Fel Dranghyr",
        en7: "Greifental",
        en8: "Houndsmoor",
        en9: "Jaims",
        en10: "Korch",
        en11: "Langendorn",
        en12: "Mount Killmore",
        en13: "Noarsil",
        en14: "Odhrorvar",
        en15: "Parkog",
        en16: "Rugnir",
        en17: "Sinerania",
        en18: "Tuulech",
        en19: "Uceria",
        en20: "Vingrid",
        zz1: "Beta",
        zz4: "Prototype",
        ar1: "Arvahall",
        ar2: "Brisgard",
        ar3: "Cirgard",
        ar4: "Dinegu",
        br1: "Arvahall",
        br2: "Brisgard",
        br3: "Cirgard",
        br4: "Dinegu",
        br5: "East-Nagach",
        br6: "Fel Dranghyr",
        br7: "Greifental",
        br8: "Houndsmoor",
        br9: "Jaims",
        br10: "Korch",
        br11: "Langendorn",
        cz1: "Arvahall",
        cz2: "Brisgard",
        cz3: "Cirgard",
        cz4: "Dinegu",
        cz5: "East-Nagach",
        cz6: "Fel Dranghyr",
        cz7: "Greifental",
        cz8: "Houndsmoor",
        dk1: "Arvahall",
        dk2: "Brisgard",
        dk3: "Cirgard",
        dk4: "Dinegu",
        dk5: "East-Nagach",
        fi1: "Arvahall",
        fi2: "Brisgard",
        fi3: "Cirgard",
        fr1: "Arvahall",
        fr2: "Brisgard",
        fr3: "Cirgard",
        fr4: "Dinegu",
        fr5: "East-nagach",
        fr6: "Fel Dranghyr",
        fr7: "Greifental",
        fr8: "Houndsmoor",
        fr9: "Jaims",
        fr10: "Korch",
        fr11: "Langendorn",
        fr12: "Mount Killmore",
        fr13: "Noarsil",
        fr14: "Odhrorvar",
        fr15: "Parkog",
        fr16: "Qunrir",
        fr17: "Rugnir",
        fr18: "Sinerania",
        fr19: "Tuulech",
        fr20: "Uceria",
        fr21: "Vingrid",
        fr22: "Walstrand",
        fr23: "Xyr",
        fr24: "Yorkton",
        de1: "Arvahall",
        de2: "Brisgard",
        de3: "Cirgard",
        de4: "Dinegu",
        de5: "Eldenborough",
        de6: "Fel Dranghyr",
        de7: "Greifental",
        de8: "Houndsmoor",
        de9: "Jaims",
        de10: "Korch",
        de11: "Langendorn",
        de12: "Mount Killmore",
        de13: "Noarsil",
        de14: "Odhrorvar",
        de15: "Parkog",
        de16: "Qunrir",
        de17: "Rugnir",
        de18: "Sinerania",
        de19: "Tuulech",
        de20: "Uceria",
        de21: "Vingrid",
        de22: "Walstrand",
        de23: "Xyr",
        de24: "Yorkton",
        gr1: "Arvahall",
        gr2: "Brisgard",
        gr3: "Cirgard",
        gr4: "Dinegu",
        gr5: "East-Nagach",
        hu1: "Arvahall",
        hu2: "Brisgard",
        hu3: "Cirgard",
        hu4: "Dinegu",
        hu5: "East-Nagach",
        hu6: "Fel Dranghyr",
        it1: "Arvahall",
        it2: "Brisgard",
        it3: "Cirgard",
        it4: "Dinegu",
        it5: "East-Nagach",
        it6: "Fel Dranghyr",
        it7: "Greifental",
        it8: "Houndsmoor",
        it9: "Jaims",
        it10: "Korch",
        it11: "Langendorn",
        jp1: "Arvahall",
        mx1: "Arvahall",
        mx2: "Brisgard",
        mx3: "Cirgard",
        mx4: "Dinegu",
        mx5: "East-Nagach",
        nl1: "Arvahall",
        nl2: "Brisgard",
        nl3: "Cirgard",
        nl4: "Dinegu",
        nl5: "East-Nagach",
        nl6: "Fel Dranghyr",
        nl7: "Greifental",
        no1: "Arvahall",
        no2: "Brisgard",
        no3: "Cirgard",
        no4: "Dinegu",
        no5: "East-Nagach",
        pl1: "Arvahall",
        pl2: "Brisgard",
        pl3: "Cirgard",
        pl4: "Dinegu",
        pl5: "East-Nagach",
        pl6: "Fel Dranghyr",
        pl7: "Greifental",
        pl8: "Houndsmoor",
        pl9: "Jaims",
        pl10: "Korch",
        pl11: "Langendorn",
        pl12: "Mount Killmore",
        pt1: "Arvahall",
        pt2: "Brisgard",
        pt3: "Cirgard",
        pt4: "Dinegu",
        pt5: "East-Nagach",
        ro1: "Arvahall",
        ro2: "Brisgard",
        ro3: "Cirgard",
        ro4: "Dinegu",
        ro5: "East-Nagach",
        ru1: "Арвахал",
        ru2: "Брисгард",
        ru3: "Сигард",
        ru4: "Дайниг",
        ru5: "Нагах",
        ru6: "Фел Драгнир",
        ru7: "Грейфентал",
        ru8: "Хаундсмур",
        ru9: "Джаймс",
        ru10: "Кроуч",
        ru11: "Лангендорн",
        ru12: "Маунт Киллмор",
        ru13: "Норсил",
        ru14: "Одрвар",
        ru15: "Парког",
        ru16: "Кунрир",
        sk1: "Arvahall",
        sk2: "Brisgard",
        sk3: "Cirgard",
        sk4: "Dinegu",
        es1: "Arvahall",
        es2: "Brisgard",
        es3: "Cirgard",
        es4: "Dinegu",
        es5: "East-Nagach",
        es6: "Fel Dranghyr",
        es7: "Greifental",
        es8: "Houndsmoor",
        es9: "Jaims",
        es10: "Korch",
        es11: "Langendorn",
        es12: "Mount Killmore",
        se1: "Arvahall",
        se2: "Brisgard",
        se3: "Cirgard",
        se4: "Dinegu",
        se5: "East-Nagach",
        th1: "Arvahall",
        th2: "Brisgard",
        th3: "Cirgard",
        th4: "Dinegu",
        tr1: "Arvahall",
        tr2: "Brisgard",
        tr3: "Cirgard",
        tr4: "Dinegu",
        tr5: "East-Nagach",
        tr6: "Fel Dranghyr"
    }
    const transitions = [];
    transitions.push({
        id: 0,
        finished_at: Date.now() + 60 * 60 * 24 * 1000
    });

    const start = Date.now();
    const refresh_duration = 4 * 60 * 60 * 1000;
    
    const host = window.location.hostname;
    const subdomain = host.split(".")[0];
    const short = window.location.pathname.split("/")[1];
    const world = world_names[subdomain];

    function updateTab() {

        let emoji_string = "";
        if (window.foeFlags.tab_refresh == 1 && window.emojiFlags.refresh) {
            emoji_string += "♻️";
        }
        /*if (window.foeFlags.tab_refresh == 2) {
            emoji_string += "♻️";
        }*/
        if (window.foeFlags.prod_finished && window.emojiFlags.production) {
            emoji_string += "📦";
        }
        if (window.foeFlags.new_message && window.emojiFlags.message) {
            emoji_string += "🔔";
        }
        if (emoji_string.length > 0) {
            emoji_string += " ";
        }
        if (subdomain) {
            if ((subdomain != "forum") && (host.split(".")[1] != "wiki") && (subdomain.charAt(2) !== "0") && window.foeFlags.state_changed == true) {
                if (short === "game"){
                    if (world) {
                        document.title = emoji_string + subdomain + " | " + world;
                        //console.log(emoji_string + subdomain + " | " + world)
                    } else {
                        document.title = emoji_string + subdomain;
                    }
                    window.foeFlags.state_changed = false;
                } else {
                    document.title = subdomain + " | " + short.charAt(0).toUpperCase() + short.slice(1);
                }
            }
        }
    }

    window.addEventListener("message", (event) => {
        if (event.source !== window) return;

        if (event.data?.type === "FROM_EXTENSION") {
            window.emojiFlags.refresh = event.data?.values?.refresh;
            window.emojiFlags.message = event.data?.values?.message;
            window.emojiFlags.production = event.data?.values?.production;
        }
        //console.log(window.emojiFlags);
        window.foeFlags.state_changed = true;
        updateTab();
    });

    updateTab();

    document.addEventListener("DOMContentLoaded", () => {

        updateTab();

        const titleObserver = new MutationObserver(() => {
            updateTab();
        });

        titleObserver.observe(
            document.querySelector("title"),
            { childList: true }
        );
    });

    if (short != "game") {
        return
    }
    
    function checkBuildings(){
        const min_finish_time = transitions[0].finished_at;
        //console.log("Next production finished in: ", min_finish_time, " w/ ", transitions[0].cityentity_id);
        //console.log("Now: ", Date.now());
        if (Date.now() >= min_finish_time && !window.foeFlags.prod_finished) {
            //console.log("Building production is finished!");
            window.foeFlags.prod_finished = true;
            window.foeFlags.state_changed = true;
            updateTab();
        } else if (Date.now() < min_finish_time && window.foeFlags.prod_finished) {
            //console.log("No buildings finished!");
            window.foeFlags.prod_finished = false;
            window.foeFlags.state_changed = true;
            updateTab();
        }
    }

    function processJson(url, data) {
        try {
            if (!Array.isArray(data)) return;

            data.forEach(entry => {
                
                if (
                    entry.requestClass === "MessageService" &&
                    entry.requestMethod === "newMessage"
                ) {
                    if (entry.responseData === true && !window.foeFlags.new_message){
                        //console.log("New Message!");
                        window.foeFlags.new_message = true;
                        window.foeFlags.state_changed = true;
                        updateTab();

                    } else if (entry.responseData === false && window.foeFlags.new_message) {
                        //console.log("No New Message!");
                        window.foeFlags.new_message = false;
                        window.foeFlags.state_changed = true;
                        updateTab();

                    }
                    //console.log("Message data!")
                }

                let buildingDataFound = false;

                if (
                    entry.requestClass === "StartupService" &&
                    entry.requestMethod === "getData"
                ) {
                    //console.log("Processing buildings!");
                    const entities = entry.responseData.city_map.entities;

                    for (const entity of entities) {
                        const transition = 1000*entity.state?.next_state_transition_in + Date.now();
                        const state = entity.state?.__class__;

                        if (typeof transition === "number" && entity.state?.next_state_transition_in != undefined) {
                            if (transitions.some(item => item.id === entity.id)){
                                const index = transitions.findIndex(item => item.id === entity.id);
                                transitions[index] = {...transitions[index], finished_at: transition};
                            } else {
                                transitions.push({
                                    id: entity.id,
                                    finished_at: transition,
                                    cityentity_id: entity.cityentity_id
                                });
                            }
                            buildingDataFound = true;
                        } else if (state == "ProductionFinishedState" && entity.state?.pausedAt === undefined){
                            if (transitions.some(item => item.id === entity.id)){
                                const index = transitions.findIndex(item => item.id === entity.id);
                                transitions[index] = {...transitions[index], finished_at: 0};
                            } else {
                                transitions.push({
                                    id: entity.id,
                                    finished_at: 0,
                                    cityentity_id: entity.cityentity_id
                                });
                            }
                            buildingDataFound = true;
                        }
                    }
                }
                if (
                    entry.requestClass === "CityProductionService" &&
                    (entry.requestMethod === "pickupProduction" 
                        || entry.requestMethod === "startProduction" 
                        || entry.requestMethod === "pickupAll"
                    )
                ) {
                    //console.log("Processing updated buildings!");
                    const entities = entry.responseData.updatedEntities;

                    for (const entity of entities) {
                        const transition = 1000*entity.state?.next_state_transition_in + Date.now();
                        //console.log(entity.state?.next_state_transition_in);
                        const state = entity.state?.__class__;

                        if (typeof transition === "number" && entity.state?.pausedAt === undefined && state != "IdleState") {
                            if (transitions.some(item => item.id === entity.id)){
                                const index = transitions.findIndex(item => item.id === entity.id);
                                transitions[index] = {...transitions[index], finished_at: transition};
                            } else {
                                transitions.push({
                                    id: entity.id,
                                    finished_at: transition,
                                    cityentity_id: entity.cityentity_id
                                });
                            }
                            buildingDataFound = true;
                        } else if (state == "ProductionFinishedState"){
                            //console.log(state.pausedAt);
                            if (transitions.some(item => item.id === entity.id)){
                                const index = transitions.findIndex(item => item.id === entity.id);
                                transitions[index] = {...transitions[index], finished_at: 0};
                            } else {
                                transitions.push({
                                    id: entity.id,
                                    finished_at: 0,
                                    cityentity_id: entity.cityentity_id
                                });
                            }
                            buildingDataFound = true;
                        } else if (state === "IdleState"){
                            if (transitions.some(item => item.id === entity.id)){
                                index = transitions.findIndex(item => item.id === entity.id);
                                transitions.splice(index, 1);
                            }
                            buildingDataFound = true;
                        }
                    }
                }
                if (
                    entry.requestClass === "CityMapService" &&
                    entry.requestMethod === "updateEntity"
                ) {
                    //console.log("Processing updated entities!");
                    const entities = entry.responseData;

                    for (const entity of entities) {
                        const transition = 1000*entity.state?.next_state_transition_in + Date.now();
                        //console.log(entity.state?.next_state_transition_in);
                        const state = entity.state?.__class__;

                        if (typeof transition === "number" && entity.state?.pausedAt === undefined && entity.state?.next_state_transition_in != undefined) {
                            if (transitions.some(item => item.id === entity.id)){
                                const index = transitions.findIndex(item => item.id === entity.id);
                                transitions[index] = {...transitions[index], finished_at: transition};
                            } else {
                                transitions.push({
                                    id: entity.id,
                                    finished_at: transition,
                                    cityentity_id: entity.cityentity_id
                                });
                            }
                            buildingDataFound = true;
                        } else if (state == "ProductionFinishedState"){
                            if (transitions.some(item => item.id === entity.id)){
                                const index = transitions.findIndex(item => item.id === entity.id);
                                transitions[index] = {...transitions[index], finished_at: 0};
                            } else {
                                transitions.push({
                                    id: entity.id,
                                    finished_at: 0,
                                    cityentity_id: entity.cityentity_id
                                });
                            }
                            buildingDataFound = true;
                        }
                    }
                }
                if (
                    entry.requestClass === "CityProductionService" &&
                    entry.requestMethod === "cancelProduction"
                ) {
                    //console.log("Processing updated entities!");
                    const entity = entry.responseData.updatedEntities[0];
                    const state = entity.state?.__class__;

                    if (state === "IdleState"){
                        if (transitions.some(item => item.id === entity.id)){
                            index = transitions.findIndex(item => item.id === entity.id);
                            transitions.splice(index, 1);
                        }
                        buildingDataFound = true;
                    }
                }
                
                if (buildingDataFound) {
                    transitions.sort((a, b) => a.finished_at - b.finished_at);
                    //console.log(transitions);
                    checkBuildings();
                }

            });
        } catch (e) {
            console.warn("Processing failed", e);
        }
    }

    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function (method, url) {
        this._url = url;
        return originalOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function () {
        this.addEventListener("load", function () {
            try {
                const contentType = this.getResponseHeader("content-type");

                if (contentType && contentType.includes("application/json")) {
                    const data = JSON.parse(this.responseText);
                    processJson(this._url, data);
                    //console.log("Found data! XHR")
                }
            } catch (e) {}
        });

        return originalSend.apply(this, arguments);
    };
    //console.log("FoE Tab Tool loaded");

    function checkTimer() {
        if (Date.now() - start >= refresh_duration && window.foeFlags.tab_refresh == 0) {
            //console.log("Refresh alarm complete!");
            window.foeFlags.tab_refresh = 1;
            window.foeFlags.state_changed = true;
            updateTab();
        }
        checkBuildings();
        setTimeout(checkTimer, 60000);
    }
    //console.log("timer started!");
    checkTimer();

})();