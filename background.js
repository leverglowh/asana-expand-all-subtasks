chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id,{
        code:
          "const elements = document.getElementsByClassName('SpreadsheetTaskNameCell-subtaskToggleButton');let len = elements.length;for (let i = 0; i < len; i++) {elements[i].click();} let timer = setInterval(()=>{const more = document.getElementsByClassName('SpreadsheetTaskList-showMoreLink'); if (more.length==0) {clearInterval(timer);} more[0].click();}, 10);"
    });
});
