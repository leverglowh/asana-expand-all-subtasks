chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id,{
        code:
          "if (window.contentScriptInjected !== true) {  window.contentScriptInjected = true;  let elements = document.getElementsByClassName('ProjectSpreadsheetGridRow-subtaskToggleButton');  let len = elements.length;  for (let i = 0; i < len; i++) {    if (elements[i].getElementsByClassName('Icon RightTriangleIcon').length !== 0) elements[i].click();  }  let timer = setInterval(() => {    const more = document.getElementsByClassName('SpreadsheetTaskList-showMoreLink');    if (more.length == 0) {      clearInterval(timer);    }    more[0].click();  }, 10);} else {  console.log('else');  elements = document.getElementsByClassName('ProjectSpreadsheetGridRow-subtaskToggleButton');  len = elements.length;  for (let i = 0; i < len; i++) {    if (elements[i].getElementsByClassName('Icon RightTriangleIcon').length !== 0) elements[i].click();  }  let timer = setInterval(() => {    const more = document.getElementsByClassName('SpreadsheetTaskList-showMoreLink');    if (more.length == 0) {      clearInterval(timer);    }    more[0].click();  }, 10);}"
    });
});
