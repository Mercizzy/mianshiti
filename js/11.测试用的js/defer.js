// 异步加载，加载完后等整个文档解析完成、DOMContentLoaded 事件即将被触发时

setTimeout(() => {
    let app = document.getElementById("app")
    app.innerHTML = '22222222'
}, 10000)