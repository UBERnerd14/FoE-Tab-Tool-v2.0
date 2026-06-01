if (typeof browser === "undefined") {
  globalThis.browser = chrome;
}

browser.runtime.onInstalled.addListener(() => {
    console.log("Foe Tab Tool listener successfully added");
});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SETTINGS_UPDATED") {
    //console.log("Got setting:", message);

    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs[0]) return;

        browser.tabs.sendMessage(tabs[0].id, message);
    });
  }
});