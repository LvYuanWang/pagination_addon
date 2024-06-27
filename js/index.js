(function () {
    var page = 13;  // 页码
    var mostNumber = 10;    // 最多显示的页码数
    var pageNumber = 50;    // 页码的总数
    var container = document.querySelector('.container');
    function createContentPage() {
        container.innerHTML = "";
        var min = page - mostNumber / 2;    // 最小数
        if (page <= mostNumber / 2) {
            min = 1;
            max = pageNumber;
        }
        var max = min + mostNumber - 1;     // 最大数
        if (page > pageNumber - 5) {
            max = pageNumber;
        }
        // 创建上一页和页脚
        var home = document.createElement('a');
        home.innerHTML = '首页';
        home.onclick = function () {
            page = 1;
            createContentPage();
        }
        var prev = document.createElement('a');
        prev.innerHTML = '上一页';
        prev.onclick = function () {
            if (page === 1) return;
            page -= 1;
            createContentPage();
        }
        container.appendChild(home);
        container.appendChild(prev);
        // 当page等于1则改变的样式
        if (page === 1) {
            home.setAttribute('class', 'disable');
            prev.setAttribute('class', 'disable');
        }
        // 创建页码
        for (let i = min; i <= max; i++) {
            var pageA = document.createElement('a');
            pageA.innerHTML = i;
            container.appendChild(pageA);
            // 如果i === page将active类加上
            if (i === page) {
                pageA.setAttribute('class', 'active');
            }
            pageA.onclick = function () {
                page = i;
                createContentPage();
            }
        }
        // 创建下一页和页尾
        var next = document.createElement('a'), last = document.createElement('a');
        last.innerHTML = '页尾';
        next.innerHTML = '下一页';
        container.appendChild(next);
        container.appendChild(last);
        last.onclick = function () {
            page = pageNumber;
            createContentPage();
        }
        next.onclick = function () {
            if (page === pageNumber) return;
            page += 1;
            createContentPage();
        }
        // 当page === pageNumber则改变样式
        if (page === pageNumber) {
            next.setAttribute('class', 'disable');
            last.setAttribute('class', 'disable');
        }
        // 显示当前页(page)和总页数(pageNumber)
        var contentPageNumber = document.createElement('span');
        contentPageNumber.setAttribute('class', 'container-content');
        contentPageNumber.innerHTML = `${page}/${pageNumber}`;
        container.appendChild(contentPageNumber);
    }
    var init = function () {
        createContentPage();
    }
    init();
})()