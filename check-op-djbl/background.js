// // 当浏览器安装插件的时候 
// chrome.runtime.onInstalled.addListener(()=> {
//     chrome.action.setBadgeText({
//         text: 'OFF'
//     })
// })

// // 当 用户点击 插件图标的时候
// chrome.action.onClicked.addListener(async(tab)=> {
//     // 获取当前插件的状态
//     const prevstate= await chrome.action.getBadgeText({ tabId: tab.id})
//     const nextState = prevstate === 'ON' ? 'OFF' : 'ON'

//     // 更新  插件状态文字
//     await chrome.action.setBadgeText({
//         tabId: tab.id,
//         text: nextState
//     })

//     if (nextState === 'ON') {  
//     }
// })


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.shiftClick) {
      const currentIndex = request.index;
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const tabId = tabs[0].id;
          chrome.tabs.sendMessage(tabId, { shiftClick: true, index: currentIndex });
      });
  }
});


