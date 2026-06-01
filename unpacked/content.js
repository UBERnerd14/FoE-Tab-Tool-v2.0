if (typeof browser === "undefined") {
  globalThis.browser = chrome;
}

const script = document.createElement("script");
script.src = browser.runtime.getURL("injected.js");
script.onload = () => script.remove();
(document.head || document.documentElement).appendChild(script);

const siteKey = `settings:${location.hostname}`;

browser.storage.local.get(siteKey, (result) => {
    const settings = result[siteKey];
    if (settings === undefined){
        browser.storage.local.set({
            [siteKey]: { 
                refresh_enabled: true, 
                production_enabled: true,
                message_enabled: true 
            }
        });
        requestIdleCallback(() => {
            window.postMessage({ type: "FROM_EXTENSION", values: { 
                refresh: true, 
                production: true,
                message: true 
            }}, "*");
        });
    } else {
        requestIdleCallback(() => {
            window.postMessage({ type: "FROM_EXTENSION", values: settings }, "*");
        });
    }   
});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SETTINGS_UPDATED") {
    window.postMessage({
      type: "FROM_EXTENSION",
      values: message.values
    }, "*");
  }
});