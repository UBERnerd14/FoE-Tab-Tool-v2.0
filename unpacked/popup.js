if (typeof browser === "undefined") {
  globalThis.browser = chrome;
}

browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    
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
    
    const url = new URL(tabs[0].url);
    const subdomain = url.hostname.split(".")[0];
    const short = window.location.pathname.split("/")[1];

    if ((subdomain == "forum") || (subdomain.charAt(2) == 0) || !(/^[a-z]{2}\d{1,2}$/.test(subdomain))) {
        document.getElementById("world").textContent = "Not a valid world";
        window.close();
        return;
    }

    document.getElementById("main-content").style.display = "block";

    const world = world_names[subdomain];

    document.getElementById("world").textContent = `${world} (${subdomain})`;
    document.getElementById("foestats").href = `https://foestats.com/${subdomain.substring(0, 2)}/${subdomain}/`;
    document.getElementById("scoredb").href = `https://foe.scoredb.io/${subdomain}`;

    document.getElementById("copy-foestats").setAttribute("data-copy", `https://foestats.com/${subdomain.substring(0, 2)}/${subdomain}/`);
    document.getElementById("copy-scoredb").setAttribute("data-copy", `https://foe.scoredb.io/${subdomain}`);

    document.querySelectorAll(".copy-btn").forEach((button) => {
        button.addEventListener("click", async () => {
            const text = button.getAttribute("data-copy");

            await navigator.clipboard.writeText(text);

            const popup = button.parentElement.querySelector(".copied-popup");

            popup.classList.add("show");

            setTimeout(() => {
                popup.classList.remove("show");
            }, 1000);
        });
    });

});

document.addEventListener("DOMContentLoaded", async () => {
    const refreshToggle = document.getElementById("toggle-refresh");
    const productionToggle = document.getElementById("toggle-production");
    const messageToggle = document.getElementById("toggle-message");

    const [tab] = await browser.tabs.query({
        active: true,
        currentWindow: true
    });

    const siteKey = `settings:${new URL(tab.url).hostname}`;

    const result = await browser.storage.local.get(siteKey);

    const settings = {
        refresh: result[siteKey]?.refresh ?? true,
        production: result[siteKey]?.production ?? true,
        message: result[siteKey]?.message ?? true
    };


    refreshToggle.checked = settings.refresh;
    productionToggle.checked = settings.production;
    messageToggle.checked = settings.message;

    async function saveSettings() {
        browser.runtime.sendMessage({
            type: "SETTINGS_UPDATED",
            values: {
                refresh: refreshToggle.checked,
                production: productionToggle.checked,
                message: messageToggle.checked
            }
        });
        await browser.storage.local.set({
            [siteKey]: {
                refresh: refreshToggle.checked,
                production: productionToggle.checked,
                message: messageToggle.checked
            }
        });
    }

    if (result[siteKey]?.refresh === undefined || result[siteKey]?.production === undefined || result[siteKey]?.message === undefined) {
        saveSettings();
    }

    refreshToggle.addEventListener("change", saveSettings);
    productionToggle.addEventListener("change", saveSettings);
    messageToggle.addEventListener("change", saveSettings);
});