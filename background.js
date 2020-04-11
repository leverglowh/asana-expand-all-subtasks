chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id,{
        code:
          "const elements = document.getElementsByClassName('SpreadsheetTaskNameCell-subtaskToggleButton'); console.log(elements.length);Array.prototype.forEach.call(elements, e => e.click()); let more = document.getElementsByClassName('SpreadsheetTaskList-showMoreLink'); while(more.length>0) {more[0].click(); more = document.getElementsByClassName('SpreadsheetTaskList-showMoreLink');}"
    });
});
