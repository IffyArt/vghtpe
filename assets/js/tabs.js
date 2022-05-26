var tabBox = document.getElementById('tab-box');
// 在已經搜尋出的 DOM 物件內在進行搜尋
var tabBoxTab = tabBox.querySelectorAll('li');
var tabBoxSection = tabBox.querySelectorAll('section');

var triggerTab = function (tabNumber) {
  tabBoxSection.forEach(function (element, index) {
    element.style.display = 'none';
    // 使用 forEach 自帶的 index，同時對 tabBoxTab 進行同樣的處理
    tabBoxTab[index].className = '';
  });
  tabBoxSection[tabNumber].style.display = 'block';
  tabBoxTab[tabNumber].className = 'active';
};

tabBoxTab.forEach(function (element, index) {
  element.onclick = function () {
    triggerTab(index);
  };
});

triggerTab(0);
