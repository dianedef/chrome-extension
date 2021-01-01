chrome.runtime.onMessage.addListener(function(message, callback) {
  if (message.data == “setAlarm”) {
    chrome.alarms.create({delayInMinutes: 5})
  } else if (message.data == “runLogic”) {
    chrome.tabs.executeScript({file: 'logic.js'});
  } else if (message.data == “changeColor”) {
    chrome.tabs.executeScript(
        {code: 'document.body.style.backgroundColor="orange"'});
  };
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
});