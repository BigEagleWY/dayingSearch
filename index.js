const search = require("./search/search");
const url = "https://juejin.im/search?query=node";
const keyword = "node";
const selectText = "ul.entry-list li.item a.title";
search(url,keyword,selectText,{
    interval:1,
    from:1,
    to:5,
    urlPro:"https://juejin.im/search?query=node&t=",
    urlAfter:"&x=xxx"
});