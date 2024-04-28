// 记录上一次点击的复选框索引
let lastClickedIndex = -1;

document.addEventListener('click', event => {
    const target = event.target; // 获取事件的目标元素

    // 检查目标元素是否为复选框
    if (target && target.tagName === 'INPUT' && target.type === 'checkbox') {
        // 如果按下了 Alt 键
        if (event.altKey) {
            // 获取页面中所有的复选框元素
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            const startIndex = lastClickedIndex; // 上一次点击的索引作为起始索引
            console.log(startIndex)
            const endIndex = Array.from(checkboxes).indexOf(target); // 当前点击的索引作为结束索引

            // 确定起始和结束索引
            const start = Math.min(startIndex, endIndex);
            const end = Math.max(startIndex, endIndex);

            // 遍历范围内的复选框
            for (let i = start; i <= end; i++) {
                checkboxes[i].click();
            }
            checkboxes[startIndex].click();
            // checkboxes[endIndex].click();
            checkboxes = true
        } else {
            // 更新上一次点击的复选框索引
            lastClickedIndex = Array.from(document.querySelectorAll('input[type="checkbox"]')).indexOf(target);
        }
    }
});













































